import React from 'react';

export default function useAppToast() {
  const [state, setState] = React.useState({
    toastType: '',
    visible: false,
    message: '',
  });

  const OnClose = () => {
    setState(prev => ({
      ...prev,
      visible: false,
    }));
  };

  const showToast = (message: string, toastType: string) => {
    setState(prev => ({
      ...prev,
      visible: true,
      message: message,
      toastType: toastType,
    }));
  };

  const toastColor =
    state.toastType === 'Error'
      ? '#FF232188'
      : state.toastType === 'Success'
      ? '#00CC0088'
      : '#00CCCC88';

  React.useEffect(() => {
    if (!state.visible) return;
    const timer = setTimeout(() => {
      OnClose();
    }, 15000);

    return () => clearTimeout(timer);
  }, [state?.visible]);

  return {
    ...state,
    toastColor,
    showToast,
    OnClose,
  };
}
