using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectParrot.Models
{
    [Table("UserLoginLogs")]
    public class UserLoginLogs
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public string? UserName { get; set; }

        [DisplayFormat(DataFormatString = "{0:MM/dd/yy}", ApplyFormatInEditMode = true)]
        public DateTime LoginDate { get; set; }

        [DisplayFormat(DataFormatString = "{0:MM/dd/yy}", ApplyFormatInEditMode = true)]
        public DateTime? LogoutDate { get; set; }
        public TimeSpan? LoginDuration { get; set; }
    }
}
