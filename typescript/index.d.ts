declare module 'react-native-input-accessory-view' {
  import { Component } from 'react';
  import { StyleProp, ViewStyle } from 'react-native';
  
  export interface InputAccessoryViewProps {
    animationInConfig?: object;
    animationOutConfig?: object;
    renderView?: () => void;
    isOpen?: boolean;
    type?: string;
  }

  export default class InputAccessoryView extends Component<InputAccessoryViewProps> {}
}