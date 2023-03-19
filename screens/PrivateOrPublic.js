import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const PrivateOrPublic = () => {
  return (
    <View style={styles.privateOrPublic}>
      <View
        style={[styles.iconArrowBackOutlineIconParent, styles.iconPosition]}
      >
        <Image
          style={[styles.iconArrowBackOutlineIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline-icon.png")}
        />
        <Text style={styles.midtermClassName}>{`Midterm: class name
30 June`}</Text>
      </View>
      <Text style={styles.doYouWant}>{`Do you want the session to be
private or public?`}</Text>
      <Image
        style={[styles.privateOrPublicChild, styles.privateLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-176.png")}
      />
      <Image
        style={[styles.privateOrPublicItem, styles.privateLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-177.png")}
      />
      <Text style={[styles.private, styles.publicTypo]}>Private</Text>
      <Text style={[styles.public, styles.publicTypo]}>Public</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  privateLayout: {
    height: 30,
    width: 30,
    borderRadius: Border.br_3xs,
    left: 24,
    position: "absolute",
  },
  publicTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 76,
    lineHeight: 24,
    textAlign: "left",
    position: "absolute",
  },
  iconArrowBackOutlineIcon: {
    height: "67.31%",
    width: "9.67%",
    top: "13.46%",
    right: "88.4%",
    bottom: "19.23%",
    left: "1.93%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  midtermClassName: {
    top: 15,
    left: 54,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    textAlign: "left",
    color: Color.peru,
    position: "absolute",
  },
  iconArrowBackOutlineIconParent: {
    top: 27,
    left: 0,
    width: 362,
    height: 52,
  },
  doYouWant: {
    top: 110,
    left: 20,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.darkslategray_100,
    lineHeight: 24,
    textAlign: "left",
    position: "absolute",
  },
  privateOrPublicChild: {
    top: 213,
  },
  privateOrPublicItem: {
    top: 292,
  },
  private: {
    top: 216,
    color: Color.neutral300,
  },
  public: {
    top: 295,
    color: Color.peru,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 76,
  },
  privateOrPublic: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PrivateOrPublic;
