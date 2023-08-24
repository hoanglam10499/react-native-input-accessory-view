![React Native Input Accessory View](background.jpg)

## React Native Input Accessory View

[![Version][version-badge]][package]

[version-badge]: https://img.shields.io/npm/v/react-native-input-accessory-view
[package]: https://www.npmjs.com/package/react-native-input-accessory-view

An universal [InputAccessoryView](https://reactnative.dev/docs/inputaccessoryview) for Android and iOS

## Installation

```sh
yarn add react-native-input-accessory-view
```

If you don't have those already, you will also need to install the [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) and [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)

```sh
yarn add react-native-reanimated
yarn add react-native-safe-area-context@4.7.1
```

## Usage

```js
import InputAccessoryView from 'react-native-input-accessory-view';

// ...

return (
  <View style={{ flex: 1 }}>
    <View style={{ height: 55, backgroundColor: 'blue', width: '100%' }}>
      <TextInput style={{ flex: 1, padding: 0 }} />
    </View>
    <InputAccessoryView
      spaceHeight={100}
      extraHeight={0} //? optional
      renderView={() => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'red' }}>hello</Text>
        </View>
      )}
    />
  </View>
);

// ...
```

See the [example app](./example/src/App.js) for full usage details.

## License

MIT
