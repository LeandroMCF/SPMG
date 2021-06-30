import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

import api from '../services/api';

export default class Perfil extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuarioObj : {},
      nome: '',
      rg: '',
      erro : '',
    }
  }

  buscarUsuario = async () => {
    try
    {
      const valorToken = await AsyncStorage.getItem('userToken');

      const resposta = api.get('/Prontuario/buscarId/'+jwtDecode(valorToken).jti);

      const dados = resposta;

      this.setState({usuarioObj : dados});

      console.warn(this.state.usuarioObj);

      this.setState({erro : 'sucesso'});
    }
    catch (error) 
    {
      this.setState({erro : 'Erro na requisição'});
    }
  }

  componentDidMount(){
    this.buscarUsuario();
  }

  render() {
    return(
      <View style={styles.main}>
        <Text>{this.state.erro}</Text>
          <Text>{this.state.nome}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
