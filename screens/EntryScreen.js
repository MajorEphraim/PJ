import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const EntryScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Journal Entry</Text>
        </View>
    )
}

export default EntryScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFED'
    }
})