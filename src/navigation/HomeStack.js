import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from './CustomDrawer';
import Detail from '../screen/Detail';

const Stack = createNativeStackNavigator();

export default HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="CustomDrawer"
        >
            <Stack.Screen
                name="CustomDrawer"
                component={CustomDrawer}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: true,
                    title: '',
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}
