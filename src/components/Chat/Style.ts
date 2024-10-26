import {StyleSheet} from 'react-native';
import {Fonts, SCREEN_HEIGHT, Theme} from '../../Util/Theme';

export const style = StyleSheet.create({
  Container: {
    marginHorizontal: Fonts.ModerateScale(6),
  },
  HeaderContainer: {
    padding: Fonts.ModerateScale(12),
    gap: Fonts.ModerateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  Logo: {
    borderRadius: 150,
    padding: 0,
    width: Fonts.ModerateScale(50),
    height: Fonts.ModerateScale(50),
  },
  LogoTxt: {
    color: Theme.colors.white,
    fontSize: Fonts.ModerateScale(10),
    fontFamily: Fonts.Bold.monoText,
    marginBottom: 15,
  },
  OverlayIcon: {
    padding: Fonts.ModerateScale(3),
    borderRadius: 150,
    bottom: '50%',
    right: '15%',
    position: 'absolute',
    backgroundColor: Theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MusicIcon: {
    color: Theme.colors.black,
    fontSize: Fonts.ModerateScale(8),
  },
  ActiveIcon: {
    backgroundColor: Theme.colors.magic,
  },
  RecentChatContainer: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 2,
    marginVertical: 8,
    padding: 10,
    elevation: 2,
    shadowColor: '#555',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    width: '100%',
    shadowOpacity: 2,
    shadowRadius: 1,
  },
  RecentChatLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    position: 'relative',
  },
  RecentLogoOverlay: {
    position: 'absolute',
    bottom: '5%',
    right: 0,
    borderRadius: 250,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F9CEEE',
    padding: 2,
    paddingHorizontal: 6,
  },
  RecentLogoOverlayTxt: {
    color: Theme.colors.black,
    fontFamily: Fonts.Bold.primary,
    fontSize: Fonts.ModerateScale(6),
    textTransform: 'uppercase',
  },
});

export const messageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Theme.colors.lightPrimary,
    borderRadius: 15,
    elevation: 0.2,
    borderBottomRightRadius: 0,
    paddingVertical: 8,
    rowGap: 10,
    paddingHorizontal: 12,
    maxWidth: '80%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Theme.colors.secondary,
    borderRadius: 15,
    elevation: 0.2,
    borderBottomLeftRadius: 0,
    paddingVertical: 8,
    rowGap: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
    maxWidth: '80%',
  },
  messageText: {
    color: Theme.colors.black,
    fontSize: Fonts.ModerateScale(12),
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  video: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  black: {
    color: '#222',
  },
  white: {
    color: '#FFF',
  },
  scrollToEndButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ea',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  listContentContainer: {
    marginVertical: 5,
    rowGap: 5,
  },
});
