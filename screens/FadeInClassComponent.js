import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class FadeInClassComponent extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </Animated.View>
    );
  }
}
