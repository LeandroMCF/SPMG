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
    public class UsuarioController : ControllerBase
    {
        private IUsuario _usuario { get; set; }

        public UsuarioController()
        {
            _usuario = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Cadastrar(Usuario novoUsuario)
        {
            try
            {
                _usuario.cadastrar(novoUsuario);

                return StatusCode(202);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
            
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_usuario.Listar());

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpDelete("{Id}")]
        public IActionResult Deletar(int Id)
        {
            try
            {
                _usuario.Deletar(Id);

                return StatusCode(204);

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("{Id}")]
        public IActionResult BuscarId(int Id)
        {
            try
            {
                return Ok(_usuario.BuscarPorId(Id));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("tipo/{Id}")]
        public IActionResult BuscarTipoId(int Id)
        {
            try
            {
                return Ok(_usuario.BuscarPorTipoId(Id));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
