import {StyleSheet, Platform, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
const DrawerSceneWrapper = ({children}) => {
  const progress = useDrawerProgress();
  const {width} = useWindowDimensions();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.85]),
      },
      {
        rotateY: `${interpolate(progress.value, [0, 1], [0, 1])}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === 'android' ? width - 130 : 10],
        ),
      },
    ],
    overflow: 'visible',
  }));
  const roundedWrapper = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [0, 20]),
  }));
  const rounded = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [0, 16]),
  }));
  const border = useAnimatedStyle(() => ({
    top: interpolate(progress.value, [0, 1], [0, 30]),
    left: interpolate(progress.value, [0, 1], [0, -25]),
    right: interpolate(progress.value, [0, 1], [0, -25]),
    bottom: interpolate(progress.value, [0, 1], [0, 30]),
  }));
  const border2 = useAnimatedStyle(() => ({
    top: interpolate(progress.value, [0, 1], [0, 70]),
    left: interpolate(progress.value, [0, 1], [0, -45]),
    right: interpolate(progress.value, [0, 1], [0, -45]),
    bottom: interpolate(progress.value, [0, 1], [0, 70]),
  }));
  const border3 = useAnimatedStyle(() => ({
    top: interpolate(progress.value, [0, 1], [0, 130]),
    left: interpolate(progress.value, [0, 1], [0, -45]),
    right: interpolate(progress.value, [0, 1], [0, -30]),
    bottom: interpolate(progress.value, [0, 1], [0, 130]),
  }));
  return (
    <Animated.View style={[styles.container, animatedStyle, roundedWrapper]}>
      <Animated.View style={[styles.body, rounded]}>{children}</Animated.View>
      <Animated.View style={[styles.backstage, rounded, border]} />
      <Animated.View style={[styles.backstage1, rounded, border2]} />
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#e1f2fe',
  },
  backstage: {
    backgroundColor: '#bae6fd',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backstage1: {
    backgroundColor: '#7dd3fc',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
  },

});
