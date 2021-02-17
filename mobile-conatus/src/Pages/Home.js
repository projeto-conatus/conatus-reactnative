import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


export default function Home() {
    return (
        <LinearGradient style={styles.background} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
            <View style={styles.containerPrincipal}>
                    <Text>
                        Olá! É com muita alegria que nós abrimos o nosso feed para os usuários 
                        cadastrados no nosso site. Como já visto na página inicial e no cadastro,
                        nós somos uma aplicação voltada para jovens que estão ou recém saíram do
                        ensino médio de escolas públicas do Rio de Janeiro, ou seja, você que está
                        lendo esse artigo de apresentação. Nosso objetivo é ajudar você a se qualificar
                        para o mercado de trabalho, oferecendo conhecimentos específicos, vagas voltadas
                        exclusivamente para pessoas sem experiência profissional e dicas, notícias, etc.
                        Nossa plataforma ainda está em fase de construção, estamos trabalhando sempre para
                        melhorar a experiência do usuário e contamos com a sua ajuda para conseguir alcançar
                        esse objetivo!
                        Navegue pelas páginas e divirta-se!
                    </Text>
            </View>

            <View>
                <Text style={styles.containerSecundario}>
                LISTA DE ARTIGOS 
                </Text>
            </View>

            <View>
                <Text style={styles.containerSecundario}>
                PUBLICIDADE
                </Text>
            </View>

            <View>
                <Text style={styles.containerSecundario}>
                NOVIDADE
                </Text>
            </View>

         </LinearGradient>
        );
 
    }


    const styles = StyleSheet.create({
        background:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerPrincipal: {
            flex: 1,
            marginTop: 150,
            padding: 30,
            backgroundColor: '#e5e5e5',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '90%',
            borderRadius: 7,
            overflow: 'scroll'
        
        },

        containerSecundario: {
            flex: 0.5,
            marginTop: 30,
            marginBottom: 20,
            padding: 30,
            backgroundColor: '#e5e5e5',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            borderRadius: 7, 
        }
    });