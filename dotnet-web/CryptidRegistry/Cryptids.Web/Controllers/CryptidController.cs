using Cryptids.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cryptids.Web.Controllers;

public class CryptidsController : Controller
{
    public IActionResult Index()
    {
        return View(CryptidData.All);
    }

    public IActionResult Details(int id)
    {
        var cryptid = CryptidData.All.FirstOrDefault(c => c.Id == id);

        if (cryptid == null)
        {
            return NotFound();
        }

        return View(cryptid);
    }
}