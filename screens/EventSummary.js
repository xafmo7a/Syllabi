import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const EventSummary = () => {
  return (
    <View style={styles.eventSummary}>
      <Image
        style={styles.eventSummaryChild}
        resizeMode="cover"
        source={require("../assets/frame-49.png")}
      />
      <Text style={[styles.yourRoomWas, styles.yourRoomWasFlexBox]}>
        Your room was Successfully published
      </Text>
      <Text style={[styles.studentsCanNow, styles.yourRoomWasFlexBox]}>
        Students can now see and join your room.
      </Text>
      <View style={[styles.component13, styles.componentFlexBox]}>
        <Text style={[styles.viewRoom, styles.viewRoomTypo]}>View room</Text>
      </View>
      <View style={[styles.component14, styles.componentFlexBox]}>
        <Text
          style={[styles.backHome, styles.viewRoomTypo]}
        >{`Back home `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourRoomWasFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  componentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: Padding.p_5xs,
    flexDirection: "row",
    height: 56,
    width: 350,
    left: 20,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  viewRoomTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  eventSummaryChild: {
    top: 207,
    left: 107,
    width: 167,
    height: 167,
    borderRadius: Border.br_81xl,
    position: "absolute",
    overflow: "hidden",
  },
  yourRoomWas: {
    top: 412,
    left: 34,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    color: "#c4e9d5",
    width: 313,
  },
  studentsCanNow: {
    top: 486,
    left: -4,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    lineHeight: 22,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslategray_100,
    width: 390,
  },
  viewRoom: {
    color: Color.colorsWhite100,
  },
  component13: {
    top: 626,
    backgroundColor: Color.orange,
  },
  backHome: {
    color: Color.orange,
  },
  component14: {
    top: 700,
    borderStyle: "solid",
    borderColor: "#ffbc04",
    borderWidth: 1,
  },
  eventSummary: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EventSummary;
