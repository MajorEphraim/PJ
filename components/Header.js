import { View, Text, StyleSheet, Dimensions,
     StatusBar, TouchableWithoutFeedback } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height

const Header = ()=>{
    const route = useRoute()
    const name = route.name
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            {
                name === "Journals" ? (
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate("Content")}>
                        <FontAwesome6 name="grip-lines" size={25} color="#310a0a" />
                    </TouchableWithoutFeedback>

                ):(
                    <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                        <View style={styles.backContainer}>
                            <Ionicons name="chevron-back" size={25} color="#310a0a" />
                            {name === "Entry" ? <Text style={styles.screenName}>Journal Entry</Text> : null}
                        </View>
                    </TouchableWithoutFeedback>
                )
            }

            <Text style={styles.header}>{ name === "Journals" ? "My journal" : null}</Text>

            {
                name === "Entry" ? null :(
                    name === "Journals" ? (
                        <TouchableWithoutFeedback>
                            <FontAwesome5 name="calendar-alt" size={25} color="#310a0a" />
                        </TouchableWithoutFeedback>
                    ):(
                        <TouchableWithoutFeedback>
                        <Feather name="search" size={25} color="black" />
                    </TouchableWithoutFeedback>
                    )
                )
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffed',
        height:60,
        marginTop:StatusBar.currentHeight,
        elevation:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        color:'#310a0a'
    },
    screenName:{
        fontSize:15,
        color:'#310a0a',
        marginLeft:5
    },
    backContainer:{
        flexDirection:'row',
        alignItems:'center'
    }
})
