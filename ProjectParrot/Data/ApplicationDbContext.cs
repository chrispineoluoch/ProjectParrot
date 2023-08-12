using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ProjectParrot.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ProjectParrot.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<UserLoginLogs> UserLoginLogsDbSet { get; set; }
    }
}