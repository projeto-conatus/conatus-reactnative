import React from 'react';
import {KeyboardAvoidingView, Image, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Logo from '../assets/images/arte_login.svg'

export default function Login() {
  return (
      <KeyboardAvoidingView style={styles.background}>
        
        <View style={styles.container}>
          <Text>E-mail</Text>
          <TextInput 
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChange={()=>{}}
          />
          
          <Text>Senha</Text>
          <TextInput 
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChange={()=>{}}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.btnText}> Acessar </Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.btnResgister}>
            <Text style={styles.btnResgisterText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnResgister}>
            <Text style={styles.btnRecuperaText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>


        </View>


        {/* NAO FUNCIONA */}

        <View style={styles.containerLogo}>
        <Image style={styles.Image} source={Logo} />

        </View>


      </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  containerLogo: {
    flex: 0.5,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    marginTop: 250,
    marginBottom: 250,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

  },

  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: '#4050b4',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  btnText: {
    color: "#fff",
    fontSize: 18
  },

  btnResgister: {
    marginTop: 10,

  },

  btnResgisterText: {
    color: '#4050b4',
  },

  btnRecuperaText: {
    color: '#fd4750',
    textDecorationLine: 'underline'
  }


});
