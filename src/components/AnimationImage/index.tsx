import React, {useState, useEffect} from 'react';
import {Animated, View, Image, StyleSheet} from 'react-native';

const AnimatedImage = ({imageSource, imageStyle}: any) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: -1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const translateY = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [50, 0, -50],
  });

  return (
    <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
      <Image source={imageSource} style={imageStyle} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedImage;
