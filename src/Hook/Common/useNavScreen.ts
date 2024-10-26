import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AuthRouteParamList,
  DashBoardRouteParamList,
  RootStackParamList,
  UserRouteParamList,
} from '../../routes/types';

export default function useNavScreen() {
  const authNavigation = useNavigation<NavigationProp<AuthRouteParamList>>();
  const commonNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const userNavigation = useNavigation<NavigationProp<UserRouteParamList>>();
  const DashBoardNavigation =
    useNavigation<NavigationProp<DashBoardRouteParamList>>();

  const HandleAuthNavigate = (name: keyof AuthRouteParamList) => {
    authNavigation.navigate(name);
  };

  const HandleCommonNavigate = (name: keyof RootStackParamList) => {
    commonNavigation.navigate(name);
  };
  const HandleUserNavigate = (name: keyof UserRouteParamList) => {
    userNavigation.navigate(name);
  };

  const HandleDashBoardNavigation = (name: keyof DashBoardRouteParamList) => {
    DashBoardNavigation.navigate(name);
  };

  return {
    authNavigation,
    commonNavigation,
    userNavigation,
    HandleAuthNavigate,
    HandleCommonNavigate,
    HandleUserNavigate,
    HandleDashBoardNavigation,
  };
}
