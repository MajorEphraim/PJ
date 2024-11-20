import React,{ useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import StagesComp from "../components/StagesComp";
import StageComp from "../components/StageComp";
import Button from "../components/Button"

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const FirstTimeScreen = ()=>{
    const [stage, setStage] = useState(1)
    const [name, setName] = useState(1)
    const [pin, setPin] = useState("")
    const [confirmPin, setConfirmPin] = useState("")

    const handleChange = (val)=>{

        if (stage === 1) 
            setName(val)
        else if(stage === 2)
            setPin(val)
        else
            setConfirmPin(val)
    }

    const handleDone = ()=>{
        
    }

    const handlePress = (text)=>{
        if (text === "Prev") 
            setStage(stage - 1)
        else if(stage < 3)
            setStage(stage + 1)
        else
            handleDone()
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcomeText}>Hi.... create your awesome journals here</Text>
                <StagesComp stage={stage}/>
            </View>

            <View style={styles.bottomView}>
                <StageComp stage={stage} handleChange={handleChange} name={name} pin={pin} confirmPin={confirmPin}/>
                <View style={styles.btnView}>
                    {stage === 1 ? null:(
                        <Button name="Prev" bColor={"#ffffed"} tColor={"#310a0a"} handlePress={handlePress}/>
                    )}
                    <Button name={ stage === 3 ? "Done" : "Next"} bColor={"#fccb07"} tColor={"#fff"} handlePress={handlePress}/>

                </View>
            </View>
            <StatusBar style="light" backgroundColor="#310a0a"/>
        </View>
    )
}

export default FirstTimeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#310a0a',
        paddingHorizontal :25,
        paddingTop: .13*height,
        paddingBottom: .075*height,
        alignItems:'center',
        justifyContent:'space-between'
    }, 
    welcomeText:{
        fontSize:.09*width,
        color:'#ffffed',
        textAlign:'center',
        marginBottom:50
    }, 
    bottomView:{
        alignItems:'center',
    },
    btnView:{
        flexDirection:'row',
        alignItems:'center',
    }
})