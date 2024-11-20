import React from "react";
import { View, StyleSheet ,TouchableWithoutFeedback,
     Text, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const iconSize = 20
const iconColor = "#310a0a"
const RichTextIcons = ()=>{
    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Ionicons name="arrow-undo" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Ionicons name="arrow-redo" size={iconSize} color={iconColor}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="heading" size={16} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="bold" size={16} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Feather name="italic" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                <Feather name="underline" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Feather name="list" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            {/* <TouchableWithoutFeedback>
                <Entypo name="link" size={24} color="black" />
            </TouchableWithoutFeedback> */}

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Feather name="align-center" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Feather name="align-justify" size={iconSize} color={iconColor} />
                </View> 
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Feather name="align-left" size={iconSize} color={iconColor}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <Feather name="align-right" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.iconContainer}>
                    <FontAwesome name="picture-o" size={iconSize} color={iconColor}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default RichTextIcons

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:.9*width,
        borderBottomWidth:1,
        borderBottomColor:'#310a0a',
        borderStyle:'solid',
        paddingVertical:6
    }, 
    iconContainer:{
        flex:1,
        margin:1,
        justifyContent:'center',
        alignItems:'center',
    }
})