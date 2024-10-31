import React from 'react';
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../Modules/Dashboard/Dashboard';
import SearchScreen from '../Modules/common/SearchScreen';
import UserProfileScreen from '../Modules/Dashboard/Profile';
import Create from '../Modules/Dashboard/Create';
import HomeScreen from '../Modules/Dashboard/Home';

import DashBoardBottomBar from '../Components/BottomBar/DashBottomBar';

import type {DashBoardRouteParamList} from './types';

const Tab = createBottomTabNavigator<DashBoardRouteParamList>();

export default function DashBoardRoute() {
  return (
    <Tab.Navigator
      tabBar={props => <DashBoardBottomBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Shorts" component={HomeScreen} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}
