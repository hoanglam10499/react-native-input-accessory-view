import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputAccessoryView from '../../src';

const App = (props) => {
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          height: 30,
          width: '100%',
          borderWidth: 1,
          borderColor: 'red',
        }}
      >
        <TextInput
          placeholder="InputAccessoryView"
          style={{ flex: 1, padding: 0 }}
          onFocus={() => setisOpen(true)}
          onBlur={() => setisOpen(false)}
        />
      </View>
      <View
        style={{
          height: 30,
          width: '100%',
          borderWidth: 1,
          borderColor: 'red',
          marginTop: 15,
        }}
      >
        <TextInput placeholder="Normal" style={{ flex: 1, padding: 0 }} />
      </View>
      <InputAccessoryView isVisible={isOpen}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Input Accessory View</Text>
        </View>
      </InputAccessoryView>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
