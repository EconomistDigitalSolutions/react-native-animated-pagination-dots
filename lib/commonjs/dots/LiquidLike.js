"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = require("react-native-svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AnimatedLine = _reactNative.Animated.createAnimatedComponent(_reactNativeSvg.Line);

const AnimatedSvg = _reactNative.Animated.createAnimatedComponent(_reactNativeSvg.Svg);

const LiquidLike = ({
  scrollX,
  data,
  dotSize,
  marginHorizontal,
  inActiveDotOpacity,
  inActiveDotColor,
  activeDotColor,
  containerStyle,
  scrollOffset,
  wormDot,
  bigHead,
  strokeWidth,
  bigHeadScale
}) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const defaultProps = {
    dotSize: dotSize || 12,
    marginHorizontal: marginHorizontal || 6,
    inActiveDotOpacity: inActiveDotOpacity || 0.5,
    inActiveDotColor: inActiveDotColor || '#000',
    activeDotColor: activeDotColor || '#fff',
    wormDot: wormDot || false,
    bigHead: bigHead || false,
    strokeWidth: strokeWidth || 8,
    bigHeadScale: bigHeadScale || 1
  };
  const inputRange = [0, width, width * 2];

  const translateBack = _react.default.useRef(new _reactNative.Animated.Value(0)).current;

  _reactNative.Animated.timing(translateBack, {
    toValue: scrollOffset.interpolate({
      inputRange: [0, width],
      outputRange: [defaultProps.dotSize / 2, defaultProps.dotSize + defaultProps.marginHorizontal + (defaultProps.marginHorizontal + defaultProps.dotSize / 2)]
    }),
    duration: 100,
    useNativeDriver: true
  }).start();

  const translateFront = scrollX.interpolate({
    inputRange,
    outputRange: [defaultProps.dotSize / 2, defaultProps.dotSize + defaultProps.marginHorizontal * 2 + defaultProps.dotSize / 2, (defaultProps.dotSize + defaultProps.marginHorizontal * 2) * 2 + defaultProps.dotSize / 2]
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.containerStyle, containerStyle]
  }, data.map((_item, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      style: {
        opacity: defaultProps.inActiveDotOpacity,
        width: defaultProps.dotSize,
        height: defaultProps.dotSize,
        borderRadius: defaultProps.dotSize / 2,
        marginHorizontal: defaultProps.marginHorizontal,
        backgroundColor: defaultProps.inActiveDotColor
      }
    });
  }), !wormDot ? /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [{
      width: defaultProps.dotSize,
      height: defaultProps.dotSize,
      marginHorizontal: defaultProps.marginHorizontal,
      backgroundColor: defaultProps.activeDotColor,
      borderRadius: defaultProps.dotSize
    }, styles.svg, {
      transform: [{
        translateX: scrollX.interpolate({
          inputRange,
          outputRange: [0, defaultProps.dotSize + defaultProps.marginHorizontal * 2, (defaultProps.dotSize + defaultProps.marginHorizontal * 2) * 2]
        })
      }, !bigHead ? {
        scale: _reactNative.Animated.modulo(_reactNative.Animated.modulo(_reactNative.Animated.divide(scrollX, width), width), 1).interpolate({
          inputRange: [0, 0.1, 0.9, 1],
          outputRange: [1, 0, 0, 1]
        })
      } : {
        scale: defaultProps.bigHeadScale
      }]
    }]
  }) : null, /*#__PURE__*/_react.default.createElement(AnimatedSvg, {
    style: styles.svg
  }, /*#__PURE__*/_react.default.createElement(AnimatedLine, {
    x1: translateFront,
    y1: defaultProps.dotSize / 2,
    x2: translateBack,
    y2: defaultProps.dotSize / 2,
    stroke: defaultProps.activeDotColor,
    strokeWidth: defaultProps.strokeWidth,
    strokeLinecap: "round",
    translateX: defaultProps.marginHorizontal
  })));
};

const styles = _reactNative.StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  },
  svg: {
    position: 'absolute'
  }
});

var _default = LiquidLike;
exports.default = _default;
//# sourceMappingURL=LiquidLike.js.map