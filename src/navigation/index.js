import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

// import DrawerContent from '../screen/DrawerContent';
// import SignIn from '../screen/SignIn';
// import SignUp from '../screen/SignUp';
// import Home from '../screen/Home';
// import Detail from '../screen/Detail';
// import Entypo from 'react-native-vector-icons/Entypo'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux';
import { selectUser } from '../reduxSaga/authSlice';
import HomeStack from './HomeStack';
import LoginStack from './LoginStack';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// export const LoginStack = () => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <Stack.Screen
//                 name="SignIn"
//                 component={SignIn} />
//             <Stack.Screen
//                 name="SignUp"
//                 component={SignUp} />
//         </Stack.Navigator>
//     );
// }

// const HomeStack = () => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//             initialRouteName="CustomDrawer"
//         >
//             <Stack.Screen
//                 name="CustomDrawer"
//                 component={CustomDrawer}
//             />
//             <Stack.Screen
//                 name="Detail"
//                 component={Detail}
//                 options={{
//                     headerShown: true,
//                     title: '',
//                     headerShadowVisible: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="DrawerContent"
//                 component={DrawerContent}
//             />
//         </Stack.Navigator>
//     )
// }

// const CustomDrawer = () => {
//     return (
//         <Drawer.Navigator
//             initialRouteName='HomeStack'
//             drawerContent={props => <DrawerContent {...props} />}
//             screenOptions={{
//                 drawerLabelStyle: { marginLeft: -20 },
//                 headerTitle: '',
//                 headerTintColor: '#ff5d55',
//                 drawerActiveTintColor: '#ff5d55'
//             }}
//         >
//             <Drawer.Screen
//                 name="Home"
//                 component={Home}
//                 options={{
//                     drawerIcon: () => (
//                         <Entypo
//                             name='home'
//                             color={'#d2dae2'}
//                             size={22}
//                         />
//                     ),
//                     title: 'Home'
//                 }}
//             />
//         </Drawer.Navigator>
//     )

// }

const Navigation = () => {
    const user = useSelector(selectUser)

    return (
        <NavigationContainer theme={DefaultTheme}>
            {user.userToken !== null ? <HomeStack /> : <LoginStack />}
        </NavigationContainer>
    )

}

export default Navigation