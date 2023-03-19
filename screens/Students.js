import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Students = () => {
  return (
    <View style={styles.students}>
      <View style={[styles.iphone141, styles.iconPosition]}>
        <View style={[styles.basicInput, styles.inputPosition]}>
          <Text
            style={[
              styles.inputText,
              styles.textFlexBox,
              styles.midtermTypo,
              styles.inputPosition,
            ]}
          />
        </View>
        <Text
          style={[
            styles.egMidtermComputerContainer,
            styles.textFlexBox,
            styles.midtermTypo,
          ]}
        >
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
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.studentsChild, styles.studentsLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-66.png")}
      />
      <Text
        style={[styles.howManyStudents, styles.textFlexBox]}
      >{`How many students per
 session?`}</Text>
      <View
        style={[styles.iconArrowBackOutlineIconParent, styles.iconPosition]}
      >
        <Image
          style={[styles.iconArrowBackOutlineIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline-icon.png")}
        />
        <Text
          style={[
            styles.midtermClassName,
            styles.textFlexBox,
            styles.midtermTypo,
          ]}
        >{`Midterm: class name
30 June`}</Text>
      </View>
      <View
        style={[styles.iconArrowBackOutlineIconParent, styles.iconPosition]}
      >
        <Image
          style={[styles.iconArrowBackOutlineIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline-icon.png")}
        />
        <Text
          style={[
            styles.midtermClassName,
            styles.textFlexBox,
            styles.midtermTypo,
          ]}
        >{`Midterm: class name
30 June`}</Text>
      </View>
      <Text style={[styles.text1, styles.textFlexBox]}>0</Text>
      <Image
        style={[styles.studentsItem, styles.studentsLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-67.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  inputPosition: {
    left: 16,
    display: "none",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  midtermTypo: {
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    textAlign: "left",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  studentsLayout: {
    bottom: "68.35%",
    top: "26.48%",
    width: "10.77%",
    height: "5.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  inputText: {
    top: 10,
    color: Color.neutral300,
    alignItems: "center",
    width: 90,
    height: 15,
    lineHeight: 24,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    display: "none",
  },
  basicInput: {
    top: 140,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral100,
    width: 357,
    height: 35,
    display: "none",
    position: "absolute",
    left: 16,
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
    top: 0,
    left: 0,
    backgroundColor: Color.colorsWhite100,
    width: 390,
    height: 812,
  },
  vectorIcon: {
    height: "1.85%",
    width: "3.79%",
    top: "28.14%",
    right: "16.92%",
    bottom: "70.01%",
    left: "79.29%",
  },
  vectorIcon1: {
    height: "0.25%",
    width: "3.59%",
    top: "28.94%",
    right: "83.21%",
    bottom: "70.81%",
    left: "13.21%",
  },
  studentsChild: {
    right: "79.49%",
    left: "9.74%",
  },
  howManyStudents: {
    top: 121,
    left: 28,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.darkslategray_100,
    lineHeight: 24,
  },
  iconArrowBackOutlineIcon: {
    height: "67.31%",
    width: "9.67%",
    top: "13.46%",
    right: "88.4%",
    bottom: "19.23%",
    left: "1.93%",
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
  text1: {
    top: 212,
    left: 182,
    fontSize: 40,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.darkseagreen,
  },
  studentsItem: {
    right: "13.33%",
    left: "75.9%",
  },
  students: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Students;
