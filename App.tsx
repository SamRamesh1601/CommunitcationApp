import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RouteNavigation from './src/Routes';
import './reanimatedConfig';
import {AuthProvider} from './src/Context/appContext';

import {Style} from './src/Util/Style';

export default function App() {
  return (
    <GestureHandlerRootView style={Style.WrapperContainer}>
      <SafeAreaView style={Style.Container}>
        <NavigationContainer>
          <AuthProvider>
            <RouteNavigation />
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
