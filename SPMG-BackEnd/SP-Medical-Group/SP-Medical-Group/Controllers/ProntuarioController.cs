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
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ProntuarioController : ControllerBase
    {
        IProntuario _prontuario { get; set; }

        public ProntuarioController()
        {
            _prontuario = new ProntuarioRepository();
        }


        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_prontuario.ListarProntuario());

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("buscarId/{id}")]
        public IActionResult BuscarId(int id)
        {
            try
            {
                return Ok(_prontuario.BuscarPorId(id));

            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar(Prontuario novoProntuario)
        {
            try
            {
                _prontuario.CadastrarProntuario(novoProntuario);

                return StatusCode(202);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {

                _prontuario.ExcluirProtuario(id);

                return StatusCode(204);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
