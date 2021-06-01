using SP_Medical_Group.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Interfaces
{
    interface IConsulta
    {
        void Agendar(Consulta novaConsulta);
        void CancelarConsulta(int id);
        List<Consulta> ListarConsulta();
        List<Consulta> ListarConsultaId(int id);
    }
}
