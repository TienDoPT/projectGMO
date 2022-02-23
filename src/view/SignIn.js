import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import globalStyles from '../constants/globalStyles'

const SignIn = ({navigation}) => {

  const [hide, setHide] = useState(true)

  return (
    <View style={styles.container} >
      <View style={styles.logo}>
        <Image
          source={require('../photo/Icon.png')}
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
      />
      <CustomInput
        label='Password'
        placeholder='Enter password'
        onPress={() => setHide(prev => !prev)}
        hide={hide}
      />
      <CustomButton
        name='Sign In'
      />
      <TouchableOpacity style={styles.signUp} onPress={()=>navigation.navigate('SignUp')}>
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