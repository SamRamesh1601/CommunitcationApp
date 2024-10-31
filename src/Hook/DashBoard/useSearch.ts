import React from 'react';
import {useData} from '../../Util/constants';

export interface SearchStateProps {
  searchText: string;
  previousSearchList: any;
  searchList: any;
  talantList: any;
}

export default function useSearch() {
  const [state, setState] = React.useState<SearchStateProps>({
    searchText: '',
    previousSearchList: [],
    searchList: [],
    talantList: [],
  });
  const {UserData} = useData();

  const OnChangeSearch = (text: string) => {
    setState(prev => ({
      ...prev,
      searchText: text,
    }));
  };

  React.useEffect(() => {
    setState((prev: SearchStateProps) => ({
      ...prev,
      previousSearchList: UserData,
      talantList: UserData,
    }));
  }, []);

  return {
    ...state,
    setState,
    OnChangeSearch,
  };
}
