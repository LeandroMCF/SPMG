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
    public class ConsultaController : ControllerBase
    {
        private IConsulta _consulta { get; set; }

        public ConsultaController()
        {
            _consulta = new ConsultaRepository();
        }

        [Authorize(Roles = "2, 3")]
        [HttpGet("{id}")]
        public IActionResult Buscar(int id)
        {
            return Ok(_consulta.ListarConsultaId(id));
        }

        [Authorize(Roles = "1")]
        [HttpGet]
        public IActionResult Listtar()
        {
            return Ok(_consulta.ListarConsulta());
        }

        [Authorize(Roles = "2")]
        [HttpPost]
        public IActionResult Agendar(Consulta novaConsulta)
        {
            _consulta.Agendar(novaConsulta);

            return StatusCode(202);
        }

        [Authorize(Roles = "2")]
        [HttpDelete("{id}")]
        public IActionResult Cancelar(int id)
        {
            _consulta.CancelarConsulta(id);

            return StatusCode(204);
        }
    }
}
