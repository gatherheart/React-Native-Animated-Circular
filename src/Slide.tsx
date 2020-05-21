import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  Dimensions,
  PanResponder,
  Easing,
} from "react-native";
const SWIPE_THRESHOLD = 120;

const { width: WIDHT, height: HEIGHT } = Dimensions.get("screen");
const position = new Animated.ValueXY({ x: 0, y: 0 });

export default () => {
  const opacityAnimationValue = new Animated.Value(1);
  const panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: (evt) => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: (e, { vx, vy }) => {
      const deceleration = 0.997;

      Animated.decay(position).stop();

      position.setOffset({ x: position.x._value, y: position.y._value });
      position.setValue({ x: 0, y: 0 });
      console.log("GRANT", position);
    },

    onPanResponderMove: (e, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (e, { vx, vy, dx, dy }) => {
      console.log("RELEASE", position);
      console.log("RELEASE DX", dx, dy);
      console.log("RELEASE VX", vx, vy);
      position.flattenOffset();

      const deceleration = 0.997;
      const timeX = vx / deceleration;
      const timeY = vy / deceleration;
      const distanceX =
        vx * timeX + (1 / 2) * deceleration * Math.pow(timeX, 2);

      const distanceY =
        vy * timeY + (1 / 2) * deceleration * Math.pow(timeY, 2);

      console.log("DISTANCE", distanceX, distanceY);

      Animated.decay(position, {
        velocity: { x: vx, y: vy },
        deceleration: deceleration,
        useNativeDriver: true,
      }).start(() => {
        console.log("DeCAY", position);
      });
    },
  });

  return (
    <View>
      <Animated.View
        style={{
          backgroundColor: "blue",
          width: 200,
          height: 200,
          opacity: opacityAnimationValue,
          transform: [...position.getTranslateTransform()],
        }}
        {...panResponder.panHandlers}
      ></Animated.View>
    </View>
  );
};

const vote = {
  voteTitle: "4월 회식 날짜",
  voteMemo: "",
  voteList: "",
  deadline: "2020-05-14T15:43:54.107Z",
  multipleOption: "",
  anonymousOption: "",
  voteMemberList: "",
};
