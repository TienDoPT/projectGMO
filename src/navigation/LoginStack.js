import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';

const Stack = createNativeStackNavigator();

export default LoginStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn} />
            <Stack.Screen
                name="SignUp"
                component={SignUp} />
        </Stack.Navigator>
    );
}