import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AsteroidInfoScreen from './src/screens/AsteroidInfoScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='AsteroidInfo' component={AsteroidInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;