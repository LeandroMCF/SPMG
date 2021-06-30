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
        private IMedico _medico { get; set; }

        public ConsultaController()
        {
            _consulta = new ConsultaRepository();
            _medico = new MedicoRepository();
        }
        
        [HttpGet("medicos/{id}")]
        public IActionResult BuscarM(int id)
        {
            try
            {
                return Ok(_consulta.ListarConsultaIdMedicos(id));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("prontuarios/{id}")]
        public IActionResult BuscarP(int id)
        {
            try
            {
                return Ok(_consulta.ListarConsultaIdProntuarios(id));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }

        }

        [HttpGet("prontuarios/Concluidas/{id}")]
        public IActionResult BuscarPC(int id)
        {
            try
            {
                return Ok(_consulta.ListarConsultaIdProntuariosConcluidas(id));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }

        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_consulta.ListarConsulta());
        }

        
        [HttpPost("cadastrar")]
        public IActionResult Agendar(Consulta novaConsulta)
        {
            try
            {
                _consulta.Agendar(novaConsulta);

                return StatusCode(202);

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [Authorize(Roles = "1, 2")]
        [HttpDelete("{id}")]
        public IActionResult Cancelar(int id)
        {
            try
            {
                _consulta.CancelarConsulta(id);

                return StatusCode(204);

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
