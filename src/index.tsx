import React from 'react';
import { Keyboard, Platform, Dimensions } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Animated, { withTiming } from 'react-native-reanimated';
import type { EasingFunctionFactory } from 'react-native-reanimated';

const KEY_SHOW = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
const KEY_HIDE = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

const { height: BASE_HEIGHT } = Dimensions.get('window');
interface InputAccessoryViewProps {
  animationInConfig?: { duration: number; easing: EasingFunctionFactory };
  animationOutConfig?: { duration: number; easing: EasingFunctionFactory };
  isVisible?: boolean;
  children?: React.ReactChild;
  spacing?: number;
}

const InputAccessoryView = ({
  animationInConfig,
  animationOutConfig,
  children,
  isVisible,
  spacing = 0,
}: InputAccessoryViewProps) => {
  const { height: FRAME_HEIGHT, width } = useSafeAreaFrame();
  const hAnim = useSharedValue(0);

  React.useEffect(() => {
    const eventShow = Keyboard.addListener(KEY_SHOW, (e) => {
      const heightKeyBoard = e.endCoordinates.height;
      hAnim.value = withTiming(
        FRAME_HEIGHT - BASE_HEIGHT + heightKeyBoard - spacing,
        animationInConfig
      );
    });
    const eventHide = Keyboard.addListener(KEY_HIDE, () => {
      hAnim.value = withTiming(0, animationOutConfig);
    });
    return () => {
      eventShow.remove();
      eventHide.remove();
    };
  }, []);

  const animationStyles = useAnimatedStyle(
    () => ({
      bottom: isVisible ? hAnim.value : BASE_HEIGHT,
    }),
    [isVisible]
  );

  return (
    <Animated.View style={[{ position: 'absolute', width }, animationStyles]}>
      {children}
    </Animated.View>
  );
};
export default InputAccessoryView;
