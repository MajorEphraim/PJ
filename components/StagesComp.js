import {View, StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('window').width

const StagesComp =({stage})=>{
    return(
        <View style={styles.container}>
            <View style={{...styles.stage, backgroundColor:'#fccb07'}}/>
            <View style={{...styles.stage, backgroundColor:stage >1 ? '#fccb07':'#ffffed'}}/>
            <View style={{...styles.stage, backgroundColor:stage ==3 ? '#fccb07':'#ffffed'}}/>
        </View>
    )
}

export default StagesComp

const styles =StyleSheet.create({
    container:{
        width:.85*width, 
        flexDirection:'row',
        justifyContent:'space-between'
    },
    stage:{
        height:8,
        flex:1,
        margin:2,
        borderRadius:10
    },
})