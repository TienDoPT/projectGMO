import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonContainer}
        >
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#f85f6a',
        height: 48,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    }
})