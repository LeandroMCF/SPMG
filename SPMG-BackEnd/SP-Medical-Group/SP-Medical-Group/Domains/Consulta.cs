using System;
using System.Collections.Generic;

#nullable disable

namespace SP_Medical_Group.Domains
{
    public partial class Consulta
    {
        public int IdConsultas { get; set; }
        public int? IdMedicos { get; set; }
        public int? IdProntuario { get; set; }
        public int? IdSituacao { get; set; }
        public DateTime? DataConsulta { get; set; }

        public virtual Medico IdMedicosNavigation { get; set; }
        public virtual Prontuario IdProntuarioNavigation { get; set; }
        public virtual Situacao IdSituacaoNavigation { get; set; }
    }
}
