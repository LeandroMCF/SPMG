import React from 'react';

import logo from '../style/images/Logo.png';
import LogoInsta from '../style/images/logotipo-do-instagram.png';
import LogoFace from '../style/images/facebook.png';

export default function footer(){
    return(
        <footer>
            <div className="container footer">
                <div className="contatos">
                <p className="p1">Entre em contato</p>
                <p className="p2">Whatsapp: 11 91234 - 5678</p>
                <p className="p3">Telefone: 11 2345 - 6789</p>
                </div>
                <img src={logo} alt='Logo SPMG voltar menu'/>
                <div className="redes">
                    <div className="isnta">
                        <img src={LogoInsta} alt="Conta instagram"/>
                        <p>Instagram</p>
                    </div>
                    <div className="face">
                        <img src={LogoFace} alt="Conta facebook"/>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}