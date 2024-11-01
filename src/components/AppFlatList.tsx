// import {FlatList} from 'react-native';
// import React from 'react';
// import {AppFlatListItemProps, AppFlatListProps} from './types';

// const AppFlatList = ({data, RenderItem, ...props}: AppFlatListProps) => {
//   const memoizedData = React.useMemo(() => data, [data]);
//   const CustomItem = React.useCallback(
//     ({item, index}: AppFlatListItemProps) => {
//       return props.renderItem ? props.renderItem({item, index}) : null;
//     },
//     [],
//   );

//   return <FlatList {...props} data={memoizedData} renderItem={CustomItem} />;
// };

// export default AppFlatList;

import React, {useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import {Fonts, SCREEN_HEIGHT, SCREEN_WIDTH, Theme} from '../Util/Theme';
import AppText from './AppText';

interface CustomFlatListProps<ItemT> {
  data: ItemT[];
  renderItem: (info: ListRenderItemInfo<ItemT>) => JSX.Element;
  keyExtractor: (item: ItemT, index: number) => string;
  loading?: boolean;
  emptyMessage?: string;
  onRefresh?: () => void;
  refreshing?: boolean;
  showRefresh?: boolean;
  [key: string]: any;
}

const AppFlatList = <ItemT,>({
  data,
  renderItem,
  keyExtractor,
  loading = false,
  emptyMessage = 'No Items Found',
  onRefresh,
  showRefresh = true,
  ...props
}: CustomFlatListProps<ItemT>) => {
  const renderItemCallback = useCallback(
    (info: ListRenderItemInfo<ItemT>) => renderItem(info),
    [renderItem],
  );

  const RenderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <AppText style={styles.emptyMessage}>{emptyMessage}</AppText>
    </View>
  );
  const [refresh, setRefresh] = React.useState(false);
  const HandleRefresh = () => {
    setRefresh(true);
    onRefresh?.();
    setRefresh(false);
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItemCallback}
      keyExtractor={keyExtractor}
      ListEmptyComponent={
        loading ? (
          <ActivityIndicator />
        ) : (
          props.ListEmptyComponent ?? <RenderEmptyComponent />
        )
      }
      refreshControl={
        showRefresh ? (
          <RefreshControl refreshing={refresh} onRefresh={HandleRefresh} />
        ) : (
          <></>
        )
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: Fonts.ModerateScale(17),
    color: Theme.colors.Background,
  },
});

export default AppFlatList;
