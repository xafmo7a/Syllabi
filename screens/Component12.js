import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Component12 = () => {
  return (
    <View style={styles.component12}>
      <Text style={styles.publish}>{`Publish `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  publish: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorsWhite100,
    textAlign: "center",
  },
  component12: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    height: 56,
    flexDirection: "row",
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Component12;
