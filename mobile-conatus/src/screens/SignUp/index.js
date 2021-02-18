import React, { useState }from 'react';
import {Text, View} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'
import { Area, Container, InputArea, CustomButton, CustomButtonText, SignMessageButton ,SignMessageButtonText, SignMessageButtonTextBold} from './styles';


import SignButtom from '../../componentes/SignInput'

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('Projeto.conatus@gmail.com')
    const [passwordField, setPasswordField] = useState('')

    const HandleSignClick = () => {
        alert("Cadastrado com sucesso")
    }

    const HandleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });

    }
    
    return (
        <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
            <Container>
                 <InputArea>

                    <Text>* Imagem da logo do Conatus * </Text>

                    <Text> CADASTRE -SE </Text>

                    <Text> Nome </Text>
                    <SignButtom 
                    placeholder='Digite seu Nome'
                    />

                    <Text> Sobrenome </Text>
                    <SignButtom 
                    placeholder='Digite seu Sobrenome'
                    />

                    <Text> CPF </Text>
                    <SignButtom 
                    placeholder='Digite seu CPF'
                    />

                    <Text> Data de Nasc. </Text>
                    <SignButtom 
                    placeholder='dd/mm/aaaa'
                    />

                    <Text> Escolaridade </Text>
                    <SignButtom 
                    placeholder='Digite seu grau de escolaridade'
                    />

                    <Text> Tipo de Escola </Text>
                    <SignButtom 
                    placeholder='Pública ou privada'
                    />

                    <Text> E-mail </Text>
                    <SignButtom 
                    placeholder='Digite seu E-mail'
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                    />

                    <Text> Senha </Text>
                    <SignButtom 
                    placeholder='Digite sua Senha'
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}

                    />

                    <CustomButton onPress={HandleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                    </CustomButton>

                 </InputArea>

                    <SignMessageButton onPress={HandleMessageButtonClick} >
                    <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                    </SignMessageButton>    
             </Container>
        </LinearGradient>
   
    )
}