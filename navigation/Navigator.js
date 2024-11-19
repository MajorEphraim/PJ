import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FirstTimeStack from "./FirstTimeStack";
import HomeStack from "./HomeStack"

const first_time = true

const Navigator = ()=>{
    return(
        <NavigationContainer>
            {first_time ? <FirstTimeStack/> : <HomeStack/>}
        </NavigationContainer>
    )
}

export default Navigator