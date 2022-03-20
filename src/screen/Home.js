import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { LogBox } from 'react-native';
import { getUser } from '../service'
import UsersCard from '../components/UsersCard'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../reduxSaga/actions/usersAction';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Home = ({ navigation }) => {

  const [listUsers, setListUsers] = useState([])

  const usersData = useSelector((state) => state.users.data)
  const dispatch = useDispatch()

  // const fetchData = async () => {
  //   try {
  //     const response = await getUser()
  //     setListUsers(response?.data?.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    dispatch(loadUsers())
    console.log(usersData);
  }, [])

  return (
    <View style={styles.container}>
      {usersData?.length !== 0 ?
        <FlatList
          keyExtractor={(_, index) => index}
          data={usersData}
          renderItem={(item) => (
            <UsersCard
              user={item}
              onPress={() => navigation.navigate('Detail', item)}
            />
          )}
        /> : null}
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