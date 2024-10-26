import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useNavScreen from '../../Hook/Common/useNavScreen';
import {Fonts, Theme} from '../../Util/Theme';
import AppButton from '../AppButton';
import AppText from '../AppText';
import AppIcon from '../AppIcon';

export default function DashBoardBottomBar() {
  const {HandleDashBoardNavigation} = useNavScreen();
  return (
    <View style={style.container}>
      <AppButton
        style={style.button}
        onPress={() => HandleDashBoardNavigation('Home')}>
        <AppIcon
          group={'Feat'}
          color={Theme.colors.BarColor}
          style={style.IconStyle}
          name="home"
        />
        {/* <AppText style={style.buttonText}>Home</AppText> */}
      </AppButton>
      <AppButton
        style={style.button}
        onPress={() => HandleDashBoardNavigation('Search')}>
        <AppIcon
          group={'MatCom'}
          color={Theme.colors.BarColor}
          style={style.IconStyle}
          name="at"
        />
        {/* <AppText style={style.buttonText}>Tag</AppText> */}
      </AppButton>
      <AppButton
        style={style.button}
        onPress={() => HandleDashBoardNavigation('Profile')}>
        <AppIcon
          color={Theme.colors.BarColor}
          style={style.IconStyle}
          group={'MatCom'}
          name="apple-keyboard-command"
        />
        {/* <AppText style={style.buttonText}>Create</AppText> */}
      </AppButton>
      {/* </View> */}
      <AppButton
        style={style.button}
        onPress={() => HandleDashBoardNavigation('Profile')}>
        <AppIcon
          group={'MatCom'}
          color={Theme.colors.BarColor}
          style={style.IconStyle}
          name="brain"
        />
        {/* <AppText style={style.buttonText}>Saved</AppText> */}
      </AppButton>
      <AppButton
        style={style.button}
        onPress={() => HandleDashBoardNavigation('Profile')}>
        <AppIcon
          group={'Feat'}
          color={Theme.colors.BarColor}
          style={style.IconStyle}
          name="settings"
        />
        {/* <AppText style={style.buttonText}>setting</AppText> */}
      </AppButton>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.Background,
    height: Fonts.ModerateScale(72),
  },
  IconStyle: {
    fontSize: Fonts.ModerateScale(25),
    color: Theme.colors.BarColor,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  LogoContainer: {
    padding: 15,
  },
  createButtonText: {
    fontSize: Fonts.ModerateScale(8),
    color: Theme.colors.Background,
  },
  createButton: {
    position: 'absolute',
    borderRadius: Fonts.ModerateScale(5),
    borderTopEndRadius: Fonts.ModerateScale(50),
    borderTopStartRadius: Fonts.ModerateScale(50),
    padding: 15,
    paddingHorizontal: 25,
    right: '42%',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.magic,
  },
  createButtonIcon: {
    fontSize: Fonts.ModerateScale(25),
    color: Theme.colors.Background,
  },
  buttonText: {
    fontSize: Fonts.ModerateScale(9),
    color: Theme.colors.BarColor,
    fontFamily: Fonts.Bold.monoText,
  },
});
