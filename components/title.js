import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Title=() => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nos Importa</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 50,   
        fontWeight: '600', 
        color: 'black',   
    },
    container:{
        paddingVertical: 16,
        justifyContent:"center",
        alignItems:"center",
    },
})