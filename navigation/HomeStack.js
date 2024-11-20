import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JournalsScreen from "../screens/JournalsScreen";
import EntryScreen from "../screens/EntryScreen";
import ContentScreen from "../screens/ContentScreen";
import Header from '../components/Header';

const Stack = createNativeStackNavigator()

function HomeStack(){
    return(
        <Stack.Navigator
            screenOptions={{
                header:props=><Header {...props} />}}
        >
            <Stack.Screen name="Journals" component={JournalsScreen} />
            <Stack.Screen name="Entry" component={EntryScreen} />
            <Stack.Screen name="Content" component={ContentScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack