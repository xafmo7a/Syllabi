import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SuccessfullyJoined = () => {
  return (
    <View style={styles.successfullyJoined}>
      <Image
        style={[styles.successfullyJoinedChild, styles.component14Layout]}
        resizeMode="cover"
        source={require("../assets/frame-49.png")}
      />
      <Text style={styles.theCreatorCan}>
        The creator can now see that you joined the room.
      </Text>
      <View style={[styles.component14, styles.component14Layout]}>
        <Text style={styles.backHome}>{`Back home `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component14Layout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  successfullyJoinedChild: {
    top: 207,
    left: 107,
    width: 167,
    height: 167,
    overflow: "hidden",
  },
  theCreatorCan: {
    top: 483,
    left: 0,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    lineHeight: 22,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkslategray_100,
    width: 390,
    textAlign: "center",
    position: "absolute",
  },
  backHome: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.orange,
    textAlign: "center",
  },
  component14: {
    top: 720,
    left: 20,
    borderStyle: "solid",
    borderColor: "#ffbc04",
    borderWidth: 1,
    width: 350,
    height: 56,
    flexDirection: "row",
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
  successfullyJoined: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SuccessfullyJoined;
