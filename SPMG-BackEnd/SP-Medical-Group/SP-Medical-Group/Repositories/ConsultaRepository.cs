﻿using Microsoft.EntityFrameworkCore;
using SP_Medical_Group.Contexts;
using SP_Medical_Group.Domains;
using SP_Medical_Group.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Repositories
{
    public class ConsultaRepository : IConsulta
    {
        SPMGContext ctx = new SPMGContext();

        public void Agendar(Consulta novaConsulta)
        {
            ctx.Consultas.Add(novaConsulta);

            ctx.SaveChanges();
        }

        public void CancelarConsulta(int id)
        {
            Consulta cancelar = ctx.Consultas.Find(id);

            ctx.Consultas.Remove(cancelar);

            ctx.SaveChanges();
        }

        public List<Consulta> ListarConsulta()
        {
            return ctx.Consultas
                .Include(c => c.IdProntuarioNavigation)
                .Include(c => c.IdMedicosNavigation)
                .Include(c => c.IdSituacaoNavigation)
                .Select(c =>
                new Consulta
                {
                    IdConsultas = c.IdConsultas,
                    IdMedicos = c.IdMedicos,
                    IdProntuario = c.IdProntuario,
                    IdSituacao = c.IdSituacao,

                    IdSituacaoNavigation = new Situacao
                    {
                        Situacao1 = c.IdSituacaoNavigation.Situacao1,
                    },
                    IdMedicosNavigation = new Medico
                    {
                        Nome = c.IdMedicosNavigation.Nome,
                        Crm = c.IdMedicosNavigation.Crm,
                    },
                    IdProntuarioNavigation = new Prontuario
                    {
                        Nome = c.IdProntuarioNavigation.Nome,
                        Cpf = c.IdProntuarioNavigation.Cpf,
                    }
                })
                .ToList();
        }

        public List<Consulta> ListarConsultaIdMedicos(int id)
        {
            Medico medico = ctx.Medicos
                .FirstOrDefault(m => m.IdUsuario == id);

            return ctx.Consultas
                .Include(c => c.IdProntuarioNavigation)
                .Include(c => c.IdMedicosNavigation)
                .Where(c => c.IdMedicosNavigation.IdUsuario == medico.IdUsuario)
                .ToList();
        }

        public List<Consulta> ListarConsultaIdProntuarios(int id)
        {
            return ctx.Consultas
                .Include(c => c.IdProntuarioNavigation)
                .Include(c => c.IdSituacaoNavigation)
                .Where(c => c.IdProntuario == id)
                .ToList();
        }
    }
}
