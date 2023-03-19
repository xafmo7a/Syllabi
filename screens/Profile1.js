import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile1 = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.sandwich}>
        <View style={styles.iconSearchIconParent}>
          <Image
            style={[
              styles.iconSearchIcon,
              styles.iconLayout1,
              styles.iconLayout2,
            ]}
            resizeMode="cover"
            source={require("../assets/-icon-search-icon.png")}
          />
          <Image
            style={[
              styles.iconUserCircleIcon,
              styles.iconLayout,
              styles.iconLayout2,
            ]}
            resizeMode="cover"
            source={require("../assets/-icon-user-circle-icon1.png")}
          />
          <Image
            style={[styles.iconBookIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-book-icon.png")}
          />
          <Image
            style={[styles.iconPlusCircle, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/-icon-plus-circle.png")}
          />
          <Text style={[styles.material, styles.exploreTypo]}>Material</Text>
          <Text style={[styles.create, styles.createTypo]}>Create</Text>
          <Text style={[styles.rewards, styles.createTypo]}>Rewards</Text>
          <Text style={styles.profile1}>Profile</Text>
          <Image
            style={[styles.groupIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
        </View>
        <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout2: {
    width: "6.82%",
    height: "50%",
  },
  iconLayout: {
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  exploreTypo: {
    width: 57,
    height: 19,
    textAlign: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    opacity: 0.4,
    position: "absolute",
  },
  createTypo: {
    width: 60,
    textAlign: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  iconSearchIcon: {
    top: "6.23%",
    right: "93.18%",
    bottom: "43.77%",
    left: "0%",
  },
  iconUserCircleIcon: {
    right: "3.09%",
    bottom: "50%",
    left: "90.09%",
    top: "0%",
  },
  iconBookIcon: {
    height: "46.83%",
    width: "5.59%",
    top: "4.17%",
    right: "71.95%",
    bottom: "49%",
    left: "22.46%",
  },
  iconPlusCircle: {
    height: "52.08%",
    width: "7.1%",
    right: "47.57%",
    bottom: "47.92%",
    left: "45.32%",
    top: "0%",
  },
  material: {
    left: 61,
    height: 19,
    top: 28,
    width: 57,
  },
  create: {
    left: 143,
    height: 20,
    fontSize: FontSize.size_xs,
    width: 60,
    top: 28,
    opacity: 0.4,
  },
  rewards: {
    top: 25,
    left: 229,
    fontSize: FontSize.size_mini,
    height: 19,
  },
  profile1: {
    left: 307,
    width: 45,
    height: 19,
    textAlign: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 28,
    opacity: 0.4,
    position: "absolute",
  },
  groupIcon: {
    height: "54.17%",
    width: "7.67%",
    right: "23.19%",
    bottom: "45.83%",
    left: "69.14%",
    top: "0%",
  },
  iconSearchIconParent: {
    height: "87.27%",
    width: "93.85%",
    top: "5.45%",
    right: "0.83%",
    bottom: "7.27%",
    left: "5.32%",
    position: "absolute",
  },
  explore: {
    top: 32,
    left: 4,
    height: 19,
  },
  sandwich: {
    top: 484,
    left: 110,
    backgroundColor: Color.colorsWhite100,
    width: 375,
    height: 55,
    overflow: "hidden",
    position: "absolute",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Profile1;
