import React from 'react';
import {StatusBar, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import AppText from '../../../Components/AppText';
import AppFlatList from '../../../Components/AppFlatList';
import AppSearchBar from '../../../Components/AppSearchBar';

import useSearch from '../../../Hook/DashBoard/useSearch';

import {Style} from './style';
import {Theme} from '../../../Util/Theme';

import type {RenderItemProps} from '../../chat/types';
import AppImage from '../../../Components/AppImage';
import AppIcon from '../../../Components/AppIcon';

interface Item {
  id: number;
  title: string;
}

const SearchScreen = () => {
  const {searchText, talantList, previousSearchList, OnChangeSearch} =
    useSearch();

  const data: Item[] = [
    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
  ];

  const RenderItem = React.useCallback(
    ({item, index}: {item: any; index: number}) => {
      const active = true;
      return (
        <View key={index} style={Style.RenderItemContainer}>
          <View>
            <AppImage
              resizeMode="cover"
              path={item?.image}
              imageType={'online'}
              wrapperstyle={Style.ItemLogo}
            />
            <View style={[Style.OverlayIcon, active && Style.ActiveIcon]}>
              <AppIcon group={'Feat'} style={Style.MusicIcon} name="music" />
            </View>
          </View>
          <AppText text={item?.name} style={Style.ItemLogoTxt} />
        </View>
      );
    },
    [],
  );

  const RenderTalentItem = React.useCallback(
    ({item, index}: {item: any; index: number}) => {
      const active = true;
      return (
        <View key={index} style={Style.RenderTalentContainer}>
          <View>
            <AppImage
              resizeMode="cover"
              path={item?.imageUrl}
              imageType={'online'}
              wrapperstyle={Style.TalentItemLogo}
            />
          </View>
          <AppText text={item?.name} style={Style.TalentItemLogoText} />
          <View style={[Style.TalentOverlayIcon, active && Style.ActiveIcon]}>
            <AppIcon
              group={'MatCom'}
              style={Style.KeyboardIcon}
              name={'apple-keyboard-command'}
            />
          </View>
        </View>
      );
    },
    [],
  );

  return (
    <SafeAreaView style={Style.Container}>
      <StatusBar animated={true} backgroundColor={Theme.colors.Background} />
      <AppSearchBar value={searchText} HandleChange={OnChangeSearch} />
      <View
        style={[
          Style.SearchContainer,
          {
            backgroundColor: searchText
              ? Theme.colors.secondary
              : Theme.colors.white,
          },
        ]}>
        <View style={Style.TalentContainer}>
          <AppText text={'Top Search'} style={Style.TalentText} />
          <AppFlatList
            data={previousSearchList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={RenderItem}
            keyExtractor={(item: any, index: number) => index.toString()}
            onRefresh={() => console.log('Refresh!')}
            emptyMessage="Search your Favorites"
          />
        </View>
        <View style={Style.TalentContainer}>
          <AppText text={'Top Professionals'} style={Style.TalentText} />
          <AppFlatList
            data={previousSearchList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={RenderItem}
            keyExtractor={(item: any, index: number) => index.toString()}
            onRefresh={() => console.log('Refresh!')}
            emptyMessage="Search your Favorites"
          />
        </View>
        <View style={Style.TalentShowContainer}>
          <AppText text={'Search Talents'} style={Style.TalentShowText} />
          <AppFlatList
            data={talantList}
            numColumns={2}
            showRefresh={false}
            showsHorizontalScrollIndicator={false}
            renderItem={RenderTalentItem}
            keyExtractor={(item: any, index: number) => index.toString()}
            emptyMessage="Search your Favorites"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
