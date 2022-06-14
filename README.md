# react-native-input-accessory-view

An universal [input accessory view](https://reactnative.dev/docs/inputaccessoryview) for Android and iOS

## Installation

```sh
yarn add react-native-input-accessory-view react-native-safe-area-context
```

If you don't have those already, you will also need to install the [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)

## Usage

```js

import InputAccessoryView from "react-native-input-accessory-view";

// ...

const [isOpen, setisOpen] = React.useState(false);
  return (
    <>
      <TextInput
        onFocus={() => setisOpen(true)}
        onBlur={() => setisOpen(false)}
      />
      <InputAccessoryView isOpen={isOpen}> 
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Input Accessory View</Text>
        </View>
      </InputAccessoryView>
    </>
);

// ...
```

See the [example app](./example/src/App.js) for full usage details.

## API

### Props

#### `isVisible`

```ts
boolean
```

Is the only prop you'll really need to make work: you should control this prop value by saving it in your wrapper component state and setting it to `true` or `false` when needed.

#### `animationInConfig`

```ts
object
```

Config for the open animation

Defaults to `{ duration: 200 }`

#### `animationOutConfig`

```ts
object
```

Config for the hide animation

Defaults to `{ duration: 400 }`


## License

MIT