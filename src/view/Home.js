import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserCard = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.usersCard}
      onPress={onPress}
    >
      <Image
        source={{
          uri: 'https://reqres.in/img/faces/10-image.jpg',
        }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Johanna Doe
        </Text>
        <Text style={styles.email}>Johanna@company.com</Text>
      </View>
      <MaterialIcons
        name="arrow-forward-ios"
        size={20}
      />
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserCard
        onPress={() => navigation.navigate('Detail')}
      />
      <UserCard />
      <UserCard />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5
  },
  usersCard: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10
  },
  info: {
    marginLeft: -150
  }
})