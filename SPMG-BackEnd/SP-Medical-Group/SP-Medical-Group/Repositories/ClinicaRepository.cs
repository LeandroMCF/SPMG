using SP_Medical_Group.Contexts;
using SP_Medical_Group.Domains;
using SP_Medical_Group.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Repositories
{
    public class ClinicaRepository : IClinica
    {
        SPMGContext ctx = new SPMGContext();

        public void AdicionarClinica(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);

            ctx.SaveChanges();
        }

        public List<Clinica> ListarClinica()
        {
            return ctx.Clinicas.ToList();
        }

        public void RemoverClinica(int id)
        {
            Clinica remover = ctx.Clinicas.Find(id);

            ctx.Clinicas.Remove(remover);

            ctx.SaveChanges();
        }
    }
}
