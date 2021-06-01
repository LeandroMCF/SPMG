using SP_Medical_Group.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Interfaces
{
    interface IClinica
    {
        void AdicionarClinica(Clinica novaClinica);
        void RemoverClinica(int id);
        List<Clinica> ListarClinica();
    }
}
