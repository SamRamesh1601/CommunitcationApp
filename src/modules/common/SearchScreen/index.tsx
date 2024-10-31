import React from 'react';
import {StatusBar, View} from 'react-native';
import {Style} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../../Util/Theme';
import AppSearchBar from '../../../Components/AppSearchBar';
import useSearch from '../../../Hook/DashBoard/useSearch';
import AppFlatList from '../../../Components/AppFlatList';
import AppText from '../../../Components/AppText';

interface Item {
  id: number;
  title: string;
}

const SearchScreen = () => {
  const {searchText, talantList, OnChangeSearch} = useSearch();

  const data: Item[] = [
    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
    // Add more items as needed
  ];

  const renderItem = React.useCallback(
    ({item}: {item: Item}) => (
      <View>
        <AppText style={{}}>{item.title}</AppText>
      </View>
    ),
    [],
  );

  const keyExtractor = (item: Item) => item.id.toString();

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
        <AppFlatList
          data={[]}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onRefresh={() => console.log('Refresh!')}
          emptyMessage="Search your Favorites"
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
