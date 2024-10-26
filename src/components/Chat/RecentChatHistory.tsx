import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '../AppText';
import AppIcon from '../AppIcon';
import AppImage from '../AppImage';
import AppRefresher from '../AppRefresher';
import AppEmptyContainer from '../AppEmptyContainer';

import {Theme, Fonts} from '../../Util/Theme';
import {HandlePickImage, HandlePickVideo} from '../../Util/function';

import type {RenderItemProps} from '../../Modules/chat/types';
import {messageStyles} from './Style';
import {style} from '../../Modules/chat/style';

export default function RecentChatHistory({
  selectedPerson,
  refreshing,
  HandleRefresh,
  data,
}: {
  selectedPerson: any;
  refreshing: boolean;
  HandleRefresh: () => void;
  data: any[];
}) {
  return (
    <ScrollView style={{flex: 1, position: 'relative'}}>
      <View style={[style.ChatHistoryHeaders]}>
        <AppImage
          path={selectedPerson.image}
          resizeMode="cover"
          imageType={'online'}
          wrapperstyle={style.Logo}
        />
        <View style={style.FlexRow}>
          <AppText
            numberOfLines={1}
            text={selectedPerson.name}
            style={{
              color: Theme.colors.black,
            }}
          />
          <AppText
            numberOfLines={1}
            text={
              selectedPerson.lastCheckOut ? selectedPerson.lastCheckOut : 'now'
            }
            style={{
              fontSize: Fonts.ModerateScale(12),
              color: Theme.colors.gray,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Theme.colors.white,
            gap: 25,
          }}>
          <AppIcon
            style={style.ChatHistoryIcon}
            group={'Feat'}
            name={'message-circle'}
          />
          <AppIcon
            style={style.ChatHistoryIcon}
            group={'Feat'}
            name={'video'}
          />
          <AppIcon
            style={style.ChatHistoryIcon}
            group={'Feat'}
            name={'headphones'}
          />
        </View>
      </View>
      <FlatList
        data={data}
        style={{flex: 1}}
        scrollEventThrottle={16}
        inverted
        stickyHeaderIndices={[1]}
        contentContainerStyle={{
          paddingVertical: 15,
        }}
        ListEmptyComponent={<AppEmptyContainer />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any, index: number) =>
          item.id.toString() || index.toString()
        }
        refreshControl={
          <AppRefresher HandleRefresh={HandleRefresh} refreshing={refreshing} />
        }
        renderItem={({item, index}: RenderItemProps) => {
          const isSentMessage = 'user_1' === item.senderId;

          return (
            <View
              style={{
                width: '100%',
                paddingHorizontal: 18,
                paddingVertical: 5,
              }}>
              <View
                style={
                  isSentMessage
                    ? messageStyles.sentMessage
                    : messageStyles.receivedMessage
                }>
                {item.image && (
                  <AppImage
                    path={item.image}
                    imageType={'online'}
                    style={messageStyles.image}
                  />
                )}
                <AppText style={messageStyles.messageText}>{item.text}</AppText>
              </View>
            </View>
          );
        }}
      />
      <View style={style.textInputContainer}>
        <TouchableOpacity>
          <AppIcon name="happy-outline" size={30} color={Theme.colors.black} />
        </TouchableOpacity>
        <TextInput
          style={[style.textInput]}
          placeholder="Message"
          placeholderTextColor="#FFF"
          value={'Messages'}
        />
        <View
          style={{
            flexDirection: 'row',
            columnGap: 15,
            paddingVertical: 5,
          }}>
          <TouchableOpacity onPress={HandlePickImage}>
            <AppIcon
              name="image-outline"
              size={30}
              color={Theme.colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={HandlePickVideo}>
            <AppIcon
              name="videocam-outline"
              size={30}
              color={Theme.colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AppIcon
              group={'Feat'}
              name="send"
              size={30}
              color={Theme.colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
