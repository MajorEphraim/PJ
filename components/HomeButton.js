import { Text, StyleSheet, View, 
    TouchableWithoutFeedback, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const height = Dimensions.get('window').height

const HomeButton = ({ handlePress})=>{
    const route = useRoute()
    const name = route.name
    
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.button}>
                {
                    name === "Journals" ? (
                        <Text style={styles.btnText}>+</Text>
                    ):(
                        <MaterialIcons name="done" size={25} color="#ffffed" />
                    )
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default HomeButton

const styles = StyleSheet.create({
    button:{
        height:70,
        width:70,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#310a0a',
        margin:5,
        position:'absolute',
        bottom:.03*height,
        right:.03*height,
        zIndex:2
    },
    btnText:{
        fontSize:25,
        color:'#ffffed'
    }
})

