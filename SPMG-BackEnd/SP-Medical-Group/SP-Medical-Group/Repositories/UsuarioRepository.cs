using SP_Medical_Group.Contexts;
using SP_Medical_Group.Domains;
using SP_Medical_Group.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Repositories
{
    public class UsuarioRepository : IUsuario
    {
        SPMGContext ctx = new SPMGContext();

        public Usuario BuscarPorId(int Id)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == Id);
        }

        public List<Usuario> BuscarPorTipoId(int Id)
        {
            return ctx.Usuarios.Where(u => u.IdTipoUsuario == Id).ToList();
        }

        public void cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int Id)
        {
            Usuario usuario = ctx.Usuarios.Find(Id);

            Prontuario prontuario = ctx.Prontuarios.FirstOrDefault(p => p.IdUsuario == Id);

            Medico medico = ctx.Medicos.FirstOrDefault(m => m.IdUsuario == Id);

            if (medico != null)
            {
                ctx.Medicos.Remove(medico);
            }

            if (prontuario != null)
            {
                ctx.Prontuarios.Remove(prontuario);
            }

            ctx.Usuarios.Remove(usuario);

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
