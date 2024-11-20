import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import RichTextIcons from "./RichTextIcons";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const EntryComp = ()=>{
    return (
        <View style={styles.container}>
            <RichTextIcons/>
            <View style={styles.emtryContainer}>

                <View style={styles.title_date}>
                    <Text style={styles.title}>My first ride</Text>
                
                    <View>
                        <Text style={styles.date}></Text>
                        <Text style={styles.date}></Text>
                    </View>
                </View>

                <Text style={styles.story}>
                    Lorem ipsum dolor sit amet. Ea enim neque sed mollitia mollitia sed voluptatem corporis et illo officia et perspiciatis odit! Est repellendus omnis rem omnis veniam aut sapiente consectetur non quos earum sed illum nihil non debitis culpa?
    Et nihil suscipit sed consequatur Quis vel inventore ipsum qui aliquid totam ut numquam unde. Et sapiente ipsam ut voluptatibus eius rem consequatur nulla qui culpa laudantium a maiores architecto eum sequi iure. Et enim fugiat ut facere quasi qui maiores ipsum 33 deleniti fugiat ea architecto quia sit necessitatibus itaque. Ut voluptate totam in ipsa voluptatem quo perspiciatis esse non internos voluptatem.
                </Text>
            </View>
        </View>
    )
}

export default EntryComp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafae8',
        alignItems:'center',
        justifyContent:'flex-start',
        width:.93*width,
        marginTop:.03*height,
        marginBottom:.08*height,
        borderRadius:10,
        elevation:10,
        paddingHorizontal:10
    },
    title_date:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:.05*height
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