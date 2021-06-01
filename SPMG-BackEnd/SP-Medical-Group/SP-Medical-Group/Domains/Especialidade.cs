using System;
using System.Collections.Generic;

#nullable disable

namespace SP_Medical_Group.Domains
{
    public partial class Especialidade
    {
        public Especialidade()
        {
            Medicos = new HashSet<Medico>();
        }

        public int IdEspecialidades { get; set; }
        public string Nome { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}
