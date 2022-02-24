import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import layout from '../utilities/layout'

export default UsersCard = ({ user, onPress }) => {

    const { avatar, first_name, last_name, email } = user.item

    return (
        <TouchableOpacity
            style={styles.usersCard}
            onPress={onPress}
        >
            <Image
                source={{
                    uri: avatar
                }}
                style={styles.avatar}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{first_name} {last_name}
                </Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <MaterialIcons
                name="arrow-forward-ios"
                size={20}
                style={styles.arrow}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    usersCard: {
        height: 45,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        // backgroundColor: 'blue'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10,
    },
    info: {
    },
    name: {
        fontWeight:'bold'
    },
    arrow: {
        position: 'absolute',
        right: 0
    }
})