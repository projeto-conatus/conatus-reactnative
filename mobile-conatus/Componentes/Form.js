import React from 'react';

import {View, Text, StyleSheet, ImageBackground} from 'react-native'

import Input from './Input'
import Botao from './Botao'

import Formulario from '../assets/images/logo.svg'

const Form = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={Formulario}>
                <Text>Cadastre-se</Text>
            </ImageBackground>

            <Text>Informações pessoais</Text>

            <View style={styles.containerInput}>
                <Input placeholder="Digite o seu E-mail"/>
                <Input type="email-address" placeholder="Digite o seu E-mail"/>
                <Input type="phone-pad" placeholder="Digite o seu CPF"/>
                <Input secureTextEntry placeholder="Digite uma senha"/>
            </View>

            <Botao text="Cadastrar" />

        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,

    },

    containerInput: {
        flex: 1,
        alignItems: 'center',
        width: 300
    }

})