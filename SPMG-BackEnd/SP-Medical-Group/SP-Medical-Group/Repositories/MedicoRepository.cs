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
    public class MedicoRepository : IMedico
    {
        SPMGContext ctx = new SPMGContext();

        public Medico BuscarPorCRM(string CRM)
        {
            return ctx.Medicos
                .Include(m => m.IdEspecialidadesNavigation)
                .Select(m => new Medico
                {
                    IdMedicos = m.IdMedicos,
                    Nome = m.Nome,
                    Crm = m.Crm,

                    IdEspecialidadesNavigation = new Especialidade
                    {
                        IdEspecialidades = m.IdEspecialidadesNavigation.IdEspecialidades,
                        Nome = m.IdEspecialidadesNavigation.Nome,
                    }
                })
                .FirstOrDefault(m => m.Crm == CRM);
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);

            ctx.SaveChanges();
        }

        public List<Medico> ListarMedico()
        {
            return ctx.Medicos
                .Include(m => m.IdEspecialidadesNavigation)
                .Select(m => new Medico
                {
                    IdMedicos = m.IdMedicos,
                    IdUsuario = m.IdUsuario,
                    Nome = m.Nome,
                    Crm = m.Crm,
                    IdClinica = m.IdClinica,

                    IdUsuarioNavigation = new Usuario
                    {
                        Email = m.IdUsuarioNavigation.Email,
                    },

                    IdClinicaNavigation = new Clinica
                    {
                        Clinica1 = m.IdClinicaNavigation.Clinica1,
                    },
                })
                .ToList();
        }
    }
}
