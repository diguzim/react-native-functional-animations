import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, Animated
} from 'react-native'

export default function ExpandableView() {
  const { container } = styles;
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [height, setHeight] = useState(20);
  const animatedHeight = useMemo(() => new Animated.Value(height), [])

  // this allow us to track the current value
  animatedHeight.addListener(obj => {
    setHeight(obj.value)
  });

  function onFinish() {
    setIsExpanding(false);
    setIsExpanded(true);
  }

  function handleOnClick() {
    setIsExpanding(true)
    Animated.timing(
      animatedHeight,
      {
        toValue: 200,
        duration: 3000
      }
    ).start(() => onFinish())
  }

  return (
    <View style={container}>
      {
        !isExpanded && !isExpanding &&
          <Text onPress={handleOnClick}>Click to Expand</Text>
      }
      {
        isExpanding &&
          <Text>Expanding, please wait</Text>
      }
      {
        isExpanded &&
          <Text>The view is now expanded</Text>
      }
      <Text>Current height: {height}</Text>
      <Animated.View
        style={{
          height: animatedHeight,
          backgroundColor: 'green',
          borderWidth: 1
        }}
      >
        <Text>hello</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
