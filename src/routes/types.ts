import {BottomNavigationProps} from 'react-native-paper';

export type RootStackParamList = {
  Auth: undefined;
  User: undefined;
  Notification: undefined;
  Chats: undefined;
};

export type UserRouteParamList = {
  Dashboard: undefined;
  UserRoute: undefined;
};

export type ChatRouteParamList = {
  ChatHome: undefined;
};

export type AuthRouteParamList = {
  Intro: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
};

export type DashBoardRouteParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};
