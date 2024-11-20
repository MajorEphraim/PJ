import { TouchableWithoutFeedback, Text, StyleSheet, View } from "react-native";

const Button = ({name, bColor, tColor ,handlePress})=>{
    return (
        <TouchableWithoutFeedback onPress={()=>handlePress(name)}>
            <View style={{...styles.button, backgroundColor:bColor}}>
                <Text style={{...styles.btnText, color:tColor}}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Button

const styles = StyleSheet.create({
    button:{
        height:40,
        width:100,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    btnText:{
        fontSize:16
    }
})

