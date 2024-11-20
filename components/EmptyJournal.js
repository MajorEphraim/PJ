import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const EmptyScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Empty</Text>
        </View>
    )
}

export default EmptyScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffed',
        alignItems:'center',
        justifyContent:'center',
        padding:30
    }
})