import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Consultas from './consultas';
import Concluidas from './concluidas';
import Canceladas from './perfil';


const Tab = createMaterialTopTabNavigator();

export default class Main extends Component {

  render(){
    return (
      <View style={styles.main}>
        <Tab.Navigator
        initialRouteName= 'Consultas'
        >
          <Tab.Screen name="Concluidas" component={Concluidas} />
          <Tab.Screen name="Consultas" component={Consultas} />
          <Tab.Screen name="Perfil" component={Canceladas} />
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flex: 2,
    marginTop: '7.5%',
  },
});