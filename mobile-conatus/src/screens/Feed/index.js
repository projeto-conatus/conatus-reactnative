import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import { Container } from './styles';
import {LinearGradient} from 'expo-linear-gradient'
import {ArtigosPrincipal, ArtigosSecundarios } from './styles';




export default () => {

    return (
        <LinearGradient style={{flex: 1}} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
            <Container>
                <Text> * Imagem Logo Conatus * </Text>
                 <ArtigosPrincipal>
                 <Text>SEJA BEM VINDO A CONATUS!
                       APRESENTAÇÃO
                       Escrito por: Conatus
                       Olá! É com muita alegria que nós abrimos o nosso feed para os usuários
                        cadastrados no nosso site. Como já visto na página inicial e no cadastro,
                        nós somos uma aplicação voltada para jovens que estão ou recém saíram do
                        ensino médio de escolas públicas do Rio de Janeiro, ou seja, você que está
                        lendo esse artigo de apresentação. Nosso objetivo é ajudar você a se
                        qualificar para o mercado de trabalho, oferecendo conhecimentos
                        específicos, vagas voltadas exclusivamente para pessoas sem 
                        experiência profissional e dicas, notícias, etc.
                        Nossa plataforma ainda está em fase de construção, estamos
                        trabalhando sempre para melhorar a experiência do usuário e 
                        contamos com a sua ajuda para conseguir alcançar esse objetivo!
                        Navegue pelas páginas e divirta-se
                    </Text>
                 </ArtigosPrincipal>

                 <ArtigosSecundarios>
                 <Text>LISTA DE ARTIGOS</Text>
                 </ArtigosSecundarios>

                 <ArtigosSecundarios>
                 <Text>PUBLICIDADE</Text>
                 </ArtigosSecundarios>

                 <ArtigosSecundarios>
                 <Text>NOVIDADES</Text>                                                             
                 </ArtigosSecundarios>

                 



            </Container>
        </LinearGradient>
    )
}