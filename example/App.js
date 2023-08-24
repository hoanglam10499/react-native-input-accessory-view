import React, { memo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context';

import InputAccessoryView from '../';

function Main() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ height: 55, backgroundColor: 'blue', width: '100%' }}>
          <TextInput style={{ flex: 1, padding: 0 }} />
        </View>
      </SafeAreaView>
      <InputAccessoryView
        spaceHeight={100}
        extraHeight={0}
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
    </>
  );
}

function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Main />
    </SafeAreaProvider>
  );
}
export default memo(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
