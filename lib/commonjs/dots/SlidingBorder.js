"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SlidingBorder = ({
  scrollX,
  data,
  dotSize,
  containerStyle,
  dotStyle,
  dotContainerStyle,
  slidingIndicatorStyle,
  borderPadding
}) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const defaultProps = {
    dotSize: dotSize || 24,
    borderPadding: borderPadding || -5
  };
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-defaultProps.dotSize + defaultProps.borderPadding, 0, defaultProps.dotSize + defaultProps.borderPadding]
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [{
      height: defaultProps.dotSize
    }, styles.container, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [{
      width: defaultProps.dotSize + defaultProps.borderPadding,
      height: defaultProps.dotSize + defaultProps.borderPadding,
      borderRadius: (defaultProps.dotSize + defaultProps.borderPadding) / 2
    }, styles.slidingIndicatorStyle, // eslint-disable-next-line react-native/no-inline-styles
    {
      position: 'absolute',
      transform: [{
        translateX
      }]
    }, slidingIndicatorStyle]
  }), data.map((_item, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      style: [{
        width: defaultProps.dotSize + defaultProps.borderPadding
      }, styles.dotContainerStyle, dotContainerStyle]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [{
        width: defaultProps.dotSize / 2,
        height: defaultProps.dotSize / 2,
        borderRadius: defaultProps.dotSize / 4
      }, styles.dotStyle, dotStyle]
    }));
  }));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotStyle: {
    backgroundColor: '#347af0'
  },
  dotContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  slidingIndicatorStyle: {
    borderWidth: 1,
    borderColor: '#347af0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

var _default = SlidingBorder;
exports.default = _default;
//# sourceMappingURL=SlidingBorder.js.map