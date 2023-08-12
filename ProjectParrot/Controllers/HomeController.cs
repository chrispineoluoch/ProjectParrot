using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using ProjectParrot.Models;
using System.Diagnostics;

namespace ProjectParrot.Controllers
{
    public class HomeController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IEmailSender _emailSender;
        private readonly ILogger<HomeController> _logger;

        // Constructor with dependencies injected
        public HomeController(ILogger<HomeController> logger, IEmailSender emailSender, IConfiguration configuration)
        {
            _logger = logger;
            _emailSender = emailSender;
            _configuration = configuration;
        }

        // Home page action
        public IActionResult Index()
        {

            return View();
        }

        // Privacy policy page action
        public IActionResult Privacy()
        {
            return View();
        }

        // Terms of Use page action
        public IActionResult TermsOfUse()
        {
            return View();
        }

        // Error page action
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
