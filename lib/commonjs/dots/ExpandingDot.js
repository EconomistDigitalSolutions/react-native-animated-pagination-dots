"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ExpandingDot = ({
  scrollX,
  data,
  dotStyle,
  containerStyle,
  inActiveDotOpacity,
  inActiveDotColor,
  expandingDotWidth,
  activeDotColor
}) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const defaultProps = {
    inActiveDotColor: inActiveDotColor || '#000',
    inActiveDotOpacity: inActiveDotOpacity || 0.5,
    expandingDotWidth: expandingDotWidth || 20,
    dotWidth: dotStyle.width || 10,
    activeDotColor: activeDotColor || '#347af0'
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.containerStyle, containerStyle]
  }, data.map((_, index) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const colour = scrollX.interpolate({
      inputRange,
      outputRange: [defaultProps.inActiveDotColor, defaultProps.activeDotColor, defaultProps.inActiveDotColor],
      extrapolate: 'clamp'
    });
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [defaultProps.inActiveDotOpacity, 1, defaultProps.inActiveDotOpacity],
      extrapolate: 'clamp'
    });
    const expand = scrollX.interpolate({
      inputRange,
      outputRange: [defaultProps.dotWidth, defaultProps.expandingDotWidth, defaultProps.dotWidth],
      extrapolate: 'clamp'
    });
    return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
      key: "dot-".concat(index),
      style: [styles.dotStyle, dotStyle, {
        width: expand
      }, {
        opacity
      }, {
        backgroundColor: colour
      }]
    });
  }));
};

const styles = _reactNative.StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5
  }
});

var _default = ExpandingDot;
exports.default = _default;
//# sourceMappingURL=ExpandingDot.js.map