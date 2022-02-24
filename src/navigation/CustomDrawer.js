import React from 'react';
import DrawerContent from '../screen/DrawerContent';
import Home from '../screen/Home';
import Entypo from 'react-native-vector-icons/Entypo'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default CustomDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='HomeStack'
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerLabelStyle: { marginLeft: -20 },
                headerTitle: '',
                headerTintColor: '#ff5d55',
                drawerActiveTintColor: '#ff5d55'
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