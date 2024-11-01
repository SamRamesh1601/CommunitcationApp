import {StyleSheet} from 'react-native';
import {Fonts, SCREEN_WIDTH, Theme} from '../../../Util/Theme';

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
  RenderItemContainer: {
    gap: Fonts.ModerateScale(5),
    marginHorizontal: Fonts.ModerateScale(6),
    alignItems: 'center',
  },
  RenderTalentContainer: {
    flex: 1,
    margin: Fonts.ModerateScale(4),
    padding: Fonts.ModerateScale(2),
    gap: Fonts.ModerateScale(10),
    borderRadius: Fonts.ModerateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.Background,
  },
  ItemLogo: {
    width: Fonts.ModerateScale(80),
    height: Fonts.ModerateScale(80),
    borderRadius: Fonts.ModerateScale(80),
  },
  TalentItemLogo: {
    width: Fonts.ModerateScale(65),
    height: Fonts.ModerateScale(65),
    borderRadius: Fonts.ModerateScale(5),
  },
  OverlayIcon: {
    position: 'absolute',
    backgroundColor: Theme.colors.magic,
    padding: Fonts.ModerateScale(8),
    bottom: 0,
    right: 0,
    borderRadius: Fonts.ModerateScale(150),
  },
  TalentOverlayIcon: {
    position: 'absolute',
    backgroundColor: Theme.colors.magic,
    padding: Fonts.ModerateScale(4),
    bottom: -5,
    right: -5,
    borderRadius: Fonts.ModerateScale(2),
  },
  ActiveIcon: {},
  ItemLogoTxt: {
    fontSize: Fonts.ModerateScale(10),
  },
  TalentItemLogoText: {
    fontSize: Fonts.ModerateScale(10),
    color: Theme.colors.lightPrimary,
    flex: 1,
    justifyContent: 'flex-end',
    fontFamily: Fonts.Bold.secondary,
  },
  MusicIcon: {
    color: Theme.colors.black,
    fontSize: Fonts.ModerateScale(8),
  },
  KeyboardIcon: {
    color: Theme.colors.black,
    fontSize: Fonts.ModerateScale(12),
  },
  TalentContainer: {
    marginVertical: Fonts.ModerateScale(5),
    marginHorizontal: Fonts.ModerateScale(8),
    gap: Fonts.ModerateScale(8),
  },
  TalentText: {
    paddingHorizontal: Fonts.ModerateScale(8),
    marginBottom: Fonts.ModerateScale(8),
    fontSize: Fonts.ModerateScale(30),
    color: Theme.colors.Background,
    fontFamily: Fonts.Bold.serifText,
  },
  TalentShowText: {
    paddingHorizontal: Fonts.ModerateScale(8),
    fontSize: Fonts.ModerateScale(30),
    color: Theme.colors.Background,
    fontFamily: Fonts.Bold.serifText,
  },
  TalentShowContainer: {
    flex: 1,
    gap: Fonts.ModerateScale(8),
    marginTop: Fonts.ModerateScale(12),
    marginHorizontal: Fonts.ModerateScale(8),
  },
});
