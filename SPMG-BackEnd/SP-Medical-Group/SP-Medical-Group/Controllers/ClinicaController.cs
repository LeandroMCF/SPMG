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

        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Clinica novaClinica)
        {
            try
            {
                _clinica.AdicionarClinica(novaClinica);

                return StatusCode(202);

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                _clinica.RemoverClinica(id);

                return StatusCode(204);

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        //[Authorize(Roles = "1")]
        [HttpGet("Listar")]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_clinica.ListarClinica());

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
