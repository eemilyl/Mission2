using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class CalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Assignment Grade must be between 0 and 100")]
        public Double assign { get; set; }
        [Range(0, 100, ErrorMessage = "Group Assignment Grade must be between 0 and 100")]
        public Double group { get; set; }
        [Range(0, 100, ErrorMessage = "Quiz Grade must be between 0 and 100")]
        public Double quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Exam Grade must be between 0 and 100")]
        public Double exam { get; set; }
        [Range(0, 100, ErrorMessage = "Intex Grade must be between 0 and 100")]
        public Double intex { get; set; }
    }
}
