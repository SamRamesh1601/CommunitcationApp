import React from 'react';
import {View, StyleSheet} from 'react-native';

import useNavScreen from '../../Hook/Common/useNavScreen';

import AppText from '../AppText';
import AppIcon from '../AppIcon';
import AppButton from '../AppButton';

import {Fonts, Theme} from '../../Util/Theme';

import type {AppGroupIconProps} from '../types';
import type {DashBoardRouteParamList} from '../../Routes/types';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export interface RouteListProps {
  RouteName: keyof DashBoardRouteParamList;
  RouteGroupIcon: AppGroupIconProps;
  RouteIcon: string;
}

export default function DashBoardBottomBar(props: BottomTabBarProps) {
  const {HandleDashBoardNavigation} = useNavScreen();

  const {state} = props;
  const currentPosition = state?.index ?? 0;

  const OnStepPress = (position: number) => {
    const RouteName = RouteList[position].RouteName;
    HandleDashBoardNavigation(RouteName);
  };

  const RouteList: RouteListProps[] = [
    {
      RouteName: 'Search',
      RouteGroupIcon: 'Feat',
      RouteIcon: 'search',
    },
    {
      RouteName: 'Dashboard',
      RouteGroupIcon: 'Feat',
      RouteIcon: 'home',
    },
    {
      RouteName: 'Shorts',
      RouteGroupIcon: 'MatCom',
      RouteIcon: 'at',
    },
    {
      RouteName: 'Create',
      RouteGroupIcon: 'MatCom',
      RouteIcon: 'apple-keyboard-command',
    },
    {
      RouteName: 'Profile',
      RouteGroupIcon: 'Feat',
      RouteIcon: 'settings',
    },
  ];

  return (
    <View style={style.Container}>
      {RouteList.map((item, index) => {
        const isActiveTab = currentPosition === index;
        return (
          <AppButton
            key={index}
            style={style.LogoContainer}
            onPress={() => {
              OnStepPress(index);
            }}>
            <AppIcon
              group={item.RouteGroupIcon}
              color={Theme.colors.BarColor}
              style={[isActiveTab ? style.ActiveIconsStyle : style.IconStyle]}
              name={item.RouteIcon}
            />
            <AppText style={style.createButtonText}>{item.RouteName}</AppText>
          </AppButton>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.Background,
    height: Fonts.ModerateScale(72),
  },
  IconStyle: {
    fontSize: Fonts.ModerateScale(26),
    color: Theme.colors.BarColor,
  },
  ActiveIconsStyle: {
    backgroundColor: Theme.colors.magic,
    fontSize: Fonts.ModerateScale(15),
    padding: Fonts.ModerateScale(7),
    paddingHorizontal: Fonts.ModerateScale(14),
    borderRadius: 55,
    color: Theme.colors.Background,
  },
  LogoContainer: {
    alignItems: 'center',
    padding: Fonts.ModerateScale(8),
    justifyContent: 'center',
    gap: 7,
    flex: 1,
  },
  createButtonText: {
    fontSize: Fonts.ModerateScale(8),
    fontFamily: Fonts.Bold.secondary,
    color: Theme.colors.BarColor,
  },
});
