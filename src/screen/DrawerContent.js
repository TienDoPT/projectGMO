import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import { DrawerActions, useNavigation } from '@react-navigation/native';
import layout from '../utilities/layout';
import { useDispatch } from 'react-redux'
import { logOut } from '../reduxSaga/authSlice'
import globalStyles from '../utilities/globalStyles'


const DrawerContent = (props) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, position: 'relative', height: layout.height }}>
            <DrawerContentScrollView {...props}>
                <Ionicons
                    name='close-outline'
                    color={'#f85f6a'}
                    size={33}
                    onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
                    style={{ margin: 8 }}
                />
                <View style={styles.container}>
                    <TouchableOpacity
                    >
                        <Image
                            source={{
                                uri: 'https://reqres.in/img/faces/10-image.jpg',
                            }}
                            style={styles.avatar}

                        />
                    </TouchableOpacity>

                    <Text style={styles.name}>Johanna Doe</Text>
                    <Text style={styles.email}>eve.holt@reqres.in</Text>
                </View>
                <View style={{ flex: 1, }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity
                style={styles.signOut}
                onPress={() => dispatch(logOut())}
            >
                <SimpleLineIcons
                    name='logout'
                    color={'#f85f6a'}
                    size={20}
                    style={{ margin: 8 }}
                />
                <Text style={globalStyles.redText}>
                    Sign out
                </Text>
            </TouchableOpacity>

        </View>

    )
}

export default DrawerContent

const styles = StyleSheet.create({
    name: {
        color: '#35424a',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20
    },
    email: {
        color: '#b3b3ba',
        lineHeight: 20,
        margin: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 15
    },
    container: {
        alignItems: 'center',
        marginBottom: 30
    },
    signOut: {
        position: 'absolute',
        bottom: 0,
        margin: 15,
        flexDirection: 'row',
        alignItems:'center'
    },
})