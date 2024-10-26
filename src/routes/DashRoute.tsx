import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardBottomBar from '../Components/BottomBar/DashBottomBar';
import {DashBoardRouteParamList} from './types';

const Tab = createBottomTabNavigator<DashBoardRouteParamList>();

export default function DashBoardRoute() {
  return (
    <Tab.Navigator
      tabBar={props => <DashBoardBottomBar />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const HomeScreen = () => (
  <SafeAreaView style={styles.screen}>
    <Text>Home Screen</Text>
  </SafeAreaView>
);

const SearchScreen = () => (
  <SafeAreaView style={styles.screen}>
    <Text>Search Screen</Text>
  </SafeAreaView>
);

const ProfileScreen = () => (
  <SafeAreaView style={styles.screen}>
    <Text>Profile Screen</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
