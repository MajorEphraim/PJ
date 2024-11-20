import React,{ useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from 'react-native'
import HomeButton from "../components/HomeButton";
import JournalComp from "../components/JournalComp";
import { useNavigation } from "@react-navigation/native";
import CalendarModal from "../modals/CalenderModal";

const JournalsScreen = ()=>{
    const navigation = useNavigation()

    const openCreateEntry = ()=>{
        navigation.navigate('Entry')
    }

    return (
        <View style={styles.container}>
            <HomeButton handlePress={openCreateEntry}/>
            <JournalComp/>
            <CalendarModal/>
            <StatusBar style="dark" backgroundColor="#ffffed"/>
        </View>
    )
}

export default JournalsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffed',
        alignItems:'center',
        justifyContent:'center'
    }
})