// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import MenuListScreen from './src/screens/MenuListScreen';
import FinalMenuScreen from './src/screens/FinalMenuScreen';

import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="MenuList" component={MenuListScreen} />
        <Stack.Screen name="FinalMenu" component={FinalMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
