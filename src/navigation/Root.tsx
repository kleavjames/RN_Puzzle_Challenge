import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { GridScreen, SplashScreen } from '../screens';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Splash" component={SplashScreen} />
      </RootStack.Navigator>
    );
  }

  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="App" component={GridScreen} />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
