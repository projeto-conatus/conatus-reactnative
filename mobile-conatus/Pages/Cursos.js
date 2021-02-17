import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


export default function Trilha() {
    return (
        <LinearGradient  style={styles.background}start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} colors={['#4d55c8','#3bbeef']}>
                <View>

                </View>
         </LinearGradient>
        );
 
    }

    const styles = StyleSheet.create({
        background: {
            background:{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
        }
    })

