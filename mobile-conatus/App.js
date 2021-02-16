import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Cadastrar from './Pages/Cadastrar'
import Login from './Pages/Login';

export default function App() {
  return (
    <View>
      <Login />
      <Cadastrar />
      <StatusBar style="auto" />  
    </View>
      

  );
}
