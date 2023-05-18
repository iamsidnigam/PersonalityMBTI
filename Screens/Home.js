import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Title from '../components/title'

const Home=({navigation}) => {
    return(
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
            <Image source={{
                uri:'https://img.icons8.com/?size=512&id=SLXnk6BlH42h&format=png'
                }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
                <Text styles={styles.bT}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: "#FFEFD6",
    },  
    button:{
        width: '100%',
        backgroundColor: "#FF9505",
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },  
    bT:{
        fontSize: 40,
        fontWeight: 400,
        color: 'white',
    },
});