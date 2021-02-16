import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'


const Input = ({type, placeholder}) => {
    return (
        <View style={styles.input}>
            <TextInput keyboardType={type} placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 5,
        fontSize: 16
    }
})