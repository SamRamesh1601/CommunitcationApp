import {StyleSheet} from 'react-native';
import {Fonts, Theme} from '../../../Util/Theme';

export const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  SearchContainer: {
    flex: 1,
    marginTop: 5,
    shadowColor: '#222',
    elevation: 5,
    borderTopEndRadius: Fonts.ModerateScale(12),
    borderTopStartRadius: Fonts.ModerateScale(12),
  },
});
