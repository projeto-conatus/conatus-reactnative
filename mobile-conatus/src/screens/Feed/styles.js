import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`;


export const ArtigosPrincipal = styled.SafeAreaView`
    background-color: #f5f5f5;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    width: 80%;
    height: 600px;
    overflow: auto;
    border-radius: 8px;
    padding-top: 20px;
    text-align: center;

`;


export const ArtigosSecundarios = styled.SafeAreaView`
    width: 80%;
    height: 300px;
    background-color: #f5f5f5;
    margin-bottom: 30px;
    align-items: center;
    border-radius: 8px;
    padding-top: 10px;
`;

