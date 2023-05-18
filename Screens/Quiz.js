import React from 'react'
import {jsonData} from '../Questions/questions'
import {useState} from "react"
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const Quiz=({navigation}) => {
    const [introversion, setIntroversion] = useState(0);
    const [extroversion, setExtroversion] = useState(0);
    const [sensing, setSensing] = useState(0);
    const [intuition, setIntuition] = useState(0);
    const [thinking, setThinking] = useState(0);
    const [feeling, setFeeling] = useState(0);
    const [judging, setJudging] = useState(0);
    const [perceiving, setPerceiving] = useState(0);
    const userAnswerHandle = (val1, val2) => {
        if(count<=3){//21
            setIntroversion(introversion + val1)
            setExtroversion(extroversion + val2)
        } else if(count<=7){//43
            setSensing(sensing + val1)
            setIntuition(intuition + val2)
        } else if(count<=11){//65
            setThinking(thinking + val1)
            setFeeling(feeling + val2)
        } else {
            setJudging(judging + val1)
            setPerceiving(perceiving + val2)
        }
        
    }
    
    const [count,setCount]=useState(0);
    // const [result,setResult] = useState("")
        let result="";
    const nextBtnPress = () => {
        // if (count==10){
        //     return;
        // }
        if (count==15){

            console.log("I",introversion)
         console.log("E",extroversion)
        console.log("S",sensing)
        console.log("N",intuition)
        console.log("T",thinking)
        console.log("F",feeling)
         console.log("J",judging)
         console.log("P",perceiving)
       
        if(introversion > extroversion){
        result=result+"I"
        } else {
        result=result + "E"
        }
        if(sensing > intuition){
        result=result+"S"
        } else {
        result=result+"N"
        }
        if(thinking > feeling){
        result=result+"T"
        } else {
        result=result+"F"
        }
        if(judging > perceiving){
        result=result+"J"
        } else {
        result=result+"P"
            }
        console.log(result)
           navigation.navigate("Result",{result:result})
           return
        }
        setCount(count+1)
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.question}>Q. {jsonData.Category1[count].Question}</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optButton} onPress={()=>userAnswerHandle(4.55,0)}>
                 <Text style={styles.option}>Agree</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optButton} onPress={()=>userAnswerHandle(3.41,0)}>
                 <Text style={styles.option}>Mostly</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optButton} onPress={()=>userAnswerHandle(2.27/2,2.27/2)}>
                 <Text style={styles.option}>Sometimes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optButton} onPress={()=>userAnswerHandle(0,3.41)}>
                 <Text style={styles.option}>Rarely</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optButton} onPress={()=>userAnswerHandle(0,4.55)}>
                 <Text style={styles.option}>Disagree</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={nextBtnPress}>
                    <Text style={styles.bT}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Result")} style={styles.button}>
                    <Text style={styles.bT}>End</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: "#FFEFD6",
    },
    top:{
        marginVertical: 16
     },
     options:{
        marginVertical :16,
        flex: 1,
     },
     bottom:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent:'space-between',
        flexDirection: 'row',
     },
     button:{
        backgroundColor: "#FF9505",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },  
    bT:{
        fontSize: 21,
        fontWeight: 400,
        color: 'white',
    },
    question:{
        fontSize: 28,        
    },
    option:{
        fontSize: 18,
        fontWeight: 400,
    },
    optButton:{
        paddingVertical: 12,
        marginVertical:6,
        backgroundColor: '#FFB627',  
        paddingHorizontal: 12,
        borderRadius: 100,
    },
})


const logic=()=>{

}