import React from 'react';
import DrawerContent from '../view/DrawerContent';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import SignIn from '../view/SignIn';
import SignUp from '../view/SignUp';
import Home from '../view/Home';
import Detail from '../view/Detail';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LogIn = () => {
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

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="MainStack"
        >
            <Stack.Screen
                name="MainStack"
                component={MainStack}
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
            <Stack.Screen
                name="DrawerContent"
                component={DrawerContent}
            />
        </Stack.Navigator>
    )
}

const MainStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName='HomeStack'
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerLabelStyle: { marginLeft: -20 },
                headerTitle: '',
                headerTintColor: '#ff5d55'
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: () => (
                        <Entypo
                            name='home'
                            color={'#d2dae2'}
                            size={22}
                        />
                    ),
                    title: 'Home'
                }}
            />
        </Drawer.Navigator>
    )

}

const Navigation = () => {
    return (
        <NavigationContainer theme={DefaultTheme}>
            <HomeStack />
        </NavigationContainer>
    )

}

export default Navigation