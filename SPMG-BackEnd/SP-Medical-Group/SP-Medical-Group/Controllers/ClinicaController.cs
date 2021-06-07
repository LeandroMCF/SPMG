using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP_Medical_Group.Domains;
using SP_Medical_Group.Interfaces;
using SP_Medical_Group.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicaController : ControllerBase
    {
        private IClinica _clinica { get; set; }

        public ClinicaController()
        {
            _clinica = new ClinicaRepository();
        }

        [HttpPost]
        public IActionResult Cadastrar(Clinica novaClinica)
        {
            _clinica.AdicionarClinica(novaClinica);

            return StatusCode(202);
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            _clinica.RemoverClinica(id);

            return StatusCode(204);
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_clinica.ListarClinica());
        }
    }
}
