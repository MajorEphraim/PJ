import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const JournalScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Journals</Text>
        </View>
    )
}

export default JournalScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFED'
    }
})