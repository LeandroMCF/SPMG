import React, { Component } from 'react';
import { ScrollView,FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

import api from '../services/api';

export default class Consultas extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state =
    {
      listaConsulta: [],
      nomeP: '',
      erro: '',
      carregando: '',
    }
  }

  buscarConsultasConcluidas = async () => {
    this.setState({carregando : 'carregando...'})

    const valorToken = await AsyncStorage.getItem('userToken');

    try 
    {
      const resposta = await api.get('/Consulta/prontuarios/Concluidas/'+jwtDecode(valorToken).jti);
      const dados = resposta.data;
      
      this.setState({listaConsulta: dados});

      console.log(this.state.listaConsulta)
    } 
    catch (error) 
    {
      this.setState({erro : 'erro'})
    }
    this.setState({carregando : ''})
  };

  componentDidMount(){
    this.buscarConsultasConcluidas();
  }

  render() {
    return(
      <ImageBackground
      source={require('../../assets/images/fundoAzul.png')}
      style={styles.mainImgLogin}
      >
        <ScrollView
        showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
                <View style={styles.main}>
                  <View style={styles.header}>
                    <Text>{this.state.carregando}</Text>
                  </View>
                  <Text style={styles.boasVindas}>SPMG</Text>
                  <Text style={styles.nulo}>{this.state.nulo}</Text>
                  <FlatList
                    contentContainerStyle={styles.mainList}
                    data={this.state.listaConsulta}
                    keyExtractor={ item => item.idConsultas }
                    renderItem={this.renderItem}
                  />
                </View>
            </View>
        </ScrollView>
      </ImageBackground>
    )
  }

  renderItem = ({item}) => (
    <View style={styles.coteudo}>
      <View style={styles.coteudo2}>
        <Text style={styles.txtContent}>Data: {item.dataConsulta}</Text>
        <Text style={styles.txtContent2}>Medico: {item.idMedicosNavigation.nome}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create
({

  mainImgLogin: {
    width: '100%',
    height: '100%',
  },

  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35ABFA',
  },

  main: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainList: {
    justifyContent: 'center',
  },

  boasVindas: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 64,
    marginTop: 10,
    marginBottom: 10,
  },

  nulo: {
    color: 'black'
  },

  coteudo: {
    marginTop: 13,
    marginBottom: 13,
    borderRadius: 5,
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21CAA1',
    borderWidth: 1,
    borderColor: 'white',
  },
  
  coteudo2: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  txtContent:{
    color: 'white',
    fontFamily: 'Roboto',
    marginBottom: 8,
    width: '100%',
    borderColor: '#21CAA1',
    borderWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 8,
  },

  txtContent2: {
    color: 'white',
    fontFamily: 'Roboto'
  }
});