import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import layout from '../utilities/layout'

const Loading = () => {

    const loadingLogin = useSelector((state) => state.login.isLoading)
    const loadingUser = useSelector((state) => state.users.isLoading)

    return loadingLogin || loadingUser ? (
        <View style={styles.container} >
            <ActivityIndicator size="large" color="#f85f6a" />
        </View>
    )
        : null
}

export default Loading

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        elevation: 2,
        height: layout.height,
        width: layout.width,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.3)',
    }
})