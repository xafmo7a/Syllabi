import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Material = () => {
  return (
    <View style={styles.material}>
      <View style={[styles.iphone141, styles.iconPosition]}>
        <View style={styles.basicInput}>
          <Text style={styles.inputText} />
        </View>
        <Text style={[styles.egMidtermComputerContainer, styles.midtermTypo]}>
          <Text style={styles.egMidtermComputer}>
            e.g midterm: Computer Programming
          </Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Image
          style={styles.iphone141Child}
          resizeMode="cover"
          source={require("../assets/frame-2160.png")}
        />
      </View>
      <View
        style={[styles.iconArrowBackOutlineIconParent, styles.iconPosition]}
      >
        <Image
          style={[styles.iconArrowBackOutlineIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline-icon.png")}
        />
        <Text
          style={[styles.midtermClassName, styles.midtermTypo]}
        >{`Midterm: class name
30 June`}</Text>
      </View>
      <Text style={[styles.whatTimeIs, styles.howLongIsTypo]}>
        What time is the session?
      </Text>
      <Text style={[styles.howLongIs, styles.howLongIsTypo]}>
        How long is the session?
      </Text>
      <View style={[styles.amParent, styles.parentBorder]}>
        <Text style={styles.amTypo}>
          {`09:00 `}
          <Text style={styles.a}>A</Text>M
        </Text>
        <Image
          style={[styles.outlinerightIcon, styles.ml12]}
          resizeMode="cover"
          source={require("../assets/outlineright.png")}
        />
      </View>
      <View style={[styles.hoursParent, styles.parentBorder]}>
        <Text style={[styles.hours, styles.amTypo]}>{` 2 hours    `}</Text>
        <Image
          style={[styles.outlinerightIcon, styles.ml12]}
          resizeMode="cover"
          source={require("../assets/outlineright.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  midtermTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    position: "absolute",
  },
  howLongIsTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 20,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  parentBorder: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#b8844c",
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    alignItems: "center",
    position: "absolute",
  },
  amTypo: {
    color: Color.darkseagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_17xl,
    textAlign: "left",
  },
  inputText: {
    top: 10,
    color: Color.neutral300,
    width: 90,
    height: 15,
    alignItems: "center",
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    display: "none",
    left: 16,
    position: "absolute",
  },
  basicInput: {
    top: 140,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral100,
    width: 357,
    height: 35,
    display: "none",
    left: 16,
    position: "absolute",
  },
  egMidtermComputer: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    color: Color.darkgray_100,
  },
  text: {
    color: Color.lightgray,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  egMidtermComputerContainer: {
    top: 148,
    left: 25,
    display: "none",
  },
  iphone141Child: {
    top: 711,
    left: 293,
    width: 64,
    height: 64,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    position: "absolute",
  },
  iphone141: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorsWhite100,
    width: 390,
    overflow: "hidden",
    height: 812,
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
    overflow: "hidden",
  },
  midtermClassName: {
    top: 15,
    left: 54,
    color: Color.peru,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  iconArrowBackOutlineIconParent: {
    top: 27,
    left: 7,
    width: 362,
    height: 52,
    overflow: "hidden",
  },
  whatTimeIs: {
    top: 123,
  },
  howLongIs: {
    top: 363,
  },
  a: {
    letterSpacing: "10%",
  },
  outlinerightIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  amParent: {
    top: 190,
    left: 61,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
  },
  hours: {
    letterSpacing: 1.8,
  },
  hoursParent: {
    top: 430,
    left: 68,
    width: 241,
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_xs,
    paddingRight: 19,
    paddingBottom: Padding.p_xs,
  },
  material: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Material;
