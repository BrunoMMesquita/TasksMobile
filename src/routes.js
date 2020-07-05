import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import List from './screens/List'
import Add from './screens/Add'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Add" component={Add} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}