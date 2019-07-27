import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";

class Button extends React.Component {
  render() {
    const props = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          this.props.navigation.navigate(props.target);
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.button} source={props.image} />
          <View style={styles.overlay}>
            <Text style={styles.buttonText}>{props.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: Dimensions.get("window").width - 60,
    position: "absolute"
  },
  buttonText: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 20,
    fontWeight: "bold"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    height: 100,
    width: Dimensions.get("window").width - 60,
    borderRadius: 10,
    marginVertical: 15
  }
});

export default Button;
