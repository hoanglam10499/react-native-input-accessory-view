import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Keyboard, Platform, Animated } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useLayout } from '@react-native-community/hooks';

const KEY_SHOW = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
const KEY_HIDE = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

const InputAccessoryView = ({
  animationInConfig = { duration: 200 },
  animationOutConfig = { duration: 400 },
  renderView = () => {},
  isOpen = false,
}) => {
  const { height } = useSafeAreaFrame();
  const { onLayout, ...layout } = useLayout();

  const heightRef = React.useRef(height);
  const valueRef = React.useRef(0);

  React.useEffect(() => {
    heightRef.current = height;
  }, [height]);

  React.useEffect(() => {
    valueRef.current = layout?.height;
  }, [layout]);

  const hAnim = React.useRef(new Animated.Value(height)).current;
  console.log('first');

  React.useEffect(() => {
    const evtShowKeyBoard = Keyboard.addListener(KEY_SHOW, (e) => {
      Animated.timing(hAnim, {
        toValue: heightRef.current - e.endCoordinates.height - valueRef.current,
        duration: animationInConfig.duration,
        easing: animationInConfig.easing,
        useNativeDriver: true,
      }).start();
    });
    const evtHideKeyBoard = Keyboard.addListener(KEY_HIDE, () => {
      Animated.timing(hAnim, {
        toValue: heightRef.current,
        duration: animationOutConfig.duration,
        easing: animationOutConfig.easing,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      evtShowKeyBoard.remove();
      evtHideKeyBoard.remove();
    };
  }, []);

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        { transform: [{ translateY: !isOpen ? height : hAnim }] },
      ]}
    >
      <View onLayout={onLayout}>{renderView()}</View>
    </Animated.View>
  );
};
export default InputAccessoryView;
