import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import { Container } from './styles';
import {LinearGradient} from 'expo-linear-gradient'




export default () => {

    return (
        <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
            <Container>
                 <Text>Home</Text>
            </Container>
        </LinearGradient>
    )
}