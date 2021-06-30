import { Component } from 'react';
import axios from "axios";
import '../style/css/style.css';
import { parseJwt } from '../services/auth'

import Cabecalho from '../Cabecalho/cabecalho'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            // email : 'adm@gmail.com',
            // senha : 'adm123',
            // email : 'helena.souza@spmedicalgroup.com.br',
            // senha : 'HelenaS123',
            email : '',
            senha : '',
            erroMensagem : '',
            isLoading : false
        }
    }

    efetuarLogin = (event) => {

        event.preventDefault();

        this.setState({ erroMensagem : '', isLoading : true })

        axios.post('http://192.168.15.5:5000/api/Login', {

            email : this.state.email,
            senha : this.state.senha
            
        })
        .then(resposta => {
            if (resposta.status === 200) {
                localStorage.setItem('usuario-token', resposta.data.token);
                this.setState({ isLoading : false })

                switch (parseJwt().role) {
                    case '1':
                        this.props.history.push('/Adm')
                    break;
                    case '2':
                        this.props.history.push('/Medicos')
                    break;
                    case '3':
                        this.props.history.push('/Prontuario')
                    break;
                
                    default:
                        break;
                }
            }
        })
        .catch(() => {
            this.setState({ erroMensagem : 'Email ou senha incorretos', isLoading: false})
        })
    }


    attCampos = (campo) => {
        this.setState({[campo.target.name] : campo.target.value })
    }
 

    render(){
        return(
            <div>
                <Cabecalho/>
                <div className="container">
                    <div className="alinhemantoLogin">
                        <h2>Login</h2>
                    </div>
                    <div className="campo">
                        <form onSubmit={this.efetuarLogin}>
                            <div className="alinharCampo">
                                <div className="alinharP">
                                    <p>Email</p>
                                </div>
                                <input
                                    className="digitar email"
                                    name="email"
                                    onChange={this.attCampos}
                                    value={this.state.email}
                                    required
                                    type="email"
                                />
                                <div className="alinharP">
                                    <p>Senha</p>
                                </div>
                                <input
                                    className="digitar senha"
                                    name="senha"
                                    onChange={this.attCampos}
                                    value={this.state.senha}
                                    required
                                    type="password"
                                />

                                <p style={{ color : 'red', textAlign : 'center'}} >{this.state.erroMensagem}</p>

                                {
                                    this.state.isLoading === true &&
                                    <button
                                        type="submit" 
                                        className="botaoLogin" 
                                        disabled
                                        >Loading...</button>
                                }

                                {
                                    this.state.isLoading === false &&
                                    <button                                        
                                        className="botaoLogin"
                                        type="submit"
                                        disabled={ this.state.email === '' || this.state.senha === '' ? 'none' : '' }
                                    >
                                        Entrar</button>
                                }

                            </div>
                        </form>   
                    </div>
                </div>
            </div>
        )
    }
}
export default Login