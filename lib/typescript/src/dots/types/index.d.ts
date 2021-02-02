import type { Animated, ViewStyle } from 'react-native';
declare type data = Array<Object>;
declare type scrollX = Animated.Value;
declare type inActiveDotOpacity = number;
export interface ExpandingDotProps {
    data: data;
    scrollX: scrollX;
    containerStyle: ViewStyle;
    dotStyle: ViewStyle;
    inActiveDotOpacity?: number;
    expandingDotWidth?: number;
}
export interface ScalingDotProps {
    data: data;
    scrollX: scrollX;
    containerStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    inActiveDotOpacity?: inActiveDotOpacity;
    activeDotScale?: number;
}
export interface SlidingBorderProps {
    data: data;
    scrollX: scrollX;
    dotSize?: number;
    borderPadding?: number;
    containerStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    dotContainerStyle?: ViewStyle;
    slidingIndicatorStyle?: ViewStyle;
}
export interface SlidingDotProps {
    data: data;
    scrollX: scrollX;
    dotSize?: number;
    containerStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    dotContainerStyle?: ViewStyle;
    slidingIndicatorStyle?: ViewStyle;
    marginHorizontal?: number;
}
export {};