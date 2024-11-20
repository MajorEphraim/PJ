import React,{ useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import SettingsButton from "../components/SettingsButton";
import ContentComp from "../components/ContentComp";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ContentScreen = ()=>{
    const navigation = useNavigation()

    const opensettings = ()=>{
        //navigation.navigate('Entry')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contents</Text>
            <SettingsButton handlePress={opensettings}/>
            <ContentComp/>
            <StatusBar style="dark" backgroundColor="#ffffed"/>
        </View>
    )
}

export default ContentScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffed',
        alignItems:'center',
        //width:'100%'
    },
    heading:{
        color:'#310a0a',
        fontSize:.065*width,
        marginTop:20
        //fontWeight:'bold'
    },
})