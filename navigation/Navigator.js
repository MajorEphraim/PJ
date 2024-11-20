import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FirstTimeStack from "./FirstTimeStack";
import HomeStack from "./HomeStack"
import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const Navigator = ()=>{
    const { firstTime } = useContext(SettingsContext)

    return(
        <NavigationContainer>
            {firstTime ? <FirstTimeStack/> : <HomeStack/>}
        </NavigationContainer>
    )
}

export default Navigator