import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import globalStyles from '../constants/globalStyles'
import CustomButton from '../components/CustomButton'
import CheckBox from '@react-native-community/checkbox';
import window from '../constants/layout'

const SignUp = ({ navigation }) => {

  const [hide, setHide] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  console.log(window.width);
  return (
    <View style={styles.container} >
      <View>
        <Text style={styles.signIn}>Sign Up</Text>
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

      <View style={styles.checkbox}>
        <CheckBox
          tintColors={{ true: '#f85f6a', false: '#d4d4d4' }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(e) => setToggleCheckBox(e)}
          style={{ transform: [{ translateX: -5 }, { translateY: -5 }] }}
        />
        <Text>I agree to <Text style={styles.redText}>Term Of Services</Text> and {"\n"}<Text style={styles.redText}>Privacy Policy</Text></Text>
      </View>

      <CustomButton
        name='Continue'
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
    flexDirection:'row'
  },
  redText: {
    color: '#f85f6a',
    lineHeight: 20
  },
  checkbox: {
    width: window.width - 85,
    flexDirection: 'row',
    marginVertical: 10
    // justifyContent: 'center',
    // backgroundColor: 'blue'
  }
})