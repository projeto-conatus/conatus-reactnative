import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Area = styled.View`
    background-color: #e5e5e5; 
    width: 90%;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 10px;
    padding: 10px 0px;
`;

   
export const InputArea = styled.View`
    width: 100%;
    align-items: center;
`;


export const CustomButton = styled.TouchableOpacity`
    height: 40px;
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
    color: #4050b4;
    
`;

export const  SignMessageButtonTextBold = styled.Text`
    font-size: 13px;
    font-weight: bold;
    margin-left: 5px;
    color: #4050b4;
`;



