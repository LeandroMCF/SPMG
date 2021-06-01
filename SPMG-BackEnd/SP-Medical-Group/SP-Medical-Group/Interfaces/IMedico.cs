using SP_Medical_Group.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Interfaces
{
    interface IMedico
    {
        void Cadastrar(Medico novoMedico);
        List<Medico> ListarMedico();
        Medico BuscarPorCRM(string CRM);
    }
}
