import { ActivityIndicator, Alert, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import globalStyles from '../utilities/globalStyles'
import {  userLogin } from '../service'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, loading } from '../reduxSaga/authSlice'
import { validate } from '../utilities/function'

const SignIn = ({ navigation }) => {

  const dispatch = useDispatch()

  const [hide, setHide] = useState(true)
  const [password, setPassWord] = useState('cityslicka')
  const [email, setEmail] = useState('eve.holt@reqres.in')

  const submitHandler = async () => {
    if (!validate(email)) {
      Alert.alert("Error", "Email is unrecognizable")
      return
    }
    if (email == '' || password == '') {
      Alert.alert("Error", "Missing email or password")
      return
    }
    dispatch(loading(true))
    try {
      const response = await userLogin({ email, password })
      console.log(response?.data?.token);
      dispatch(login(response?.data?.token))
    } catch (error) {
      dispatch(loading(false))
      Alert.alert("Error", "Incorrect email or password")
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.logo}>
        <Image
          source={require('../assets/image/Icon.png')}
          style={styles.photo}
          resizeMode="stretch"
        />
        <Text style={styles.name}>Company Name</Text>
      </View>
      <View>
        <Text style={styles.signIn}>Sign In</Text>
        <Text style={styles.description}>Hi there! nice to meet you again.</Text>
      </View>
      <CustomInput
        label='Email'
        placeholder='Enter email address'
        onChangeText={(e) => setEmail(e)}
        value={email}
      />
      <CustomInput
        label='Password'
        placeholder='Enter password'
        onPress={() => setHide(prev => !prev)}
        hide={hide}
        onChangeText={(e) => setPassWord(e)}
        value={password}
      />
      <CustomButton
        name='Sign In'
        onPress={() => submitHandler()}
      />
      <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>
        <Text style={globalStyles.redText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white'
  },
  signIn: {
    fontSize: 26,
    color: '#35424a',
    fontWeight: 'bold',
    marginVertical: 10
  },
  description: {
    color: '#989eb1',
    fontSize: 16,
    marginVertical: 5
  },
  name: {
    color: '#abb5be',
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  photo: {
    width: 160,
    height: 120,
  },
  signUp: {
    alignSelf: 'center',
    marginVertical: 100
  }
})