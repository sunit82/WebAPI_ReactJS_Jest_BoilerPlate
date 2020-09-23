using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI_ReactJS_Jest_BoilerPlate.Models;

namespace WebAPI_ReactJS_Jest_BoilerPlate.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("api/{controller}/{action}")]
        [ActionName("Index")]
        public IActionResult Index()
        {
            ActionResult actionResult;
            var data = GenerateData();
            actionResult = new OkObjectResult(data);
            return actionResult;
        }

        private List<DemoData> GenerateData(int count = 10)
        {
            List<DemoData> data = new List<DemoData>();
            for (int i = 1; i < count; i++)
            {
                data.Add(new DemoData
                {
                    Id = i,
                    Name = "Sample " + i.ToString(),
                    Description = "This is sample data " + i.ToString()
                });
            }
            return data;
        }
    }
}
