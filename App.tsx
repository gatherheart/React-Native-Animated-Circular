import React, { useState, useEffect } from "react";
import { View, Button, Text, Animated, Easing } from "react-native";
import Root from "./src/Root";
const animatedValue1 = new Animated.Value(0);
const animatedValue2 = new Animated.Value(0);
const animatedValue3 = new Animated.Value(0);

export default function App() {
  const [done, setDone] = useState(0);
  const timePerDegree = 1200 / 360;
  const rotate1 = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const rotate2 = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotate3 = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const elevation = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const rotate4 = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ["-360deg", "360deg"],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 1800 * timePerDegree,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 1800 * 2 * timePerDegree,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.sequence([
        Animated.delay(1800),
        Animated.timing(animatedValue3, {
          toValue: 1,
          duration: 1800 * timePerDegree,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ margin: 40, flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={{ fontSize: 20, marginBottom: 30 }}>
          Click `progress` percentage and see the donut animate
        </Text>
        <View style={{ margin: 2, width: 100, display: "flex" }}>
          <Button onPress={() => setDone(20)} title="20" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(90)} title="90" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(15)} title="15" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(25)} title="25" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(78)} title="78" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(33)} title="33" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(2)} title="2" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(21)} title="21" />
        </View>
        <View style={{ margin: 2, width: 100 }}>
          <Button onPress={() => setDone(98)} title="98" />
        </View>
      </View>
      <Root
        activeColor="darkviolet"
        passiveColor="darkgrey"
        baseColor="white"
        width={50}
        done={done}
        radius={100}
        duration={1200}
      >
        <Text>Wow!</Text>
      </Root>
      <View
        style={{
          borderWidth: 1,
          overflow: "hidden",
          borderRadius: 100,
          height: 100 * 2,
          width: 100 * 2,
        }}
      >
        <Animated.View
          style={[
            {
              width: 100,
              height: 100 * 2,
              borderRadius: 100,
              borderWidth: 1,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              position: "absolute",
              borderColor: "black",
              backgroundColor: "black",
              zIndex: 0,
            },
            {
              transform: [
                { translateX: 100 / 2 },
                { rotate: rotate1 },
                { translateX: -100 / 2 },
                { scale: 1.0 },
              ],
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100 * 2,
              borderRadius: 100,
              borderWidth: 1,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              position: "absolute",
              borderColor: "black",
              backgroundColor: "black",
              elevation: elevation,
            },
            {
              transform: [
                { translateX: 100 / 2 },
                { rotate: rotate2 },
                { translateX: -100 / 2 },
                { scale: 1.0 },
              ],
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100 * 2,
              borderRadius: 100,
              borderWidth: 1,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              position: "absolute",
              borderColor: "white",
              backgroundColor: "white",
              zIndex: 0,
            },
            {
              transform: [
                { translateX: 100 / 2 },
                { rotate: rotate3 },
                { translateX: -100 / 2 },
                { scale: 1.0 },
              ],
            },
          ]}
        ></Animated.View>

        <Animated.View
          style={[
            {
              top: 20,
              left: 20,
              width: 80 * 2,
              height: 80 * 2,
              borderRadius: 100,
              borderWidth: 1,
              position: "absolute",
              borderColor: "purple",
              backgroundColor: "purple",
              zIndex: 2,
            },
            {
              transform: [{ rotate: rotate2 }, { scale: 1.0 }],
            },
          ]}
        ></Animated.View>
      </View>
      <Animated.View
        style={[
          {
            right: 50,
            width: 100,
            height: 100 * 2,
            borderRadius: 100,
            borderWidth: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}
      ></Animated.View>
    </View>
  );
}
