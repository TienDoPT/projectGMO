import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, loading } from '../reduxSaga/authSlice'
import layout from '../utilities/layout'

const Loading = () => {

    const loading = useSelector(selectUser)

    return loading.isLoading ? (
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
        width:layout.width,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.3)',
    }
})