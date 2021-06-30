import { Component } from 'react';
import '../style/css/style.css';
import axios from "axios";
import { parseJwt } from '../services/auth'

import Cabecalho from '../Cabecalho/cabecalho'
import X from '../style/images/letra-x.png'

class PagAdm extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaProntuarios : [],
            listaMedicos : [],
            listaUsuariosMedicos : [],
            listaUsuariosProntuarios : [],
            listaClinicas : [],
            // consultas
            idMedico : '',
            idSituacao : '1',
            dataConsulta : Date,
            // Usuario
            email : '',
            senha : '',
            idTipoUsuario : '',
            //Medico
            crm : '',
            idUsuario : '',
            idEspecialidades : '',
            idClinica : '',
            nome : '',
            //Prontuario
            dataDeNascimento : Date,
            telefone : '',
            rg : '',
            cpf : '',
            endereco : '',
            idProntuario : ''
        }
    }


    buscarClinica = () => {
        fetch('http://192.168.15.5:5000/api/Clinica/Listar')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaClinicas : data }))

        .catch( (erro) => console.log(erro) )
    }

    buscarUsuarioMedico = () => {
        fetch('http://192.168.15.5:5000/api/Usuario/tipo/2')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaUsuariosMedicos : data }))

        .catch( (erro) => console.log(erro) )
    }



    buscarUsuarioProntuario = () => {
        fetch('http://192.168.15.5:5000/api/Usuario/tipo/3')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaUsuariosProntuarios : data }))

        .catch( (erro) => console.log(erro) )
    }
    buscarProntuarios =  () => {

        fetch('http://192.168.15.5:5000/api/prontuario')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaProntuarios : data }))

        .catch( (erro) => console.log(erro) )
    };
    buscarMedicos =  () => {

        fetch('http://192.168.15.5:5000/api/Medico')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaMedicos : data }))

        .catch( (erro) => console.log(erro) )
    };





    addConsulta = async () => {
        await axios.post('http://192.168.15.5:5000/api/Consulta/cadastrar',{

            // headers : {
            //     'Authorization' : 'Bearer ' + localStorage.getItem('usuario-token')
            // },

            idProntuario : this.state.idProntuario,
            idMedicos : this.state.idMedico,
            idSituacao : this.state.idSituacao,
            dataConsulta : this.state.dataConsulta

        })

        .catch(erro => console.log(erro))

        .then(console.log('Cadastrado'))

        .then(Location.reload())
    }

    addUsuario = () => {
        axios.post('http://192.168.15.5:5000/api/Usuario',{

            idTipoUsuario : this.state.idTipoUsuario,
            email : this.state.email,
            senha : this.state.senha,

        })

        .catch(erro => console.log(erro))

        .then(console.log('Cadastrado'))

        .then(Location.reload())
    }

    addMedico = () => {
        axios.post('http://192.168.15.5:5000/api/Medico',{

            idEspecialidades : this.state.idEspecialidades,
            idClinica : this.state.idClinica,
            idUsuario : this.state.idUsuario,
            nome : this.state.nome,
            crm : this.state.crm

        })

        .catch(erro => console.log(erro))

        .then(console.log('Cadastrado'))

        .then(Location.reload())
    }

    addPronuario = () => {
        axios.post('http://192.168.15.5:5000/api/Prontuario/Cadastrar',{
            
            idUsuario : this.state.idUsuario,
            nome : this.state.nome,
            dataDeNascimento : this.state.dataDeNascimento,
            telefone : this.state.telefone,
            rg : this.state.rg,
            cpf : this.state.cpf,
            endereco : this.state.endereco

        })

        .catch(erro => console.log(erro))

        .then(console.log('Cadastrado'))

        .then(Location.reload())
    }





    attCampo = async (campo) => {
        await this.setState({[campo.target.name] : campo.target.value })
    }


    atentificacap(){
        if (parseJwt().role !== '1') {
            document.getElementsByClassName("container").style.display = "none"
        }
    }


    componentDidMount(){
        this.buscarProntuarios();
        this.buscarMedicos();
        this.buscarUsuarioMedico();
        this.buscarUsuarioProntuario();
        this.buscarClinica();
    };




    MarcarConsulta(){
        document.getElementById("MarcarConsu").style.display = "block" 
    }
    FecharMarcarConsulta(){
        document.getElementById("MarcarConsu").style.display = "none" 
    }
    CadastrarNovoEmail(){
        document.getElementById("CadEmail").style.display = 'block' 
    }
    FecharCadastrarNovoEmail(){
        document.getElementById("CadEmail").style.display = "none" 
    }
    CadastrarNovoMédico(){
        document.getElementById("CadMedico").style.display = "block" 
    }
    FecharCadastrarNovoMédico(){
        document.getElementById("CadMedico").style.display = "none" 
    }
    CadastrarNovoProntuario(){
        document.getElementById("CadProntuario").style.display = "block" 
    }
    FecharCadastrarNovoProntuario(){
        document.getElementById("CadProntuario").style.display = "none" 
    } 


    render(){
        return(
            <div>
                <div className="imagemFundo">
                    <Cabecalho/>
                    <div className="container">
                        <div className="alinhamentoADM">
                            <h1>Entrou como: ADM</h1>
                        </div>
                        <div className="ops">
                            <div className="alinharInput">
                                <input className="abrir" type='button' value='Cadastrar novo Email' onClick={this.CadastrarNovoEmail}/>
                            </div>
                            <div className="alinharCad">
                                <div id="CadEmail">
                                    <div className="alinhamentoADMFechar">
                                        <div className="alinharFechar">
                                            <h2 className="h2Fechar">Cadastrar Email e Senha</h2>
                                            <input className="fechar" type='image' src={X} alt='fechar' onClick={this.FecharCadastrarNovoEmail}/>
                                        </div>
                                    </div>
                                    <div className="container alinharForm">
                                        <form onSubmit={this.addUsuario}>
                                            <div className="alinharInputForm">
                                                <input name="email" type="email" placeholder="Email" onChange={this.attCampo} />

                                                <input name="senha" type="password" placeholder="Senha" onChange={this.attCampo} />

                                                <p style={{fontweight: 'bolder'}}>Tipo Usuario</p>
                                                <select name="idTipoUsuario" onChange={this.attCampo} >
                                                    <option value=''>Escolha</option>
                                                    <option value="1">ADM</option>
                                                    <option value="2">Médico</option>
                                                    <option value="3">Prontuario</option>
                                                </select>

                                            </div>
                                            <div className="alinhasBotão">
                                                <button type="submit">Cadastrar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>







                            









                            <div className="alinharInput">
                                <input className="abrir" type='button' value='Cadastrar novo Médico' onClick={this.CadastrarNovoMédico}/>
                            </div>
                            <div className="alinharCad">
                                <div id="CadMedico">
                                    <div className="alinhamentoADMFechar">
                                        <div className="alinharFechar">
                                            <h2 className="h2Fechar">Cadastrar Médico</h2>
                                            <input className="fechar" type='image' src={X} alt='fechar'  onClick={this.FecharCadastrarNovoMédico}/>
                                        </div>
                                    </div>
                                    <div className="container alinharForm">
                                        <form onSubmit={this.addMedico}>
                                            <div className="alinharInputForm">
                                                <input name='nome' type="text" placeholder="Nome" onChange={this.attCampo} />
                                                <input name='crm' type="text" placeholder="CRM" onChange={this.attCampo} />
                                                <p  style={{fontweight: 'bolder'}}>Email</p>
                                                <select name='idUsuario' onChange={this.attCampo}>
                                                    <option value=''>Escolha</option>
                                                    {
                                                        this.state.listaUsuariosMedicos.map( (usuarios) => {
                                                            return(

                                                                <option key={usuarios.idUsuario} value={usuarios.idUsuario}>{usuarios.email}</option>
                                                            )
                                                        } )
                                                    }
                                                </select>
                                                <p  style={{fontweight: 'bolder'}}>Clinica</p>
                                                <select name='idClinica' onChange={this.attCampo}>
                                                    <option value=''>Escolha</option>
                                                    {
                                                        this.state.listaClinicas.map( (clinicas) => {
                                                            return(

                                                                <option key={clinicas.idClinica} value={clinicas.idClinica}>{clinicas.razaoSocial}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <p  style={{fontweight: 'bolder'}}>Especialidade</p>
                                                <select name='idEspecialidades' onChange={this.attCampo}>
                                                    <option value=''>Escolha</option>
                                                    <option value='1'>Acupuntura</option>
								                    <option value='2'>Anestesiologia</option>
								                    <option value='3'>Angiologia</option>
								                    <option value='4'>Cardiologia</option>
								                    <option value='5'>Cirurgia Cardiovascular</option>
								                    <option value='6'>Cirurgia da mão</option>
								                    <option value='7'>Cirurgia do Aparelho Digestivo</option>
								                    <option value='8'>Cirurgia Geral</option>
								                    <option value='9'>Cirurgia Pediátrica</option>
								                    <option value='10'>Cirurgia Plástica</option>
								                    <option value='11'>Cirurgia Torácica</option>
								                    <option value='12'>Cirurgia Vascular</option>
								                    <option value='13'>Dermatologia</option>
								                    <option value='14'>Radioterapia</option>
								                    <option value='15'>Urologia</option>
								                    <option value='16'>Pediatria</option>
								                    <option value='17'>Psiquiatria</option>
                                                </select>
                                            </div>
                                            <div className="alinhasBotão">
                                                <button type="submit">Cadastrar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>







                            <div className="alinharInput">
                                <input className="abrir" type='button' value='Cadastrar novo Prontuario' onClick={this.CadastrarNovoProntuario}/>
                            </div>
                            <div className="alinharCad">
                                <div id="CadProntuario">
                                    <div className="alinhamentoADMFechar">
                                        <div className="alinharFechar">
                                            <h2 className="h2Fechar">Cadastrar novo Prontuario</h2>
                                            <input className="fechar" type='image' src={X} alt='fechar'  onClick={this.FecharCadastrarNovoProntuario}/>
                                        </div>
                                    </div>
                                    <div className="container alinharForm">
                                        <form onSubmit={this.addPronuario}>
                                            <div className="alinharInputForm">
                                                <input name='nome' type="text" placeholder="Nome" onChange={this.attCampo} />
                                                <p  style={{fontweight: 'bolder'}}>Data de Nascimento</p>
                                                <input name='dataDeNascimento' type="date" placeholder="Data de Nascimento" onChange={this.attCampo} />
                                                <input name='telefone' type="text" placeholder="Telefone (Exemplo: DDD 00000-0000)" onChange={this.attCampo} />
                                                <input name='rg' type="text" placeholder="RG (Exemplo: 00000000-0)" onChange={this.attCampo} />
                                                <input name='cpf' type="text" placeholder="CPF (Exemplo: 00000000000)" onChange={this.attCampo} />
                                                <input name='endereco' type="text" placeholder="Endereço (Exemplo: Rua N°, Cidade, Estado, CEP)" onChange={this.attCampo} />
                                                <p  style={{fontweight: 'bolder'}}>Email</p>
                                                <select name='idUsuario' onChange={this.attCampo}>
                                                    <option value=''>Escolha</option>
                                                {
                                                        this.state.listaUsuariosProntuarios.map( (usuarios) => {
                                                            return(

                                                                <option key={usuarios.idUsuario} value={usuarios.idUsuario}>{usuarios.email}</option>
                                                            )
                                                        } )
                                                    }
                                                </select>
                                            </div>
                                            <div className="alinhasBotão">
                                                <button type="submit">Cadastrar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>











                        <div className="alinharInput">
                            <input className="abrir" type='button' value="Marcar Consulta" onClick={this.MarcarConsulta}/>
                        </div>
                        <div className="alinharCad">
                            <div id="MarcarConsu">
                                <div className="alinhamentoADMFechar">
                                    <div className="alinharFechar">
                                        <h2 className="h2Fechar">Marcar Consulta</h2>
                                        <input className="fechar" type='image' src={X} alt='fechar'  onClick={this.FecharMarcarConsulta}/>
                                    </div>
                                </div>
                                <div className="container alinharForm">
                                    <form onSubmit={this.addConsulta}>
                                        <div className="alinharInputForm">
                                            <p>Data da Consulta</p>
                                            <input name='dataConsulta' onChange={this.attCampo} type="date"/>

                                            <p style={{fontweight: 'bolder'}}>Prontuario</p>
                                            <select name='idProntuario' onChange={this.attCampo} >
                                                <option>Escolha</option>
                                                {
                                                    this.state.listaProntuarios.map( (prontuario) => {
                                                        return(
                                                            <option key={prontuario.idProntuario} value={prontuario.idProntuario}>
                                                                {prontuario.nome}
                                                            </option>
                                                            )
                                                        } )
                                                }
                                            </select>

                                            <p  style={{fontweight: 'bolder'}}>Medico</p>

                                            <select name='idMedico' onChange={this.attCampo} >
                                                <option value='' >Escolha</option>
                                                {
                                                    this.state.listaMedicos.map( (medicos) => {
                                                        return(

                                                            <option key={medicos.idMedicos} value={medicos.idMedicos}>
                                                                {medicos.nome}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="alinhasBotão">
                                            <button type="submit">Cadastrar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagAdm