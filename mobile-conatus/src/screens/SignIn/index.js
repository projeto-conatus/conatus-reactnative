import React, { useState }from 'react';
import {Text, View, Image} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { Area, Container, InputArea, CustomButton, CustomButtonText, SignMessageButton ,SignMessageButtonText, SignMessageButtonTextBold} from './styles';


import SignButtom from '../../componentes/SignInput'
import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('Conatus@org.com')
    const [passwordField, setPasswordField] = useState('')

    // ACESSANDO O BANCO

    // const HandleSignClick = async () => {
    //     if(emailField != '' && passwordField != '') {
    //         let json = await Api.signIn(emailField, passwordField);
    //         if(json.token) {
                
    //         }else{
    //             alert('E-mail e/ou senha errados!')
    //         }

        

    //     }else {
    //         alert("Preencha os Campos!");
    //     }

    // }


    const HandleSignClick = () => {
        navigation.reset({
            routes: [{name: 'Feed'}]
        });

    }

    const HandleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });

    }
    
    return (
        <Container>
            <Image source={require("../../assets/logo.svg")} style={{ width: 100, height: 100, marginBottom: 20 }} />
             <Area>
                 <InputArea>

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
                     <CustomButtonText>Entrar</CustomButtonText>
                    </CustomButton>

                 </InputArea>

                 <SignMessageButton onPress={HandleMessageButtonClick}>
                     <SignMessageButtonText>Ainda não possui uma conta? </SignMessageButtonText>
                     <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                 </SignMessageButton>
             </Area>
        </Container>
    )
}