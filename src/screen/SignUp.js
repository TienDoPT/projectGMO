import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import globalStyles from '../utilities/globalStyles'
import CustomButton from '../components/CustomButton'
import CheckBox from '@react-native-community/checkbox';
import window from '../utilities/layout'
import { validate } from '../utilities/function'
import { useDispatch } from 'react-redux'
import { register, loading } from '../reduxSaga/authSlice'
import { userSignUp } from '../service'

const SignUp = ({ navigation }) => {

  const dispatch = useDispatch()

  const [hide, setHide] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [password, setPassWord] = useState('pistol')
  const [email, setEmail] = useState('eve.holt@reqres.in')

  const submitHandler = async () => {
    if (toggleCheckBox === false) {
      Alert.alert('Error', 'Please agree to Term of Services and Privacy Policy')
      return
    }
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
      const response = await userSignUp({ email, password })
      console.log(response?.data?.token);
      dispatch(register(response?.data?.token))
    } catch (error) {
      dispatch(loading(false))
      console.log('error ', error);
    }
  }

  return (
    <View style={styles.container} >
      <View>
        <Text style={styles.signIn}>Sign Up</Text>
      </View>
      <CustomInput
        label='Email'
        placeholder='Enter email address'
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <CustomInput
        label='Password'
        placeholder='Enter password'
        onPress={() => setHide(prev => !prev)}
        hide={hide}
        value={password}
        onChangeText={(e) => setPassWord(e)}
      />

      <View style={styles.checkbox}>
        <CheckBox
          tintColors={{ true: '#f85f6a', false: '#d4d4d4' }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(e) => setToggleCheckBox(e)}
          style={styles.box}
        />
        <View>
          <View style={styles.textContainer}>
            <Text>I agree to </Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Term Of service', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque')
              }
            >
              <Text style={styles.redText}>Term of Services</Text>
            </TouchableOpacity>
            <Text> and </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Privacy Policy', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque')
            }
          >
            <Text style={styles.redText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

      </View>

      <CustomButton
        name='Continue'
        onPress={() => submitHandler()}
      />

      <View style={styles.signUp}>
        <Text style={styles.name}>Have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={globalStyles.redText}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  redText: {
    color: '#f85f6a',
    lineHeight: 20,
    fontWeight: 'bold'
  },
  checkbox: {
    width: window.width - 85,
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: -5,
    // justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  box: {
    marginTop: -5,
    marginRight: 5
  }
})