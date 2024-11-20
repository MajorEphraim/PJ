import { View, Text, StyleSheet, TouchableWithoutFeedback,
         TextInput, Dimensions } from "react-native";

const width = Dimensions.get('window').width

const StageComp = ({stage, handleChange, name, pin, confirmPin})=>{
    console.log("STAGE::::: ", stage)
    
    const compContent = ()=>{
        if(stage === 1)
            return { text:'Name your journal', placeholder:'My journal...', value:name }
        else if(stage === 2)
            return { text:'Create your pin', placeholder:'12345', value:pin }
        else
            return { text:'Confirm your pin', placeholder:'12345', value:confirmPin }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.stageText}>{compContent().text}</Text>
            <TextInput
                value={compContent().value}
                placeholder={compContent().placeholder}
                style={styles.stageInput}
                onChangeText={val=>handleChange(val)}
            />
        </View>
    )
}

export default StageComp

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    stageText:{
        color:'#ffffed',
        fontSize:.07*width
    },
    stageInput:{
        width:250,
        height:45,
        backgroundColor:'#ffffed',
        borderRadius:15,
        marginVertical:45,
        fontSize:18,
        textAlign:'center'
    }
})
