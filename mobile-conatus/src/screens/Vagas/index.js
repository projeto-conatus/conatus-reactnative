import React, {useEffect} from 'react';
import {Text} from 'react-native';
import { Container, LoadingIcon } from './styles';
import {LinearGradient} from 'expo-linear-gradient'




export default () => {

    return (
        <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
            <Container>
                 <Text>Vagas</Text>
            </Container>
        </LinearGradient>
    )
}