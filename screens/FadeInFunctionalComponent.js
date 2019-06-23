import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

export default function FadeInFunctionalComponent() {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000
      }
    ).start();   
  }, []);


  return (
    <Animated.View
      style={{
        opacity: fadeAnim
      }}
    >
      <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
    </Animated.View>
  );
}
