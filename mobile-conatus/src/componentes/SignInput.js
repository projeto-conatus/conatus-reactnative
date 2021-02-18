import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`  
    width: 90%;
    height: 50px;
    background-color: #fff;
    flex-direction: row;
    border-radius: 15px;
    padding-left: 15px;
    margin-top: 15px;
    align-items: center;
    margin-bottom: 30px;
`;

const Input = styled.TextInput`  
    flex: 1;
    font-size: 16px;
    color: #ada9a9;
    margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password}) => {
    return (
        <InputArea >
            <Input 
            placeholder={placeholder}
            placeholderTextColor="#ada9a9"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
        </InputArea>
    );  
}