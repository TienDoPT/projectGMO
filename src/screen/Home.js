import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import UserCard from '../components/UsersCard'

import { LogBox } from 'react-native';
import { getUser } from '../service'
import UsersCard from '../components/UsersCard'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Home = ({ navigation }) => {

  const [listUsers, setListUsers] = useState([])

  const fetchData = async () => {
    try {
      const response = await getUser()
      setListUsers(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index}
        data={listUsers}
        renderItem={(item) => (
          <UsersCard
            user={item}
            onPress={() => navigation.navigate('Detail', item)}
          />
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
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