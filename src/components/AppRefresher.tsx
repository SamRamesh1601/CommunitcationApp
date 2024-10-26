import {RefreshControl} from 'react-native';

import {Theme} from '../Util/Theme';
import {AppRefresherProps} from './types';

export default function AppRefresher({
  HandleRefresh,
  ...props
}: AppRefresherProps) {
  return (
    <RefreshControl
      style={{backgroundColor: Theme.colors.primary}}
      {...props}
      onRefresh={HandleRefresh}
      progressBackgroundColor={Theme.colors.white}
      colors={['#ff0000', '#00ff00', '#0000ff']}
    />
  );
}
