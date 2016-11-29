/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class SomeNormalProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholderTextColor="#eee"
            placeholder="Username"
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.input}
            returnKeyType="done"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
    input: {
        borderRadius: 8,
        height: 100,
        color: '#000',
        fontSize: 80,
        borderWidth: 1,
        fontSize: 50,
        fontFamily: 'Indie Flower',
        // NOTE(brentvatne):
        // Step 1: Uncomment all of the styles below (Block 1 and Block 2). Notice the error
        // Step 2: Comment block 2 again. Notice the error is gone.
        // Step 3: Comment block 1 again, and uncomment block 2. Notice the error is still gone.
        // Another observation: this same thing applies to props passed into the TextInput

        // // Block 1
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        backgroundColor: 'rgba(255,0,255, 0.4)',

        // // Block 2
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderColor: 'white',
    },
});

AppRegistry.registerComponent('SomeNormalProject', () => SomeNormalProject);
