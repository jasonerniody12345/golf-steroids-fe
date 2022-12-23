import { StatusBar } from 'expo-status-bar'

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomTabNavigator } from '../utils/BottomTabNavigator'

import Login from './Login'
import Register from './Register'
import React from 'react'

console.disableYellowBox = true;

export default function App () {
  const scheme = useColorScheme()
  const Stack = createStackNavigator()
  const isLogin = UIStore.useState(s => s.isLogin)
  // const isLogin = true

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />
        {
          isLogin ? (
            <BottomTabNavigator />
          )
          : (
            <Stack.Navigator>
              <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
            </Stack.Navigator>
          )
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}