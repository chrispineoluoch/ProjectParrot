using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ProjectParrot.Data;
using System.Configuration;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

// Get configuration settings
var config = builder.Configuration;

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

// Adds the default identity system with IdentityUser model and enables confirmed account requirement
builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();

// Adds MVC services to the container
builder.Services.AddControllersWithViews();

// Adds the EmailSender service to the container
builder.Services.AddTransient<IEmailSender, EmailSender>();

// Adds external authentication services to the container
builder.Services.AddAuthentication()
   .AddGoogle(options =>
   {
       IConfigurationSection googleAuthNSection = config.GetSection("Authentication:Google");
       options.ClientId = googleAuthNSection["ClientId"];
       options.ClientSecret = googleAuthNSection["ClientSecret"];
   })
   .AddMicrosoftAccount(microsoftOptions =>
   {
       microsoftOptions.ClientId = config["Authentication:Microsoft:ClientId"];
       microsoftOptions.ClientSecret = config["Authentication:Microsoft:ClientSecret"];
   });

// Configures the data protection token provider options
builder.Services.Configure<DataProtectionTokenProviderOptions>(o =>
       o.TokenLifespan = TimeSpan.FromHours(1));

// Configures the application cookie options
builder.Services.ConfigureApplicationCookie(o =>
{
    o.ExpireTimeSpan = TimeSpan.FromDays(5);
    o.SlidingExpiration = true;
});

// Builds the application
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Adds middleware to the pipeline for showing endpoint information for debugging purposes
    app.UseMigrationsEndPoint();
}
else
{
    // Adds middleware to the pipeline for handling exceptions
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// Adds middleware to the pipeline for redirecting HTTP requests to HTTPS
app.UseHttpsRedirection();

// Adds middleware to the pipeline for serving static files
app.UseStaticFiles();

// Adds middleware to the pipeline for routing
app.UseRouting();

// Adds middleware to the pipeline for authentication   
app.UseAuthentication();

// Adds middleware to the pipeline for authorization
app.UseAuthorization();

// Adds middleware to the pipeline for handling MVC requests
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Adds middleware to the pipeline for handling Razor Pages requests
app.MapRazorPages();

// Configure the logout or session expiration handling
app.Use(async (context, next) =>
{
    var user = context.User;
    if (user?.Identity?.IsAuthenticated ?? false)
    {
        // Get the current user's ID, login time, or any other necessary information
        var userId = user.FindFirstValue(ClaimTypes.NameIdentifier);
        var loginTime = DateTime.UtcNow;

        // Call the next middleware in the pipeline
        await next();

        // Handle logout or session expiration
        // Check if the user is still authenticated after the subsequent middleware execution
        var isAuthenticated = context.User?.Identity?.IsAuthenticated ?? false;
        if (!isAuthenticated)
        {
            // User has logged out or session has expired
            // Update the UserLoginLogs table with the logout time and calculate the login duration
            using (var scope = app.Services.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                if (dbContext != null)
                {
                    // Retrieve the corresponding UserLoginLogs entry for the user
                    var loginLog = await dbContext.UserLoginLogsDbSet.SingleOrDefaultAsync(log => log.UserId == userId);

                    if (loginLog != null)
                    {
                        // Set the logout time and calculate the login duration
                        loginLog.LogoutDate = DateTime.UtcNow;
                        loginLog.LoginDuration = loginLog.LogoutDate - loginLog.LoginDate;

                        // Save the changes to the database
                        await dbContext.SaveChangesAsync();
                    }
                }
            }
        }
    }
    else
    {
        // User is not authenticated, continue with the pipeline
        await next();
    }
});






// Runs the application
app.Run();