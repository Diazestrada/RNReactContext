import React, { useContext } from 'react'

import { View, Image, ScrollView, Text, Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthContext } from '../../../routers/index';



const AuthScreens = () => {
  const { signIn } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Auth...</Text>
          <Button title="Sign in" onPress={() => signIn({ hola: 'mundo' })} />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AuthScreens

