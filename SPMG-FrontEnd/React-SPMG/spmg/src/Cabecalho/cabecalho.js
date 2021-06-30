import { Component } from 'react';
import '../style/css/style.css';
import { Link } from 'react-router-dom';

import imagemHeader from '../style/images/Logo2.png';

class Cabecalho extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <header>
                <div className="container cabecalho">
                    <div className="title">
                        <Link to='/' className="link-title"><img className={imagemHeader} src={imagemHeader} alt='Logo SPMG voltar menu'/></Link>
                    </div>
                </div>
            </header>
        )
    }
}
export default Cabecalho
