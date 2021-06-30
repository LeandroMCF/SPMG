import { Component } from 'react';
import '../style/css/style.css';
import Cabecalho from '../Cabecalho/cabecalho';
import { parseJwt } from '../services/auth'

class PagMedico extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaConsultas : []
        }
    }

    buscarCunsultas =  () => {

        fetch('http://192.168.15.5:5000/api/Consulta/medicos/'+parseJwt().jti)

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
                            <h1>Entrou como: Médico</h1>
                            <button className="botaoLogin" onClick={this.buscarCunsultas}>Aualizar Lista</button>
                        </div>
                        <div className="alinharTabela">
                            <div className="tabMedico"> 
                                <table className="tabela">
                                    <thead>
                                        <tr>
                                            <th>Paciente</th>
                                            <th>Estado</th>
                                            <th>Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.listaConsultas.map( (consultas)  => {
                                                return(
                                                    <tr key={consultas.idConsultas}>
                                                            <td>{consultas.idProntuarioNavigation.nome}</td>
                                                            <td>{consultas.idSituacaoNavigation.situacao1}</td>
                                                            <td>{Intl.DateTimeFormat("pt-BR").format(new Date(consultas.idProntuarioNavigation.dataDeNascimento))}</td>
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

export default PagMedico