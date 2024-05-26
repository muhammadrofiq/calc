import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import MainScreen from './screen/MainScreen';
import CalcScreen from './screen/CalcScreen';
import CreateCatatan from './screen/CreateCatatan';
import MyCatatan from './screen/MyCatatan';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateCatatan"
          component={CreateCatatan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCatatan"
          component={MyCatatan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalcScreen"
          component={CalcScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
