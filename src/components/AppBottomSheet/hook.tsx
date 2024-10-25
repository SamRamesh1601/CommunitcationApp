import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React from 'react';

export default function useAppBottomSheet() {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const HandlePress = React.useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const HandleOpen = React.useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const HandleClose = React.useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return {bottomSheetRef, HandlePress, HandleOpen, HandleClose};
}
