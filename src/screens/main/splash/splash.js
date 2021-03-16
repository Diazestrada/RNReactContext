import React, { useContext } from 'react'

import { View, Image, ScrollView, Text, Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthContext } from '../../../routers/index';

const SplashScreens = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>CARGANDO...</Text>
          <Button title="Salir" onPress={signOut} />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SplashScreens

