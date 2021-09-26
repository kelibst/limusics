import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AudioProvider from './src/context/AudioProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}
