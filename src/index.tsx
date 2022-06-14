import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Keyboard, Platform } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useLayout } from '@react-native-community/hooks';

import { useSharedValue, EasingFunctionFactory } from 'react-native-reanimated';

import Animated, { withTiming } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';

const KEY_SHOW = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
const KEY_HIDE = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

interface InputAccessoryViewProps {
  animationInConfig?: { duration: number; easing: EasingFunctionFactory };
  animationOutConfig?: { duration: number; easing: EasingFunctionFactory };
  isVisible?: boolean;
  children?: React.ReactChild;
}

const InputAccessoryView = ({
  animationInConfig,
  animationOutConfig,
  children,
  isVisible,
}: InputAccessoryViewProps) => {
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

  const hAnim = useSharedValue(height);

  React.useEffect(() => {
    const evtShowKeyBoard = Keyboard.addListener(KEY_SHOW, (e) => {
      hAnim.value = withTiming(
        heightRef.current - e.endCoordinates.height - valueRef.current,
        animationInConfig
      );
    });
    const evtHideKeyBoard = Keyboard.addListener(KEY_HIDE, () => {
      hAnim.value = withTiming(heightRef.current, animationOutConfig);
    });

    return () => {
      evtShowKeyBoard.remove();
      evtHideKeyBoard.remove();
    };
  }, []);

  const animationStyles = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateY: isVisible ? hAnim.value : heightRef.current,
        },
      ],
    }),
    [isVisible]
  );

  return (
    <Animated.View style={[StyleSheet.absoluteFill, animationStyles]}>
      <View onLayout={onLayout}>{children}</View>
    </Animated.View>
  );
};
export default InputAccessoryView;
