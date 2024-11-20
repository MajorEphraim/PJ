import React,{ useState } from "react";
import { View, Text, StyleSheet, 
    TouchableWithoutFeedback, Modal, 
    Dimensions } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const CalendarModal = ()=>{
    const [isVisible, setIsVisble] = useState(true)
    return(
        <Modal 
            visible={isVisible}
            transparent={true}
            >
            <View style={styles.container}>
                <View style={styles.calendar}>

                </View>
                <TouchableWithoutFeedback onPress={()=>setIsVisble(false)} >
                    <View style={styles.closeBtn}>
                        <Text style={styles.closeTxt}>x</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}

export default CalendarModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems:'center',
        paddingTop:.1*height
    },
    calendar:{
        height:.75*width,
        width:.9*width,
        backgroundColor:'#ffffed',
        borderRadius:25
    },
    closeBtn:{
        height:.25*width,
        width:.25*width,
        backgroundColor:'#ffffed',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    closeTxt:{
        color:'#310a0a',
        fontSize:.15*width
    }
})