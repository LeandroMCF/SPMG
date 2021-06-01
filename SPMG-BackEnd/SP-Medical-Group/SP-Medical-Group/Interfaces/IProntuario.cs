using SP_Medical_Group.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Interfaces
{
    interface IProntuario
    {
        void CadastrarProntuario(Prontuario novoProntuario);
        List<Prontuario> ListarProntuario();
        Prontuario BuscarPorCpf(string cpf);
        void ExcluirProtuario(int id);
    }
}
