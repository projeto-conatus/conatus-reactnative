import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Botao from './Componentes/Botao';
import Form from './Componentes/Form';
import Input from './Componentes/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // card: {
  //   paddingTop: 50,
  //   marginTop: 50,
  //   width: 350,
  //   height:350,
  //   backgroundColor: "#e5e5e5",
  //   alignItems: 'center'
  // }
});
