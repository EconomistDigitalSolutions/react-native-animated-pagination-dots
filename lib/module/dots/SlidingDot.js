import React from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';

const SlidingDot = ({
  scrollX,
  data,
  dotSize,
  containerStyle,
  dotStyle,
  slidingIndicatorStyle,
  marginHorizontal
}) => {
  const {
    width
  } = useWindowDimensions();
  const defaultProps = {
    dotSize: dotSize || 12,
    marginHorizontal: marginHorizontal || 3
  };
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-defaultProps.dotSize + defaultProps.marginHorizontal * 2, 0, defaultProps.dotSize + defaultProps.marginHorizontal * 2]
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      height: defaultProps.dotSize
    }, styles.containerStyle, containerStyle]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [{
      width: defaultProps.dotSize,
      height: defaultProps.dotSize,
      borderRadius: defaultProps.dotSize / 2
    }, styles.slidingIndicatorStyle, // eslint-disable-next-line react-native/no-inline-styles
    {
      position: 'absolute',
      marginHorizontal: marginHorizontal,
      transform: [{
        translateX
      }]
    }, slidingIndicatorStyle]
  }), data.map((_item, index) => {
    return /*#__PURE__*/React.createElement(View, {
      key: index,
      style: [{
        width: defaultProps.dotSize,
        height: defaultProps.dotSize,
        marginHorizontal: defaultProps.marginHorizontal,
        borderRadius: defaultProps.dotSize / 2
      }, styles.dotStyle, dotStyle]
    });
  }));
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotStyle: {
    backgroundColor: '#347af0',
    opacity: 0.4
  },
  slidingIndicatorStyle: {
    backgroundColor: '#347af0',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
export default SlidingDot;
//# sourceMappingURL=SlidingDot.js.map