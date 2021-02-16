import React from 'react'

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

const Botao = ({text}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} >
                <Text>{text}</Text>
            </TouchableOpacity>
         </View>
    )
   
}
export default Botao

const styles = StyleSheet.create({
    button: {
        fontFamily: 'sans serif',
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#4050b4'
    }
})