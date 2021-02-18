import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
`;

   
export const InputArea = styled.View`
    width: 100%;
    align-items: center;
`;


export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    margin: 30px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #4050b4;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const  SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const  SignMessageButtonText = styled.Text`
    font-size: 15px;
    color: #fff;
    
`;

export const  SignMessageButtonTextBold = styled.Text`
    font-size: 13px;
    font-weight: bold;
    margin-left: 5px;
    color: #fff;
`;
