using System;
using System.Collections.Generic;

#nullable disable

namespace SP_Medical_Group.Domains
{
    public partial class Medico
    {
        public Medico()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int IdMedicos { get; set; }
        public int? IdEspecialidades { get; set; }
        public int? IdClinica { get; set; }
        public int? IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Crm { get; set; }

        public virtual Clinica IdClinicaNavigation { get; set; }
        public virtual Especialidade IdEspecialidadesNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consulta> Consulta { get; set; }
    }
}
