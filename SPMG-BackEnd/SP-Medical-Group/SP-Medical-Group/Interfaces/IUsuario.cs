using SP_Medical_Group.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP_Medical_Group.Interfaces
{
    interface IUsuario
    {
        Usuario Login(string email, string senha);
        void cadastrar(Usuario novoUsuario);
        List<Usuario> Listar();
        Usuario BuscarPorId(int Id);
        void Deletar(int Id);
    }
}
