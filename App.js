import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import MyStack from './navigation'
// import Quiz from './Screens/Quiz'
// import Home from './Screens/Home'
import Result from './Screens/result'

// const App = () => {
    export default class App extends React.Component{
    render(){
    return (
        // <View styles={styles.container}>
            // <Text> Is it working</Text>
           <NavigationContainer>
           <MyStack/>      
           </NavigationContainer>
        //    </View>
    );
}
}




const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 16
    },
});

