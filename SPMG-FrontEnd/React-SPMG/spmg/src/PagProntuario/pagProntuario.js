import { Component } from 'react';
import '../style/css/style.css';
import Cabecalho from '../Cabecalho/cabecalho';
import { parseJwt } from '../services/auth'

class PagProntuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : [],
            erroMensagem : '',
            isLoading : false,
            nome : ''
        }
    }

    buscarCunsultas =  () => {

        fetch('http://192.168.15.5:5000/api/Consulta/prontuarios/'+parseJwt().jti)

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaConsultas : data }))

        .catch( (erro) => console.log(erro) )
    };

    componentDidMount(){
        this.buscarCunsultas();
    };

    render(){
        return(
            <div>
                <Cabecalho/>
                    <section className="container">
                        <div className="alinharTextoMedico">
                            <h1>Entrou como: Prontuario</h1>
                            <button className="botaoLogin">Aualizar Lista</button>
                            <p style={{fontweight: 'bolder'}}>{this.state.erroMensagem}</p>
                        </div>
                        <div className="alinharTabela">
                            <div className="tabMedico"> 
                                <table className="tabela">
                                    <thead>
                                        <tr>
                                            <th style={{color: 'White'}}>Medico</th>
                                            <th style={{color: 'White'}}>Data</th>
                                            <th style={{color: 'White'}}>Situação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.listaConsultas.map( (consultas)  => {
                                                return(
                                                    <tr key={consultas.idConsultas}>
                                                            <td style={{color: 'White'}}>{consultas.idMedicosNavigation.nome}</td>
                                                            <td style={{color: 'White'}}>{Intl.DateTimeFormat("pt-BR").format(new Date(consultas.dataConsulta))}</td>
                                                            
                                                                <td style={{color: 'White'}}>{consultas.idSituacaoNavigation.situacao1}</td>
                                                    </tr>
                                                )
                                            } )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

export default PagProntuarios