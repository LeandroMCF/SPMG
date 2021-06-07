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
            return Ok(_medico.ListarMedico());
        }

        [HttpPost]
        public IActionResult Cadastrar(Medico novoMedico)
        {
            _medico.Cadastrar(novoMedico);


            return StatusCode(202);
        }

        [HttpPost("Buscar")]
        public IActionResult Buscar(Medico medico)
        {
            return Ok(_medico.BuscarPorCRM(medico.Crm));
        }
    }
}
