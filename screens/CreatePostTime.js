import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CreatePostTime = () => {
  return (
    <View style={styles.createPostTime}>
      <View style={[styles.iphone141, styles.iconPosition]}>
        <View style={[styles.basicInput, styles.basicInputPosition]}>
          <Text style={[styles.inputText, styles.midtermTypo]} />
        </View>
        <Text style={[styles.egMidtermComputerContainer, styles.midtermTypo]}>
          <Text style={styles.egMidtermComputer}>
            e.g midterm: Computer Programming
          </Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Image
          style={[styles.iphone141Child, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/frame-2160.png")}
        />
      </View>
      <Text style={styles.whenIsThe}>When is the session for?</Text>
      <View
        style={[styles.iconArrowBackOutlineIconParent, styles.iconPosition]}
      >
        <Image
          style={[styles.iconArrowBackOutlineIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline-icon.png")}
        />
        <Text style={[styles.midtermClassName, styles.midtermTypo]}>
          Midterm: class name
        </Text>
      </View>
      <View style={[styles.june2023Parent, styles.basicInputPosition]}>
        <Text style={[styles.june2023, styles.june2023Typo]}>June 2023</Text>
        <Text style={[styles.july2023, styles.june2023Typo]}>July 2023</Text>
        <Text style={[styles.august2023, styles.june2023Typo]}>
          August 2023
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>
          <Text
            style={styles.text2}
          >{`                                                `}</Text>
          <Text style={styles.text3}>{`1        2         3          4
`}</Text>
          <Text style={styles.text2}>{`
5      6`}</Text>
          <Text style={styles.text5}>6</Text>
          <Text
            style={styles.text2}
          >{`       7       8       9       10       11       12       13

14    15     16     17     18     19       20       21       22

23    24     25     26     27     28       29`}</Text>
          <Text style={styles.text5}>29</Text>
          <Text style={styles.text2}>{`   `}</Text>
          <Text style={styles.text5}>30</Text>
          <Text style={styles.text2}>{`           `}</Text>
        </Text>
        <Text style={[styles.text11, styles.textTypo]}>
          <Text
            style={styles.text2}
          >{`                                                1        2         3          4

5       6       7       8       9       10       11       12       13

14    15     16     17     18     19       20       21       22

23    `}</Text>
          <Text style={styles.text13}>24</Text>
          <Text
            style={styles.text2}
          >{`     25     26     27     28       29       30       `}</Text>
        </Text>
        <Text
          style={[styles.text15, styles.textTypo]}
        >{`                                                1        2         3          4

5       6       7       8       9       10       11       12       13

14    15     16     17     18     19       20       21       22

23    24     25     26     27     28       29       30       `}</Text>
      </View>
      <View style={styles.mParent}>
        <Text style={[styles.m, styles.mTypo]}>M</Text>
        <Text style={[styles.t, styles.mTypo]}>T</Text>
        <Text style={[styles.w, styles.mTypo]}>W</Text>
        <Text style={[styles.t1, styles.mTypo]}>T</Text>
        <Text style={[styles.f, styles.mTypo]}>F</Text>
        <Text style={[styles.s, styles.mTypo]}>S</Text>
        <Text style={[styles.s1, styles.mTypo]}>S</Text>
      </View>
      <Image
        style={styles.createPostTimeChild}
        resizeMode="cover"
        source={require("../assets/vector-1507.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  basicInputPosition: {
    left: 16,
    position: "absolute",
  },
  midtermTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    position: "absolute",
  },
  june2023Typo: {
    height: 21,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    height: 124,
    width: 345,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    position: "absolute",
  },
  mTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.silver,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    position: "absolute",
  },
  inputText: {
    top: 10,
    color: Color.neutral300,
    alignItems: "center",
    width: 90,
    height: 15,
    lineHeight: 24,
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    display: "none",
    left: 16,
  },
  basicInput: {
    top: 140,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral100,
    width: 357,
    height: 35,
    display: "none",
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
    borderRadius: Border.br_81xl,
    width: 64,
    height: 64,
  },
  iphone141: {
    top: 8,
    backgroundColor: Color.colorsWhite100,
    width: 390,
    left: 0,
    height: 812,
  },
  whenIsThe: {
    top: 93,
    left: 13,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.darkslategray_100,
    textAlign: "left",
    lineHeight: 24,
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
    color: Color.peru,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  iconArrowBackOutlineIconParent: {
    top: 27,
    left: 7,
    width: 362,
    height: 52,
  },
  june2023: {
    width: 95,
    top: 0,
    height: 21,
    fontSize: FontSize.size_xl,
    left: 0,
  },
  july2023: {
    top: 184,
    width: 88,
    left: 8,
  },
  august2023: {
    top: 374,
    width: 115,
    left: 6,
  },
  groupChild: {
    top: 130,
    left: 281,
    width: 30,
    height: 30,
    position: "absolute",
  },
  text2: {
    color: Color.gray_100,
  },
  text3: {
    color: Color.silver,
  },
  text5: {
    color: Color.colorsWhite100,
  },
  text1: {
    top: 21,
    left: 8,
  },
  text13: {
    color: Color.colorsBlack100,
  },
  text11: {
    top: 210,
    left: 6,
  },
  text15: {
    top: 416,
    color: Color.gray_100,
    left: 6,
  },
  june2023Parent: {
    top: 164,
    width: 353,
    height: 540,
  },
  m: {
    color: Color.silver,
    left: 0,
  },
  t: {
    left: 49,
    color: Color.silver,
  },
  w: {
    left: 102,
    color: Color.silver,
  },
  t1: {
    left: 153,
    color: Color.silver,
  },
  f: {
    left: 198,
    color: Color.silver,
  },
  s: {
    left: 250,
    color: Color.silver,
  },
  s1: {
    left: 296,
    color: Color.silver,
  },
  mParent: {
    top: 131,
    left: 35,
    width: 306,
    height: 19,
    position: "absolute",
  },
  createPostTimeChild: {
    top: 157,
    left: 2,
    width: 382,
    height: 1,
    position: "absolute",
  },
  createPostTime: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default CreatePostTime;
