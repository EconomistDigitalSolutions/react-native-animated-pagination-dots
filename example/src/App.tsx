import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  ScalingDot,
  SlidingBorder,
  ExpandingDot,
  SlidingDot,
  LiquidLike,
} from 'react-native-animated-pagination-dots';

const INTRO_DATA = [
  {
    key: '1',
    title: 'App showcase ✨',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    key: '2',
    title: 'Introduction screen 🎉',
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
  {
    key: '3',
    title: 'And can be anything 🎈',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
  },
  {
    key: '4',
    title: 'And can be anything 🎈',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
  },
];
const App = () => {
  const { width } = Dimensions.get('screen');
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <View style={[styles.itemContainer, { width: width - 80 }]}>
          <Text>{item.title}</Text>
          <Animated.Text>{item.description}</Animated.Text>
        </View>
      );
    },
    [width]
  );

  const keyExtractor = React.useCallback((item) => item.key, []);

  return (
    <View style={[styles.container]}>
      <FlatList
        data={INTRO_DATA}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX, y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
        style={styles.flatList}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
      <View style={styles.text}>
        <View style={styles.dotContainer}>
          <Text>Expanding Dot</Text>
          <ExpandingDot
            data={INTRO_DATA}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: '#347af0',
              borderRadius: 5,
              marginHorizontal: 5,
            }}
            containerStyle={{
              top: 30,
            }}
          />
        </View>
        <View style={styles.dotContainer}>
          <Text>Scaling Dot</Text>
          <ScalingDot
            data={INTRO_DATA}
            scrollX={scrollX}
            containerStyle={{
              top: 30,
            }}
          />
        </View>

        <View style={styles.dotContainer}>
          <Text>Sliding Border</Text>
          <SlidingBorder
            containerStyle={{ top: 30 }}
            data={INTRO_DATA}
            scrollX={scrollX}
            dotSize={24}
          />
        </View>
        <View style={styles.dotContainer}>
          <Text>Sliding Dot</Text>
          <SlidingDot
            marginHorizontal={3}
            containerStyle={{ top: 30 }}
            data={INTRO_DATA}
            scrollX={scrollX}
            dotSize={12}
          />
        </View>
        <View style={styles.dotContainer}>
          <Text>Liquid Like</Text>
          <LiquidLike
            data={INTRO_DATA}
            scrollX={scrollX}
            dotSize={12}
            dotSpacing={4}
            lineDistance={5}
            lineHeight={3}
            inActiveDotOpacity={0.3}
            containerStyle={{
              top: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  flatList: {
    flex: 1,
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 40,
    marginHorizontal: 40,
    borderRadius: 20,
  },
  imageSlider: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
  contentSlider: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dots: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 310,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default App;
