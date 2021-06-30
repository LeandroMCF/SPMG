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
    public class MedicoController : ControllerBase
    {
        private IMedico _medico { get; set; }

        public MedicoController()
        {
            _medico = new MedicoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_medico.ListarMedico());

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Medico novoMedico)
        {
            try
            {
                _medico.Cadastrar(novoMedico);

                return StatusCode(202);

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost("Buscar")]
        public IActionResult Buscar(Medico medico)
        {
            try
            {
                return Ok(_medico.BuscarPorCRM(medico.Crm));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
