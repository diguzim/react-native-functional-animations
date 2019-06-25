import React, { useState, useMemo, useEffect } from 'react';

import {
  View, Text, StyleSheet, Animated
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function AccordionView() {
  const { container } = styles;

  return (
    <View style={container}>
      <Accordion />
    </View>
  )
}

function Accordion() {
  const { accordionContainer } = styles;
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [height, setHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const animatedHeight = useMemo(() => new Animated.Value(height), [])

  // this allow us to track the current value
  animatedHeight.addListener(obj => {
    setHeight(obj.value)
  });

  useEffect(() => {    
    Animated.timing(
      animatedHeight,
      {
        toValue: !isExpanded ? maxHeight : 0,
        duration: 1000
      }
    ).start(() => {
      setIsExpanding(false)
      setIsExpanded(!isExpanded)
    });
  }, [maxHeight]);

  function toogleIsExpanding() {
    if (isExpanded) {
      setMaxHeight(0)
    }
    setIsExpanding(true)
  }

  function getHeight(event) {
    setMaxHeight(event.nativeEvent.layout.height)
  }

  return (
    <View style={accordionContainer}>
      <TouchableWithoutFeedback onPress={toogleIsExpanding}>
        <Text>
          Click to expand. Current height: {height}
        </Text>
      </TouchableWithoutFeedback>
      <Animated.View
        style={{
          height: height,
          overflow: 'hidden'
        }}
      >
        <Text
          onLayout={getHeight}
          style={{display: isExpanded || isExpanding ? 'flex' : 'none',}}
        >
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.

        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  accordionContainer: {
    borderWidth: 1,
  }
});
