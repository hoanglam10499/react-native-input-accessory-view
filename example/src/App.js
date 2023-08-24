import React, { memo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import InputAccessoryView from '../../';

function index() {
  return (
    <View style={styles.container}>
      <View style={{ height: 55, backgroundColor: 'blue', width: '100%' }}>
        <TextInput style={{ flex: 1, padding: 0 }} />
      </View>
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
    </View>
  );
}
export default memo(index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
