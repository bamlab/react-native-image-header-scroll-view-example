// @flow
import React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

import {
  AnimatedScrollView,
  fixedContent
} from "react-native-scrollview-animation";

interface ProfileProps {
  scrollValue: Animated.Value<number>;
}

class Profile extends React.Component<ProfileProps> {
  render() {
    const { scrollValue } = this.props;
    const height = scrollValue.interpolate({
      inputRange: [0, 120],
      outputRange: [50, 20],
      extrapolate: Animated.Extrapolate.CLAMP
    });
    const top = scrollValue.interpolate({
      inputRange: [0, 120, 150],
      outputRange: [180, 80, 40],
      extrapolate: Animated.Extrapolate.CLAMP
    });

    return (
      <Animated.Image
        source={require("../assets/NZ.jpg")}
        style={{
          height,
          width: height,
          borderRadius: 120,
          position: "absolute",
          top,
          left: 50
        }}
      />
    );
  }
}

interface Props {}

class Twitter extends React.Component<Props> {
  renderHeader() {
    return (
      <View style={{ flex: 1, alignSelf: "stretch", backgroundColor: "red" }} />
    );
  }
  render() {
    return (
      <AnimatedScrollView
        backgroundComponents={[]}
        foregroundComponents={[
          fixedContent({
            render: this.renderHeader,
            minHeight: 80,
            maxHeight: 200
          }),
          Profile
        ]}
        childrenComponents={[]}
        minHeight={0}
        maxHeight={200}
        bounces={false}
      >
        <Text style={{ height: 20000, paddingTop: 80 }}>Content</Text>
      </AnimatedScrollView>
    );
  }
}
export default Twitter;
