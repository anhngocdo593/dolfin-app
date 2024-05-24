import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from './screens/Onboarding/Onboarding1';
import Onboarding2 from './screens/Onboarding/Onboarding2';
import Onboarding3 from "./screens/Onboarding/Onboarding3"
import Home from './screens/others/Home';

const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="O1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="O2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="O3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

