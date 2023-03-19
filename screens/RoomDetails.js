import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const RoomDetails = () => {
  return (
    <View style={styles.roomDetails}>
      <Image
        style={[
          styles.cybersecurityComputerScienceIcon,
          styles.detailsPosition,
          styles.vectorParentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/cybersecuritycomputerscience-1.png")}
      />
      <View
        style={[
          styles.vectorParent,
          styles.detailsPosition,
          styles.vectorParentPosition,
        ]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-178.png")}
        />
        <Text style={styles.jackPeter}>Jack Peter</Text>
        <Image
          style={styles.elementsUser}
          resizeMode="cover"
          source={require("../assets/elements--user.png")}
        />
        <Image
          style={styles.iconArrowBackOutlineIcon}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline-icon.png")}
        />
      </View>
      <View style={[styles.details, styles.detailsPosition]}>
        <Image
          style={styles.icbaselineAccessTimeIcon}
          resizeMode="cover"
          source={require("../assets/icbaselineaccesstime.png")}
        />
        <Text style={styles.title}>Computer Programming</Text>
        <Text style={[styles.h35m, styles.h35mTypo]}>2h 35m</Text>
        <Text style={[styles.title1, styles.titleTypo]}>Room Description</Text>
        <Text style={[styles.text, styles.h35mTypo]}>
          Hello! In this room we will discuss the material related to what we
          lately covered in computer programming class! We will be meeting in an
          active learning space where we can discuss the material at ease. Feel
          free to join if you are interested
        </Text>
        <Text style={[styles.title2, styles.titleTypo]}>
          Additional Comment
        </Text>
        <View style={styles.basicInput}>
          <Text
            style={[
              styles.inputText,
              styles.inputTextFlexBox,
              styles.inputTextTypo,
            ]}
          />
        </View>
        <Text
          style={[
            styles.writeAnyAdditional,
            styles.inputTextTypo,
            styles.h35mTypo,
          ]}
        >{`Write any additional information you want the 
organizer to know about`}</Text>
        <View style={styles.detailsChild} />
      </View>
      <View style={[styles.component13, styles.inputTextFlexBox]}>
        <Text style={styles.join}>Join!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  vectorParentPosition: {
    top: 0,
    width: 390,
  },
  h35mTypo: {
    fontSize: FontSize.h4_size,
    position: "absolute",
  },
  titleTypo: {
    height: 25,
    width: 250,
    letterSpacing: 0.2,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    fontSize: FontSize.h2_size,
    left: 17,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  inputTextFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  inputTextTypo: {
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    textAlign: "left",
  },
  cybersecurityComputerScienceIcon: {
    borderRadius: Border.br_3xs,
    height: 368,
  },
  frameChild: {
    top: 235,
    left: 27,
    borderRadius: Border.br_xl,
    width: 134,
    height: 38,
    position: "absolute",
  },
  jackPeter: {
    top: 245,
    left: 71,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemibold,
    textAlign: "left",
    color: Color.colorsBlack100,
    letterSpacing: 1,
    position: "absolute",
  },
  elementsUser: {
    bottom: 13,
    left: 34,
    width: 30,
    height: 30,
    position: "absolute",
  },
  iconArrowBackOutlineIcon: {
    height: "12.41%",
    width: "8.97%",
    top: "2.84%",
    right: "88.72%",
    bottom: "84.75%",
    left: "2.31%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: 282,
    overflow: "hidden",
  },
  icbaselineAccessTimeIcon: {
    top: 44,
    left: 26,
    width: 20,
    height: 20,
    position: "absolute",
  },
  title: {
    marginTop: -216.5,
    width: 280,
    height: 26,
    color: Color.darkslategray_100,
    fontSize: FontSize.h2_size,
    top: "50%",
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    left: 17,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  h35m: {
    top: 46,
    left: 53,
    color: Color.peru,
    fontFamily: FontFamily.h2,
    fontSize: FontSize.h4_size,
    fontWeight: "500",
    textAlign: "left",
  },
  title1: {
    marginTop: -126.5,
  },
  text: {
    height: "22.9%",
    top: "30.16%",
    lineHeight: 20,
    fontFamily: FontFamily.h4,
    width: 328,
    opacity: 0.4,
    left: 17,
    fontSize: FontSize.h4_size,
    textAlign: "left",
    color: Color.colorsBlack100,
    letterSpacing: 1,
  },
  title2: {
    marginTop: 63.5,
  },
  inputText: {
    top: 10,
    left: 16,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    color: Color.neutral300,
    display: "none",
    width: 90,
    height: 45,
    lineHeight: 24,
  },
  basicInput: {
    top: 325,
    left: 13,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral100,
    width: 351,
    height: 65,
    position: "absolute",
  },
  writeAnyAdditional: {
    top: 334,
    left: 31,
    letterSpacing: 0.1,
    color: Color.darkgray_100,
  },
  detailsChild: {
    top: 422,
    width: 385,
    height: 91,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  details: {
    top: 298,
    height: 441,
    overflow: "hidden",
  },
  join: {
    fontSize: FontSize.size_lg,
    letterSpacing: 1.8,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorsWhite100,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "500",
  },
  component13: {
    top: 725,
    left: 21,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.orange,
    width: 330,
    height: 56,
    flexDirection: "row",
    paddingRight: Padding.p_5xs,
    justifyContent: "center",
  },
  roomDetails: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default RoomDetails;
