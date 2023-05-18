import React from 'react'
import {Image,StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const Result=({navigation,route}) => {
    // const result=navigation.getParam("result")
    // console.log(result)
    const {result}=route.params
    // console.log(params)
    return(
        <View style={styles.container}>
            <View style={styles.rescontainer}>
                <Text style={styles.Result}>Result</Text>
            </View>
            
            <Text style={styles.resultValue}>{result}</Text>

            
                {/* if({result}=="INFP")
                {
                    <Text>THE HEALER : INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; the reality of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own flair.</Text>
                }
                else if({result}=="INTJ")
                {
                    <Text>THE MASTERMIND : INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. </Text>
                }
                else if({result}=="INFJ")
                {
                    <Text>THE COUNSELOR : INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges.</Text>
                }
                else if({result}=="INTP")
                {
                    <Text>THE ARCHITECT : INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity.</Text>
                }
                else if({result}=="ENFP")
                {
                    <Text>THE CHAMPION : ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their creative potential.</Text>
                }
                else if({result}=="ENTJ")
                {
                    <Text>THE COMMANDER : ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted.</Text>
                }
                else if({result}=="ENTP")
                {
                    <Text>THE VISIONARY : ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them.</Text>
                }
                else if({result}=="ENFJ")
                {
                    <Text>THE TEACHER : ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas.</Text>
                }
                else if({result}=="ISFJ")
                {
                    <Text>THE PROTECTOR : ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life.</Text>
                }
                else if({result}=="ISFP")
                {
                    <Text>THE COMPOSER : ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer.</Text>
                }
                else if({result}=="ISTJ")
                {
                    <Text>THE INSPECTOR : ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do. </Text>
                }
                else if({result}=="ISTP")
                {
                    <Text>THE CRAFTSPERSON : ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand.</Text>
                }
                else if({result}=="ESFJ")
                {
                    <Text>THE PROVIDER : ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them.</Text>
                }
                else if({result}=="ESFP")
                {
                    <Text>THE PERFORMER : ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people.</Text>
                }
                else if({result}=="ESTJ")
                {
                    <Text>THE SUPERVISOR : ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way.</Text>
                }
                else 
                {
                    <Text>THE DYNAMO : ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them.</Text>
                } */}
            
            
            <View style={styles.bannerContainer}>
                <Image source={{
                uri:'https://cdni.iconscout.com/illustration/premium/thumb/personality-disorder-5253961-4391413.png'
                }}
                style={styles.banner}
                resizeMode="contain"
                />
            </View>
            <View >
                <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems:'center',
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
    Result:{
        fontSize: 50,   
        fontWeight: '600', 
        color: 'black',   
    },
    rescontainer:{
        paddingVertical: 16,
        justifyContent:"center",
        alignItems:"center",
    },
    resultValue:{
        fontSize: 24,
        fontWeight: 800,
        alignSelf: 'center',
    },
})