import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : 'bea@gmail.com',
      senha : 'bea123',
      erro : '',
      carregando : false,
    }
  }

  realizarLogin = async () => {

    // console.log(this.state.email);
    // console.log(this.state.senha);

    this.setState({carregando : true})
    try {
      const resposta = await api.post('/Login', {
        email : this.state.email,
        senha : this.state.senha
      });

      const token = resposta.data.token;

      await AsyncStorage.setItem('userToken', token);
      
      this.props.navigation.navigate('Main');
    } 
    catch (error) {
      this.setState({erro : 'Usuario ou senha incorretos'})
    }
    
    this.setState({carregando : false})
  };

  render() {
    return(
        <ImageBackground
          source={require('../../assets/images/BGImage.png')}
          style={styles.mainImgLogin}
        >
          <View style={styles.body}>
            <View style={styles.main}>
              <View style={styles.blocoLogin}>

                <Text style={styles.login}>Login</Text>
                <View style={styles.blocoEmail}>
                  <Text style={styles.textoEmail}>Email</Text>
                  <TextInput
                    style={styles.campoEmail}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                  />
                </View>

                <View style={styles.blocoEmail}>
                  <Text style={styles.textoEmail}>Senha</Text>
                  <TextInput
                    style={styles.campoEmail}
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({ senha })}
                  />
                </View>

                {

                  this.state.carregando === true &&
                  <TouchableOpacity
                    disabled
                    style={styles.botaoLogin}
                    onPress={this.realizarLogin}>
                    <Text style={styles.textoLogin}>carregando...</Text>
                  </TouchableOpacity>

                }
                {
                  
                  this.state.carregando === false &&
                  <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={this.realizarLogin}>
                    <Text style={styles.textoLogin}>Login</Text>
                  </TouchableOpacity>

                }
                <Text style={styles.erro}>{this.state.erro}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({

  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainImgLogin: {
    width: '100%',
    height: '100%',
  },

  main: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  login:{
    // display: 1,
    marginBottom: 60,
    textTransform: 'uppercase', 
    color: 'white', 
    fontFamily: 'Roboto',
    fontSize: 32,
  },

  blocoLogin: {
    width: '100%',
    height: '70%',
    backgroundColor: '#21CAA1',
    justifyContent: 'center',
    alignItems: 'center',
    // border: 'solid 3px white',
    borderColor: 'white',
    borderWidth: 3,
    
    borderRadius: 8,
  },

  blocoEmail: {
    width: '80%',
    marginBottom: 50,
  },

  textoEmail: { 
    color: 'white',
    textTransform: 'uppercase',
  },

  campoEmail: {
    borderWidth: 1,
    borderColor: '#21CAA1',
    borderBottomColor: 'white',
    color: 'white',
  },

  botaoLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 30,
    color: 'white',
    backgroundColor: '#35ABFA',
    borderRadius: 5,
    marginTop: 40,
  },

  textoLogin: {
    color: 'white',
    textTransform: 'uppercase',
  },

  erro: {
    color: 'red'
  }
})