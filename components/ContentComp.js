import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ContentComp = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.emtryContainer}>

                <View style={styles.title_date}>
                
                    <View>
                        <Text style={styles.date}></Text>
                        <Text style={styles.date}></Text>
                    </View>
                </View>


            </View>
        </View>
    )
}

export default ContentComp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafae8',
        alignItems:'center',
        justifyContent:'flex-start',
        width:.9*width,
        marginTop:.03*height,
        marginBottom:.08*height,
        borderRadius:10,
        elevation:10,
        paddingHorizontal:10
    },
    title:{
        color:'#310a0a',
        fontSize:.065*width,
        fontWeight:'bold'
    },
    date:{
        color:'#310a0a',
        fontSize:.035*width,
        //fontWeight:'bold'
    },
    story:{
        color:'#310a0a',
        fontSize:.045*width,
        //fontWeight:'bold'
    },
    emtryContainer:{
        marginTop:.025*height
    }

})