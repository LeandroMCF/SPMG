import { Component } from 'react';
import '../style/css/style.css';
import { Link } from 'react-router-dom';

import logo from '../style/images/Logo.png';
import logo2 from '../style/images/Logo2.png';
import local from '../style/images/mapas-e-bandeiras1.png';
import medicos from '../style/images/medicos.png';

import Rodape from '../Footer/footer';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <header>
                    <div className="container cabecalho">
                        <div className="title">
                            <Link to='/' className="link-title"><img className="imagem-header" src={logo2} alt='Logo SPMG voltar menu' /></Link>
                        </div>
                        <nav className="menu">
                            <ul className="list">
                                <li><Link to='/login'>Login</Link></li>
                                <li><a href="#sobre-conteudo">Sobre nós</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className="banner">
                        <div className="alinhamento">
                            <div className="container banner-conteudo">
                                <div className="texto-banner">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ly dummy text of the printing and typesetting industry. ly</p>
                                </div>
                                <div className="img-banner">
                                    <img src={logo} alt="Logo Sp medical group"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="enderecos">
                        <div className="container enderecos-conteudo">
                            <h2>Endereços</h2>
                            <div className="blocos">
                                <div className="bloco-endereco">
                                    <div className="ajustar-img">
                                        <img src={local} alt="local"/>
                                    </div>
                                    <hr/>
                                    <div className="txt-endereco">
                                        <p>Rua exemplo exemplo exemplo, 108</p>
                                    </div>
                                </div>
                                <div className="bloco-endereco">
                                    <div className="ajustar-img">
                                        <img src={local} alt="local"/>
                                    </div>
                                    <hr/>
                                    <div className="txt-endereco">
                                        <p>Rua exemplo exemplo exemplo, 108</p>
                                    </div>
                                </div>
                                <div className="bloco-endereco">
                                    <div className="ajustar-img">
                                        <img src={local} alt="local"/>
                                    </div>
                                    <hr/>
                                    <div className="txt-endereco">
                                        <p>Rua exemplo exemplo exemplo, 108</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container sobre-nos">
                        <div id="sobre-conteudo">
                            <h2>Sobre nós</h2>
                            <div className="sobre-p">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ly dummy text of the printing and typesetting industry. lyLorem Ipsum is simply dummy text of the printing and typesetting industry. ly dummy text of the printing and typesetting industry. lyly dummy text of the printing and typesetting industry. ly dummy text of the printing and typesetting industry. ly</p>
                            </div>
                            <div className="sobre-img">
                                <img src={medicos} alt="Desenho lustrando um grupo de medicos médicos"/>
                            </div>
                        </div>
                    </div>
                </main> 
                <div id='RedRod'>
                    <Rodape/>     
                </div>          
            </div>
        );
    }
}

export default App;
