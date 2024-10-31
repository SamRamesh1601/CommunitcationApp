import {View, StyleSheet} from 'react-native';
import {Theme, Fonts, SCREEN_WIDTH} from '../Util/Theme';
import {AppSearchBarProps} from './types';
import AppIcon from './AppIcon';
import {TextInput} from 'react-native-gesture-handler';
import React from 'react';
import AppButton from './AppButton';

export default function AppSearchBar({
  InputStyle = {},
  IconStyle = {},
  showSearchIcon = true,
  showCloseIcon = true,
  HandleSearch = () => {},
  HandleChange = () => {},
  value,
  children,
  ...props
}: AppSearchBarProps) {
  const CheckCondition = value.length !== 0;
  return (
    <View style={Style.Container}>
      <View style={Style.InputContainer}>
        <AppIcon
          group={'Feat'}
          color={Theme.colors.white}
          style={Style.IconStyle}
          name={'search'}
        />
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={Theme.colors.white}
          style={Style.InputStyle}
          value={value}
          onChangeText={HandleChange}
          {...props}
        />
        {CheckCondition && (
          <AppButton onPress={() => CheckCondition && HandleChange('')}>
            <AppIcon
              group={'Ant'}
              color={Theme.colors.BarColor}
              style={Style.IconStyle}
              name={'closecircleo'}
            />
          </AppButton>
        )}
        {children}
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  Container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    paddingTop: Fonts.ModerateScale(5),
  },
  InputContainer: {
    backgroundColor: Theme.colors.Background,
    width: '98%',
    height: Fonts.ModerateScale(60),
    elevation: 2,
    borderRadius: Fonts.ModerateScale(8),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    shadowColor: '#222',
  },
  InputStyle: {
    flex: 1,
    padding: Fonts.ModerateScale(15),
    fontSize: Fonts.ModerateScale(12),
    fontFamily: Fonts.Regular.secondary,
  },
  IconStyle: {
    fontSize: Fonts.ModerateScale(22),
    paddingHorizontal: Fonts.ModerateScale(15),
    color: Theme.colors.white,
  },
});
