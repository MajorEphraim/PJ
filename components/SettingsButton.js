import { Text, StyleSheet, View, 
    TouchableWithoutFeedback, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const height = Dimensions.get('window').height

const SettingsButton = ({ handlePress})=>{
    const route = useRoute()
    const name = route.name
    
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.button}>
                <Ionicons name="settings-sharp" size={50} color="#ffffed" />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SettingsButton

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

