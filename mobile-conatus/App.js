import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Botao from './Componentes/Botao';
import Input from './Componentes/Input';

export default function App() {
  return (
    <View style={styles.container}>
      {/* logo conatus */}

      <Text> Login </Text>
      
      <View style={styles.card}>
        <Text> E-mail </Text>
        <Input />
        <Text> Senha </Text>
        <Input />
        <Botao text="entrar" />
        <Text> Esqueceu a senha </Text>

      </View>
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

  card: {
    paddingTop: 50,
    marginTop: 50,
    width: 350,
    height:350,
    backgroundColor: "#e5e5e5",
    alignItems: 'center'
  }
});
