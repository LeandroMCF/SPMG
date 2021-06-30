import { Component } from 'react';

class Prontuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaProntuarios : [],
            nome : '',
            dataDeNascimento : '',
            rg : '',
            cpf : '',
            IdUser : '',
            endereco : '',
            telefone : ''
        }
    }

    buscarProntuarios =  () => {

        fetch('http://localhost:5000/api/prontuario')

        .then(resposta => resposta.json())

        .then(data => this.setState({ listaProntuarios : data }))

        .catch( (erro) => console.log(erro) )
    };

    attNome = async (prontuario) => {
            await this.setState({nome : prontuario.target.value})
            console.log(this.state.nome)
    };

    attData = async (prontuario) => {
        await this.setState({dataDeNascimento : prontuario.target.value})
        console.log(this.state.dataDeNascimento)
    };

    attRG = async (prontuario) => {
        await this.setState({rg : prontuario.target.value})
        console.log(this.state.rg)
    };

    attCPF = async (prontuario) => {
        await this.setState({cpf : prontuario.target.value})
        console.log(this.state.cpf)
    };

    attIdUser = async (prontuario) => {
        await this.setState({IdUser : prontuario.target.value})
        console.log(this.state.id)
    };
    attIdUser = async (prontuario) => {
        await this.setState({IdUser : prontuario.target.value})
        console.log(this.state.id)
    };
    attEndereco = async (prontuario) => {
        await this.setState({endereco : prontuario.target.value})
        console.log(this.state.endereco)
    };
    attTelefone = async (prontuario) => {
        await this.setState({telefone : prontuario.target.value})
        console.log(this.state.telefone)
    };

    cadastrar = (prontuario) => {
        prontuario.preventDefault();

        fetch('http://localhost:5000/api/Prontuario/Cadastrar', {
            method : 'POST',

            body : JSON.stringify({
                IdUsuario : this.state.IdUser,
                Nome : this.state.nome, 
                DataDeNascimento : this.state.dataDeNascimento, 
                CPF : this.state.cpf,
                RG : this.state.rg, 
                Telefone : this.state.telefone,
                Endereco : this.state.endereco
            }),

            headers : {
                "Content-Type" : "application/json"
            },
        })

        .then(console.log("Prontuario Cadastrado!"))

        .catch(error => console.log(error))

        .then(this.buscarProntuarios())
    }
    
    componentDidMount(){
        this.buscarProntuarios();
    };
    
    render(){
        return(
            <div>
                <main>
                    <section>
                        {/* Lista de protuarios */}
                        <h2>Lista de lista de Prontuarios</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Prontuarios</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaProntuarios.map( (prontuario)  => {
                                        return(
                                            <tr key={prontuario.idProntuario}>
                                                    <td>{prontuario.idProntuario}</td>
                                                    <td>{prontuario.nome}</td>
                                                    <td>{prontuario.dataDeNascimento}</td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>Cadastrar prontuario</h2>

                        <form onSubmit={this.cadastrar}>
                            <div>
                                
                                <input
                                    required
                                    type="text"
                                    value={this.state.IdUser}
                                    onChange={this.attIdUser}
                                    placeholder="Id do usuario" 
                                />
                                
                                <input
                                    required
                                    type="text"
                                    value={this.state.nome}
                                    onChange={this.attNome}
                                    placeholder="Nome" 
                                />

                                <input
                                    required
                                    type="text"
                                    value={this.state.dataDeNascimento}
                                    onChange={this.attData}
                                    placeholder="Data de Nascimento" 
                                />

                                <input
                                    required
                                    type="text"
                                    value={this.state.rg}
                                    onChange={this.attRG}
                                    placeholder="RG" 
                                />

                                <input
                                    required
                                    type="text"
                                    value={this.state.cpf}
                                    onChange={this.attCPF}
                                    placeholder="CPF" 
                                />

                                <input
                                    required
                                    type="text"
                                    value={this.state.telefone}
                                    onChange={this.attTelefone}
                                    placeholder="Telefone" 
                                />

                                <input
                                    required
                                    type="text"
                                    value={this.state.endereco}
                                    onChange={this.attEndereco}
                                    placeholder="Endereco" 
                                />

                                <button type="submit">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        );
    }
}

export default Prontuarios