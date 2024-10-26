import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserRouteParamList} from './types';
import Dashboard from '../Modules/common/Dashboard';
import DashBoardRoute from './DashRoute';

const Stack = createNativeStackNavigator<UserRouteParamList>();

export default function UserRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={DashBoardRoute} />
      <Stack.Screen name="UserRoute" component={Dashboard} />
    </Stack.Navigator>
  );
}
