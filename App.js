import React from 'react';
import OnBoardingUI from './components/OnBoardingUI';
import TaskContainer from './components/TaskContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoardingUI} options={{headerShown:false}} />
        <Stack.Screen name="Tasks" component={TaskContainer} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <OnBoardingUI />
      // <TaskContainer />
  )
}

export default App
