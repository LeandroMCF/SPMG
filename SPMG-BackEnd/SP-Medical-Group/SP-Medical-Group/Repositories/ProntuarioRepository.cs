using Microsoft.EntityFrameworkCore;
using SP_Medical_Group.Contexts;
using SP_Medical_Group.Domains;
using SP_Medical_Group.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Repositories
{
    public class ProntuarioRepository : IProntuario
    {
        SPMGContext ctx = new SPMGContext();

        public Prontuario BuscarPorCpf(string cpf)
        {
            return ctx.Prontuarios
                .Include(p => p.IdUsuarioNavigation)
                .Select(p => new Prontuario
                {
                    IdProntuario = p.IdProntuario,
                    Nome = p.Nome,
                    DataDeNascimento = p.DataDeNascimento,
                    Cpf = p.Cpf,
                    Rg = p.Rg,
                    Telefone = p.Telefone,
                    Endereco = p.Endereco,

                    IdUsuarioNavigation = new Usuario
                    {
                        Email = p.IdUsuarioNavigation.Email,
                        IdTipoUsuario = p.IdUsuarioNavigation.IdTipoUsuario,

                        IdTipoUsuarioNavigation = new TipoUsuario
                        {
                            TipoUsuario1 = p.IdUsuarioNavigation.IdTipoUsuarioNavigation.TipoUsuario1,
                        }
                    }
                })
                .FirstOrDefault(p => p.Cpf == cpf);
        }

        public void CadastrarProntuario(Prontuario novoProntuario)
        {
            ctx.Prontuarios.Add(novoProntuario);

            ctx.SaveChanges();
        }

        public void ExcluirProtuario(int id)
        {
            Prontuario prontuario = ctx.Prontuarios.Find(id);

            ctx.Prontuarios.Remove(prontuario);

            ctx.SaveChanges();
        }

        public List<Prontuario> ListarProntuario()
        {
            return ctx.Prontuarios
                .Include(p => p.IdUsuarioNavigation)
                .Select(p => new Prontuario
                {
                    IdProntuario = p.IdProntuario,
                    Nome = p.Nome,
                    DataDeNascimento = p.DataDeNascimento,
                    Cpf = p.Cpf,
                    Rg = p.Rg,
                })
                .ToList();
        }
    }
}
