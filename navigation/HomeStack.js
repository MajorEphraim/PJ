import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JournalScreen from "../screens/JournalScreen";
import EntryScreen from "../screens/EntryScreen";
import ContentScreen from "../screens/ContentScreen";

const Stack = createNativeStackNavigator()

function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Journals" component={JournalScreen} />
            <Stack.Screen name="Entry" component={EntryScreen} />
            <Stack.Screen name="Content" component={ContentScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack