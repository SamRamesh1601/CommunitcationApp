import {StyleSheet} from 'react-native';
import {Fonts, SCREEN_HEIGHT, Theme} from '../../Util/Theme';

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Theme.colors.black,
  },

  HeaderContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.black,
    padding: Fonts.ModerateScale(20),
    paddingHorizontal: Fonts.ModerateScale(20),
    flexDirection: 'row',
    borderBottomEndRadius: Fonts.ModerateScale(20),
    borderBottomLeftRadius: Fonts.ModerateScale(20),
  },
  HeaderLeft: {
    flexDirection: 'row',
    columnGap: Fonts.ModerateScale(30),
    padding: Fonts.ModerateScale(12),
    paddingHorizontal: Fonts.ModerateScale(20),
    backgroundColor: Theme.colors.secondary,
    // backgroundColor: Theme.colors.transprent,
    borderRadius: 250,
  },
  HeaderText: {
    color: Theme.colors.white,
    fontFamily: Fonts.Bold.monoText,
    fontSize: Fonts.ModerateScale(22),
    fontWeight: 600,
  },
  SearchIcon: {
    fontSize: Fonts.ModerateScale(18),
    color: Theme.colors.white,
  },
  BellIcon: {
    fontSize: Fonts.ModerateScale(18),
    color: Theme.colors.white,
  },
  Logo: {
    borderRadius: Fonts.ModerateScale(65),
    width: Fonts.ModerateScale(65),
    height: Fonts.ModerateScale(65),
  },
  HeaderIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Fonts.ModerateScale(40),
    height: Fonts.ModerateScale(40),
  },
  StatusContainer: {
    backgroundColor: 'white',
  },
  StatusFlatlistContainer: {
    backgroundColor: Theme.colors.black,
  },
});
