import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import EntryComp from '../components/EntryComp'
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";

const EntryScreen = ()=>{
    const navigation = useNavigation()

    const createEntry = ()=>{
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
          <EntryComp/>
          <HomeButton handlePress={createEntry}/>
        </View>
    )
}

export default EntryScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffed',
        alignItems:'center',
        justifyContent:'center'
    }
})