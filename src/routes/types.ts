import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Auth: undefined;
  User: undefined;
  Notification: undefined;
  Chats: undefined;
};

export type UserRouteParamList = {
  DashboardRoute: undefined;
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
  Dashboard: undefined;
  Shorts: undefined;
  Search: undefined;
  Create: undefined;
  Profile: undefined;
};

export type DashboardBottomBarProps = BottomTabScreenProps<
  DashBoardRouteParamList,
  'Dashboard'
>;
