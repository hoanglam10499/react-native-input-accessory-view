declare module 'react-native-input-accessory-view' {
  import { Component } from 'react';
  export interface InputAccessoryViewProps {
    animationInConfig?: object;
    animationOutConfig?: object;
    isVisible?: boolean;
  }
  export default class InputAccessoryView extends Component<InputAccessoryViewProps> {}
}
