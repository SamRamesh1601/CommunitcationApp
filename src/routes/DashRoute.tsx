import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardBottomBar from '../Components/BottomBar/DashBottomBar';
import {DashBoardRouteParamList} from './types';
// import HomeScreen from '../Modules/Dashboard/Dashboard';
import Dashboard from '../Modules/Dashboard/Dashboard';
import SearchScreen from '../Modules/common/SearchScreen';
import UserProfileScreen from '../Modules/Dashboard/Profile';
import Create from '../Modules/Dashboard/Create';

const Tab = createBottomTabNavigator<DashBoardRouteParamList>();

export default function DashBoardRoute() {
  return (
    <Tab.Navigator
      tabBar={props => <DashBoardBottomBar />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
