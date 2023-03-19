import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateTick = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createTick}>
      <View
        style={[styles.iphone141, styles.sandwichPosition, styles.sandwichBg]}
      >
        <View style={styles.basicInput}>
          <Text style={[styles.inputText, styles.inputTextTypo]} />
        </View>
        <Text style={[styles.egMidtermComputerContainer, styles.inputTextTypo]}>
          <Text style={styles.egMidtermComputer}>
            e.g midterm: Computer Programming
          </Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Image
          style={[styles.iphone141Child, styles.sandwichPosition]}
          resizeMode="cover"
          source={require("../assets/frame-2160.png")}
        />
      </View>
      <View style={[styles.track, styles.fillPosition]} />
      <View style={[styles.fill, styles.fillPosition]} />
      <Image
        style={styles.handleIcon}
        resizeMode="cover"
        source={require("../assets/handle.png")}
      />
      <View
        style={[styles.sandwich, styles.sandwichPosition, styles.sandwichBg]}
      >
        <View style={styles.iconSearchIconParent}>
          <Image
            style={styles.iconSearchIcon}
            resizeMode="cover"
            source={require("../assets/-icon-search-icon.png")}
          />
          <Image
            style={[
              styles.iconUserCircleIcon,
              styles.iconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/-icon-user-circle-icon2.png")}
          />
          <Image
            style={[styles.iconBookIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-book-icon.png")}
          />
          <Image
            style={styles.iconPlusCircle}
            resizeMode="cover"
            source={require("../assets/-icon-plus-circle1.png")}
          />
          <Text
            style={[styles.material, styles.rewardsLayout, styles.exploreTypo]}
          >
            Material
          </Text>
          <Text style={[styles.create, styles.createTypo]}>Create</Text>
          <Text
            style={[styles.rewards, styles.createTypo, styles.rewardsLayout]}
          >
            Rewards
          </Text>
          <Text style={[styles.profile, styles.rewardsLayout]}>Profile</Text>
          <Image
            style={[styles.groupIcon, styles.iconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
        </View>
        <Text
          style={[styles.explore, styles.rewardsLayout, styles.exploreTypo]}
        >
          Explore
        </Text>
      </View>
      <View style={styles.firstCheckBox}>
        <View style={styles.dropDownIconParent}>
          <Pressable
            style={styles.dropDownIcon}
            onPress={() => navigation.navigate("Create")}
          >
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector3.png")}
            />
          </Pressable>
          <View style={[styles.privateWrapper, styles.ml14]}>
            <Text style={styles.private}>Private</Text>
          </View>
        </View>
        <View style={styles.checkThisBoxIfYouWantToWrapper}>
          <Text
            style={styles.checkThisBox}
          >{`Check this box if you want to make your
room private`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml14: {
    marginLeft: 14,
  },
  sandwichPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  sandwichBg: {
    backgroundColor: Color.colorsWhite100,
    overflow: "hidden",
  },
  inputTextTypo: {
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    textAlign: "left",
    position: "absolute",
  },
  fillPosition: {
    height: 10,
    left: 68,
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconPosition: {
    bottom: "50%",
    opacity: 0.4,
    top: "0%",
    height: "50%",
  },
  rewardsLayout: {
    height: 19,
    fontSize: FontSize.size_xs,
    opacity: 0.4,
  },
  exploreTypo: {
    width: 57,
    height: 19,
    textAlign: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  createTypo: {
    width: 60,
    textAlign: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    top: 28,
    position: "absolute",
  },
  inputText: {
    top: 10,
    lineHeight: 24,
    color: Color.neutral300,
    display: "none",
    width: 90,
    height: 15,
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.bodyTextBaseFontNormal_size,
    left: 16,
  },
  basicInput: {
    top: 140,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral100,
    width: 357,
    height: 35,
    left: 16,
    position: "absolute",
  },
  egMidtermComputer: {
    letterSpacing: 0.2,
    color: Color.darkgray_100,
    fontSize: FontSize.size_mini,
  },
  text: {
    color: Color.lightgray,
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  egMidtermComputerContainer: {
    top: 148,
    left: 25,
    textAlign: "left",
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
    width: 390,
    height: 812,
  },
  track: {
    top: 604,
    backgroundColor: "#d9d9d9",
    width: 240,
  },
  fill: {
    marginTop: 198,
    top: "50%",
    backgroundColor: "#437165",
    width: 1,
  },
  handleIcon: {
    top: 595,
    left: 48,
    width: 30,
    height: 30,
    position: "absolute",
  },
  iconSearchIcon: {
    top: "6.23%",
    right: "93.18%",
    bottom: "43.77%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "50%",
    width: "6.82%",
    overflow: "hidden",
    position: "absolute",
  },
  iconUserCircleIcon: {
    right: "3.09%",
    left: "90.09%",
    width: "6.82%",
    bottom: "50%",
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
    height: "58.33%",
    width: "7.96%",
    right: "46.72%",
    bottom: "41.67%",
    left: "45.32%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  material: {
    left: 61,
    top: 28,
    width: 57,
  },
  create: {
    left: 143,
    height: 20,
    fontSize: FontSize.size_mini,
  },
  rewards: {
    left: 225,
    height: 19,
    fontSize: FontSize.size_xs,
    width: 60,
  },
  profile: {
    left: 307,
    width: 45,
    textAlign: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    height: 19,
    fontSize: FontSize.size_xs,
    top: 28,
    position: "absolute",
  },
  groupIcon: {
    width: "6.87%",
    right: "23.99%",
    left: "69.14%",
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
  },
  sandwich: {
    top: 757,
    left: 7,
    width: 375,
    height: 55,
  },
  vectorIcon: {
    width: 12,
    height: 9,
  },
  dropDownIcon: {
    borderRadius: 4,
    backgroundColor: "#ea4c89",
    width: 18,
    height: 18,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  private: {
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: "#333",
    textAlign: "left",
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  privateWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 10,
    flexDirection: "row",
  },
  dropDownIconParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkThisBox: {
    lineHeight: 20,
    fontFamily: FontFamily.mulishRegular,
    color: "#757575",
    display: "flex",
    width: 296,
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.bodyTextBaseFontNormal_size,
  },
  checkThisBoxIfYouWantToWrapper: {
    paddingHorizontal: 31,
    paddingVertical: 0,
  },
  firstCheckBox: {
    top: 367,
    left: 16,
    position: "absolute",
  },
  createTick: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default CreateTick;
