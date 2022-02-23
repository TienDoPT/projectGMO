import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const CustomInput = ({ hide, label, placeholder, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    secureTextEntry={hide}
                    placeholder={placeholder}
                />
                {hide !== undefined ?
                    <Ionicons
                        name={hide ? 'eye-off' : 'eye'}
                        size={20}
                        color="#d1d6db"
                        onPress={onPress}
                        style={styles.icon}
                    />
                    : null}
            </View>

        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    label: {
        color: '#f85f6a',
        fontWeight: '700',
        fontSize: 14,
        margin: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#ebebeb',
    },
    input: {
        width: '93%',
        height: 40,
    },
    icon: {
        alignSelf: 'center'
    }
})