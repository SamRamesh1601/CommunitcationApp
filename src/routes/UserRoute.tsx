import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserRouteParamList} from './types';
import Dashboard from '../Modules/Dashboard/Dashboard';
import DashBoardRoute from './DashRoute';

const Stack = createNativeStackNavigator<UserRouteParamList>();

export default function UserRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DashboardRoute" component={DashBoardRoute} />
      <Stack.Screen name="UserRoute" component={Dashboard} />
    </Stack.Navigator>
  );
}
