import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import { parseJwt, usuarioAurtenti } from './services/auth'

import './index.css';

import App from './Home/App';
import NotFound from './NotFound/notFound';
import Login from './Login/login'
import PagAdm from './PagAdm/pagAdm'
import PagProntuarios from './PagProntuario/pagProntuario'
import PagMedico from './PagMedico/pagMedico'
import Prontuarios from './Prontuarios/prontuarios'

import reportWebVitals from './reportWebVitals';

const PermissaoAdm = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Administrador
      usuarioAurtenti() && parseJwt().role === "1" ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = 'pagAdm' />
    }
  />
);
const PermissaoMedico = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Administrador
      usuarioAurtenti() && parseJwt().role === "2" ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = 'pagMedico' />
    }
  />
);
const PermissaoProntuario = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Administrador
      usuarioAurtenti() && parseJwt().role === "3" ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = 'pagProntuario' />
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/tese" component={Prontuarios} />
        <Route path="/login" component={Login} />
        <PermissaoAdm path="/adm" component={PagAdm} />
        <PermissaoProntuario path="/prontuario" component={PagProntuarios} />
        <PermissaoMedico path="/medicos" component={PagMedico} />
        <Redirect to = "/notfound" />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
