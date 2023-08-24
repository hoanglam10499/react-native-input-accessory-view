import React, { memo, createElement } from 'react';
import { Platform, View } from 'react-native';
import ReAnimated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface InputAccessoryViewProps {
  renderView?: React.ComponentType<any>;
  spaceHeight?: number;
  extraHeight?: number;
}

function InputAccessoryView(props: InputAccessoryViewProps): JSX.Element {
  const { spaceHeight = 55, renderView = '', extraHeight = 0 } = props;
  const keyboard = useAnimatedKeyboard();
  const insets = useSafeAreaInsets();
  const spaceStyle = useAnimatedStyle(() => {
    if (Platform.OS === 'ios') {
      return { height: keyboard.height.value + extraHeight };
    }
    return { height: keyboard.height.value - insets.bottom + extraHeight };
  }, [insets.bottom, extraHeight]);

  const translateStyle = useAnimatedStyle(() => ({
    opacity: keyboard.height.value === 0 ? 0 : 1,
  }));

  return (
    <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
      <ReAnimated.View
        style={[{ height: spaceHeight, width: '100%' }, translateStyle]}
      >
        {createElement(renderView)}
      </ReAnimated.View>
      <ReAnimated.View style={spaceStyle} />
    </View>
  );
}

export default memo(InputAccessoryView);
