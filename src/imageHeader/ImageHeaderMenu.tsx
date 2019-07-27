import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import Button from "../Button";
import tvShowContent from "../../assets/tvShowContent";

interface Props {
  navigation: NavigationScreenProp<{}>;
}

const ImageHeaderMenu = (props: Props) => (
  <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
    <StatusBar />
    <Button
      {...props}
      image={require("../../assets/NZ.jpg")}
      text="BasicUsage"
      target="basicUsage"
    />
    <Button
      {...props}
      image={tvShowContent.image}
      text="TV Show"
      target="tvShow"
    />
    <Button
      {...props}
      image={require("../../assets/cutecat.jpg")}
      text="Cute cat"
      target="colors"
    />
    <Button
      {...props}
      image={require("../../assets/avignon.jpg")}
      text="Flatlist"
      target="avignon"
    />
    <Button
      {...props}
      image={require("../../assets/pullrefresh.jpg")}
      text="Pull To Refresh"
      target="pullrefresh"
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  pageContent: {
    alignItems: "stretch",
    padding: 30
  }
});

export default ImageHeaderMenu;
