import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstTimeScreen from '../screens/FirstTimeScreen';

const Stack = createNativeStackNavigator()

function FirstTimeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='First Time' component={FirstTimeScreen} />
        </Stack.Navigator>
    )
} 

export default FirstTimeStack


