import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import Button from "./Button";
import tvShowContent from "../assets/tvShowContent";

const Menu = props => (
  <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
    <StatusBar />
    <Button
      {...props}
      image={tvShowContent.image}
      text="Image Header"
      target="imageHeaderMenu"
    />
    <Button
      {...props}
      image={require("../assets/cutecat.jpg")}
      text="Twitter"
      target="twitter"
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

export default Menu;
