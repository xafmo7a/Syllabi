import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.imgIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/img6.png")}
      />
      <Image
        style={[styles.brandingIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/branding.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  imgIcon: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  brandingIcon: {
    height: "3.21%",
    width: "37.63%",
    top: "66.5%",
    right: "31.43%",
    bottom: "30.29%",
    left: "30.93%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  welcome: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Welcome;
