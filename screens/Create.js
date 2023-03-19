import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Create = () => {
  return (
    <View style={styles.create}>
      <View style={[styles.iphone141, styles.iconPosition]}>
        <View style={[styles.basicInput, styles.basicInputLayout]}>
          <Text style={[styles.inputText, styles.egHelloITypo]} />
        </View>
        <Text style={[styles.egMidtermComputerContainer, styles.egHelloITypo]}>
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
      <Text style={[styles.roomName, styles.roomTypo]}>Room name</Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/icon.png")}
      />
      <Text style={[styles.roomDescription, styles.roomTypo]}>
        Room description
      </Text>
      <Text
        style={[styles.choosePictureFrom, styles.roomTypo]}
      >{`Choose picture from the
 following`}</Text>
      <View
        style={[styles.egHelloIWantToReviseFoWrapper, styles.basicInputLayout]}
      >
        <Text
          style={[styles.egHelloI, styles.egHelloITypo]}
        >{`e.g Hello! I want to revise for my midterm in
computer science! I am looking for students to work with. Feel free to join!
`}</Text>
      </View>
      <View style={[styles.pictureSlide, styles.iconPosition]}>
        <Image
          style={[styles.imgIcon, styles.imgIconLayout]}
          resizeMode="cover"
          source={require("../assets/img.png")}
        />
        <Image
          style={[styles.imgIcon1, styles.imgIconLayout]}
          resizeMode="cover"
          source={require("../assets/img1.png")}
        />
        <Image
          style={[styles.imgIcon2, styles.imgIconLayout]}
          resizeMode="cover"
          source={require("../assets/img2.png")}
        />
        <Image
          style={[styles.imgIcon3, styles.imgIconLayout]}
          resizeMode="cover"
          source={require("../assets/img3.png")}
        />
        <Image
          style={[styles.imgIcon4, styles.imgIconLayout]}
          resizeMode="cover"
          source={require("../assets/img4.png")}
        />
        <Image
          style={[styles.imgIcon5, styles.imgIconLayout]}
          resizeMode="cover"
          source={require("../assets/img5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  basicInputLayout: {
    width: 357,
    backgroundColor: Color.neutral100,
    position: "absolute",
  },
  egHelloITypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    position: "absolute",
  },
  roomTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 23,
    textAlign: "left",
    position: "absolute",
  },
  imgIconLayout: {
    height: 100,
    width: 100,
    top: 4,
    position: "absolute",
  },
  inputText: {
    top: 10,
    lineHeight: 24,
    color: Color.neutral300,
    display: "none",
    alignItems: "center",
    width: 90,
    height: 15,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    left: 16,
  },
  basicInput: {
    top: 140,
    borderRadius: Border.br_5xs,
    height: 35,
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
  },
  iphone141Child: {
    top: 711,
    left: 293,
    borderRadius: Border.br_81xl,
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  iphone141: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorsWhite100,
    width: 390,
    overflow: "hidden",
    height: 812,
  },
  roomName: {
    top: 100,
  },
  icon: {
    height: "1.97%",
    width: "4.1%",
    top: "4.56%",
    right: "91.03%",
    bottom: "93.47%",
    left: "4.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  roomDescription: {
    top: 244,
  },
  choosePictureFrom: {
    top: 510,
  },
  egHelloI: {
    top: 15,
    left: 7,
    lineHeight: 23,
    width: 344,
    color: Color.darkgray_100,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  egHelloIWantToReviseFoWrapper: {
    top: 284,
    left: 12,
    borderRadius: 16,
    height: 158,
    overflow: "hidden",
  },
  imgIcon: {
    left: 20,
  },
  imgIcon1: {
    left: 152,
  },
  imgIcon2: {
    left: 284,
  },
  imgIcon3: {
    left: 416,
  },
  imgIcon4: {
    left: 680,
  },
  imgIcon5: {
    left: 548,
  },
  pictureSlide: {
    top: 585,
    left: -11,
    width: 850,
    height: 107,
    overflow: "hidden",
  },
  create: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Create;
