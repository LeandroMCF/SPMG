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
        
        [HttpGet("medicos/{id}")]
        public IActionResult BuscarM(int id)
        {
            return Ok(_consulta.ListarConsultaIdMedicos(id));
        }

        [HttpGet("prontuarios/{id}")]
        public IActionResult BuscarP(int id)
        {
            return Ok(_consulta.ListarConsultaIdProntuarios(id));
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_consulta.ListarConsulta());
        }

        [HttpPost]
        public IActionResult Agendar(Consulta novaConsulta)
        {
            _consulta.Agendar(novaConsulta);

            return StatusCode(202);
        }

        [HttpDelete("{id}")]
        public IActionResult Cancelar(int id)
        {
            _consulta.CancelarConsulta(id);

            return StatusCode(204);
        }
    }
}
