import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../view/SignIn';
import SignUp from '../view/SignUp';
import Home from '../view/Home';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LogIn = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )

}

const Navigation = () => {
    <NavigationContainer>
        <LogIn />
    </NavigationContainer>
}

export default Navigation