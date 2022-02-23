import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Detail = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MaterialCommunityIcons
                    name='keyboard-backspace'
                    size={30}
                    color="#ff5d55"
                    onPress={() => navigation.goBack()}
                />
            ),
        })

    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://reqres.in/img/faces/10-image.jpg',
                }}
                style={styles.avatar}

            />
            <View style={styles.nameEdit}>
                <Text style={styles.name}>Johanna Doe </Text>
                <FontAwesome5
                    name='pen'
                    color={'black'}
                />
            </View>
            <Text style={styles.email}>Johanna@company.com</Text>
        </View>

    )
}

export default Detail

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
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 15
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    nameEdit: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})