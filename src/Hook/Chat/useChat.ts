import Config from '../../Util/constants/constants_data.json';
import {ChatStateProps} from '../../modules/chat/types';
import {useData} from '../../Util/constants';
import React from 'react';

export default function useChat() {
  // Data Produces For Testing

  //   const UserData = Config.photographers;
  const {UserData} = useData();

  const [state, setState] = React.useState<ChatStateProps>({
    openPopup: false,
    selectedPerson: {},
    phtographerList: {},
    chatHistoryList: {},
    refreshing: false,
  });
  const HandleNavigation = (item: any) => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      selectedPerson: item,
      openPopup: true,
    }));
  };

  const HandleClosePopup = () => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      selectedPerson: null,
      openPopup: false,
    }));
  };

  const HandleRefresh = async () => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      refreshing: true,
    }));
    await new Promise(resolve => setTimeout(resolve, 2000));
    setState((prev: ChatStateProps) => ({
      ...prev,
      refreshing: false,
    }));
  };

  React.useEffect(() => {
    setState((prev: ChatStateProps) => ({
      ...prev,
      phtographerList: UserData,
      chatHistoryList: UserData,
    }));
  }, []);

  return {
    ...state,
    setState,
    HandleNavigation,
    HandleClosePopup,
    HandleRefresh,
  };
}
