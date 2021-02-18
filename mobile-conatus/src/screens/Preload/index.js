import React, {useEffect} from 'react';
import {Text} from 'react-native';
import { Container, LoadingIcon } from './styles';
import {LinearGradient} from 'expo-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native'



export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {

            }else{
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);


    return (
        <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
            <Container>
                 <Text>Logo Conatus</Text>
                 <LoadingIcon size="large" color="#e5e5e5" />
            </Container>
        </LinearGradient>
    )
}


