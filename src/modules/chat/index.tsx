import {
  FlatList,
  RefreshControl,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIcon from '../../Components/AppIcon';
import {Fonts, Theme} from '../../Util/Theme';
import {HeaderContainerProps, RenderItemProps} from './types';
import AppEmptyContainer from '../../Components/AppEmptyContainer';
import {style} from './style';
import useChat from '../../Hook/Chat/useChat';
import AppText from '../../Components/AppText';
import AppButton from '../../Components/AppButton';
import StatusComponent from '../../Components/Chat/StatusComponent';
import RecentChat from '../../Components/Chat/RecentChat';

const HeaderContainer = ({renderList, onClick}: HeaderContainerProps) => {
  return (
    <FlatList
      data={renderList}
      style={style.StatusFlatlistContainer}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: any, index: number) => index.toString()}
      horizontal={true}
      renderItem={({item, index}: RenderItemProps) => {
        const firstName = item?.name?.split(' ').pop();
        return (
          <StatusComponent index={index} firstName={firstName} item={item} />
        );
      }}
    />
  );
};

export default function ChatScreen() {
  const {
    openPopup,
    selectedPerson,
    refreshing,
    phtographerList,
    chatHistoryList,
    setState: setChatState,
    HandleNavigation,
    HandleClosePopup,
    HandleRefresh,
  } = useChat();

  function OnTest() {
    console.log('working');
  }

  return (
    <View style={style.Container}>
      <StatusBar animated={true} backgroundColor={Theme.colors.secondary} />
      <View style={style.HeaderContainer}>
        <AppText text={'Messages'} style={style.HeaderText} />
        <View style={style.HeaderLeft}>
          <AppButton title={''} onPress={OnTest} textStyle={{}}>
            <AppIcon group={'Octi'} style={style.SearchIcon} name="search" />
          </AppButton>
          <AppButton title={''} onPress={OnTest} textStyle={{}}>
            <AppIcon group={'Octi'} style={style.BellIcon} name="bell" />
          </AppButton>
        </View>
      </View>

      <FlatList
        data={chatHistoryList}
        contentContainerStyle={{
          paddingHorizontal: 5,
        }}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<HeaderContainer renderList={phtographerList} />}
        ListEmptyComponent={<AppEmptyContainer />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={HandleRefresh} />
        }
        renderItem={({item, index}: RenderItemProps) => {
          return (
            <RecentChat callback={item => HandleNavigation(item)} data={item} />
          );
        }}
      />
    </View>
  );
}

/**
 * Bottom Sheet Implementation
 */

{
  /* <AppBottomSheet snapPoints={['30%', '60%']} initialIndex={0}>
  <Text>Awesome 🎉</Text>
  <Text>Here you can put any content!</Text>
  <AppText text={'Messages'} style={{}} />
</AppBottomSheet> */
}
