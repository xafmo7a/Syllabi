import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.iphone141, styles.widgetPosition]}>
        <View style={styles.basicInput}>
          <Text style={styles.inputText} />
        </View>
        <Text style={styles.egMidtermComputerContainer}>
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
      <Text style={[styles.stats, styles.statsTypo, styles.statsTypo1]}>
        Stats
      </Text>
      <View style={styles.sandwich}>
        <View style={styles.iconSearchIconParent}>
          <Image
            style={[styles.iconSearchIcon, styles.photoIconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-search-icon.png")}
          />
          <Image
            style={[styles.iconUserCircleIcon, styles.photoIconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-user-circle-icon.png")}
          />
          <Image
            style={[styles.iconBookIcon, styles.photoIconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-book-icon.png")}
          />
          <Image
            style={[styles.iconPlusCircle, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/-icon-plus-circle.png")}
          />
          <Text
            style={[styles.material, styles.rewardsTypo, styles.exploreLayout]}
          >
            Material
          </Text>
          <Text style={[styles.create, styles.createTypo, styles.statsTypo]}>
            Create
          </Text>
          <Text style={[styles.rewards, styles.rewardsTypo, styles.createTypo]}>
            Rewards
          </Text>
          <Text style={[styles.profile1, styles.rewardsTypo]}>Profile</Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
        <Text
          style={[styles.explore, styles.rewardsTypo, styles.exploreLayout]}
        >
          Explore
        </Text>
      </View>
      <View style={[styles.widget, styles.widgetPosition]}>
        <View style={styles.colorPosition}>
          <View style={[styles.color, styles.colorPosition]} />
        </View>
        <Image
          style={[styles.iconsBellOn, styles.iconsLayout]}
          resizeMode="cover"
          source={require("../assets/icons--bell--on.png")}
        />
        <Image
          style={[styles.iconsHeart, styles.iconsLayout]}
          resizeMode="cover"
          source={require("../assets/icons--heart.png")}
        />
        <Image
          style={[styles.iconsMessageCircle, styles.iconsLayout]}
          resizeMode="cover"
          source={require("../assets/icons--message--circle.png")}
        />
        <View style={styles.elementsButton}>
          <View style={[styles.color1, styles.colorPosition]} />
          <Text style={styles.text1}>Add to list</Text>
        </View>
        <View style={[styles.followers, styles.postsPosition]}>
          <Text style={[styles.text2, styles.textTypo, styles.textPosition1]}>
            {" "}
            5
          </Text>
          <Text style={[styles.followers1, styles.countriesTypo]}>Courses</Text>
        </View>
        <View style={[styles.posts, styles.postsPosition]}>
          <Text style={[styles.text3, styles.textTypo, styles.textPosition1]}>
            165
          </Text>
          <Text style={[styles.followers1, styles.countriesTypo]}>Posts</Text>
        </View>
        <Image
          style={styles.iconsMoreHorizontal}
          resizeMode="cover"
          source={require("../assets/icons--more--horizontal.png")}
        />
        <Text style={[styles.countries, styles.countriesTypo]}>
          Senior Student
        </Text>
        <Text style={[styles.name, styles.textTypo]}>Jack Peter</Text>
        <Image
          style={[styles.elementsUserPhoto, styles.photoIconLayout]}
          resizeMode="cover"
          source={require("../assets/elements--user--photo.png")}
        />
      </View>
      <Image
        style={[styles.profileChild, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-179.png")}
      />
      <Image
        style={[styles.photoIcon, styles.photoIconLayout]}
        resizeMode="cover"
        source={require("../assets/photo.png")}
      />
      <Text
        style={[styles.totalStatistics, styles.statsTypo, styles.statsTypo1]}
      >
        Total Statistics
      </Text>
      <View
        style={[
          styles.component14,
          styles.componentFlexBox,
          styles.componentLayout,
        ]}
      >
        <Text style={[styles.hoursLearnedLayout, styles.text4Typo]}>
          {" "}
          Finished Courses
        </Text>
        <Image
          style={[styles.component14Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-179.png")}
        />
        <View style={[styles.vectorParent, styles.vectorLayout]}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-180.png")}
          />
          <Text
            style={[styles.textLayout, styles.textPosition, styles.text4Typo]}
          >
            20
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.component20,
          styles.componentFlexBox,
          styles.componentLayout,
        ]}
      >
        <Text style={[styles.text5Typo, styles.hoursLearnedLayout]}>
          {" "}
          Hours Learned
        </Text>
        <Image
          style={[styles.component14Child, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-179.png")}
        />
        <View style={styles.vectorLayout}>
          <View
            style={[
              styles.vectorGroup,
              styles.framePosition,
              styles.vectorLayout,
            ]}
          >
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/rectangle-1801.png")}
            />
            <Text
              style={[styles.text5Typo, styles.textLayout, styles.textPosition]}
            >
              66
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.component19, styles.componentFlexBox]}>
        <Text style={styles.score93}>
          <Text style={styles.score}>Score:</Text> 93
        </Text>
      </View>
      <View
        style={[
          styles.component21,
          styles.componentFlexBox,
          styles.componentLayout,
        ]}
      >
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Text
          style={[styles.skillsUnlocked, styles.ml2, styles.text6Typo]}
        >{`  Skills Unlocked         `}</Text>
        <Image
          style={[styles.component14Child, styles.ml2, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-179.png")}
        />
        <View style={[styles.vectorParent, styles.ml2, styles.vectorLayout]}>
          <Image
            style={[styles.frameInner, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-1802.png")}
          />
          <Text style={[styles.text6, styles.text6Typo, styles.textLayout]}>
            {" "}
            7
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml2: {
    marginLeft: 2,
  },
  widgetPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  statsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  statsTypo1: {
    fontSize: FontSize.h2_size,
    textAlign: "center",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
  },
  photoIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconPosition: {
    bottom: "47.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rewardsTypo: {
    height: 19,
    color: Color.darkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  exploreLayout: {
    width: 57,
    height: 19,
    fontSize: FontSize.size_xs,
    opacity: 0.4,
  },
  createTypo: {
    fontSize: FontSize.size_xs,
    width: 60,
    opacity: 0.4,
  },
  colorPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconsLayout: {
    bottom: "10.56%",
    top: "82.78%",
    width: "7.36%",
    height: "6.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  postsPosition: {
    bottom: "31.11%",
    top: "55.28%",
    height: "13.61%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    top: "50%",
    fontSize: FontSize.h2_size,
    textAlign: "left",
    position: "absolute",
  },
  textPosition1: {
    marginTop: -25.11,
    fontWeight: "500",
    left: "0%",
  },
  countriesTypo: {
    fontFamily: FontFamily.h4,
    lineHeight: 20,
    fontSize: FontSize.h4_size,
    top: "50%",
    opacity: 0.4,
    color: Color.colorsBlack100,
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    width: 50,
    height: 32,
  },
  componentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    height: 56,
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  componentLayout: {
    width: 335,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    height: 56,
    left: 24,
  },
  text4Typo: {
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.darkslategray_100,
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 24,
  },
  vectorLayout: {
    height: 31,
    width: 50,
  },
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    left: 14,
    height: 23,
    width: 23,
    top: 4,
  },
  hoursLearnedLayout: {
    height: 28,
    width: 182,
  },
  textLayout: {
    height: 23,
    width: 23,
    top: 4,
    position: "absolute",
  },
  text6Typo: {
    color: Color.goldenrod,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 24,
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
    display: "none",
    height: 35,
    left: 16,
    position: "absolute",
  },
  egMidtermComputer: {
    color: Color.darkgray_100,
    letterSpacing: 0.2,
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
    fontFamily: FontFamily.bodyTextBaseFontNormal,
    display: "none",
    position: "absolute",
  },
  iphone141Child: {
    top: 711,
    left: 293,
    width: 64,
    height: 64,
    borderRadius: Border.br_81xl,
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  iphone141: {
    top: 2,
    overflow: "hidden",
    backgroundColor: Color.colorsWhite100,
    height: 812,
  },
  stats: {
    top: 373,
    left: 147,
    color: Color.colorsBlack100,
    display: "none",
  },
  iconSearchIcon: {
    width: "6.82%",
    top: "6.23%",
    right: "93.18%",
    bottom: "43.77%",
    left: "0%",
    height: "50%",
  },
  iconUserCircleIcon: {
    height: "56.25%",
    width: "7.67%",
    right: "2.24%",
    bottom: "43.75%",
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
    opacity: 0.4,
  },
  iconPlusCircle: {
    height: "52.08%",
    width: "7.1%",
    right: "47.57%",
    left: "45.32%",
    top: "0%",
  },
  material: {
    left: 61,
    top: 28,
  },
  create: {
    left: 143,
    height: 20,
    width: 60,
    color: Color.darkslategray_100,
    top: 28,
  },
  rewards: {
    top: 29,
    left: 227,
    width: 60,
  },
  profile1: {
    left: 307,
    width: 45,
    top: 28,
    fontSize: FontSize.size_mini,
    height: 19,
  },
  groupIcon: {
    width: "6.87%",
    top: "2.08%",
    right: "23.5%",
    left: "69.63%",
    opacity: 0.4,
    height: "50%",
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
    overflow: "hidden",
    backgroundColor: Color.colorsWhite100,
    position: "absolute",
  },
  color: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorsWhite100,
  },
  iconsBellOn: {
    right: "19.63%",
    left: "73.01%",
  },
  iconsHeart: {
    right: "33.13%",
    left: "59.51%",
  },
  iconsMessageCircle: {
    right: "46.63%",
    left: "46.01%",
  },
  color1: {
    borderRadius: Border.br_3xs,
  },
  text1: {
    marginTop: -8.5,
    left: "22.02%",
    color: Color.colorsWhite100,
    fontFamily: FontFamily.h4,
    lineHeight: 20,
    fontSize: FontSize.h4_size,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  elementsButton: {
    height: "11.11%",
    width: "30.67%",
    top: "80.56%",
    right: "60.12%",
    bottom: "8.33%",
    left: "9.2%",
    position: "absolute",
  },
  text2: {
    color: Color.orange,
  },
  followers1: {
    marginTop: 3.89,
    left: "0%",
  },
  followers: {
    width: "25.77%",
    right: "65.03%",
    left: "9.2%",
  },
  text3: {
    color: Color.darkslategray_100,
  },
  posts: {
    width: "15.95%",
    right: "36.81%",
    left: "47.24%",
  },
  iconsMoreHorizontal: {
    top: "9.17%",
    right: "9.2%",
    bottom: "84.17%",
    left: "83.44%",
    width: "7.36%",
    height: "6.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  countries: {
    marginTop: -20.5,
    left: "9.2%",
  },
  name: {
    marginTop: -49.5,
    left: "9.2%",
    color: Color.colorsBlack100,
  },
  elementsUserPhoto: {
    height: "25%",
    width: "27.61%",
    top: "8.33%",
    right: "63.19%",
    bottom: "66.67%",
    left: "9.2%",
    display: "none",
  },
  widget: {
    top: 26,
    height: 369,
  },
  profileChild: {
    top: 12,
    left: 249,
    height: 32,
    position: "absolute",
  },
  photoIcon: {
    height: "12.32%",
    width: "25.64%",
    top: "5.72%",
    right: "64.1%",
    bottom: "81.96%",
    left: "10.26%",
  },
  totalStatistics: {
    top: 341,
    left: 23,
    color: Color.colorsBlack100,
  },
  component14Child: {
    height: 32,
  },
  frameChild: {
    width: 60,
    height: 35,
  },
  vectorParent: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  component14: {
    top: 395,
  },
  text5Typo: {
    color: Color.peru,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 24,
  },
  frameItem: {
    top: 1,
    width: 60,
    opacity: 0.4,
    height: 35,
    left: 0,
    position: "absolute",
  },
  vectorGroup: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  component20: {
    top: 479,
  },
  score: {
    letterSpacing: "5%",
  },
  score93: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorsWhite100,
    textAlign: "center",
    lineHeight: 24,
  },
  component19: {
    top: 657,
    backgroundColor: Color.goldenrod,
    width: 328,
    paddingRight: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    height: 56,
    left: 24,
    borderRadius: Border.br_81xl,
  },
  groupIcon1: {
    width: 31,
    height: 32,
  },
  skillsUnlocked: {
    width: 158,
    height: 29,
  },
  frameInner: {
    width: 60,
    opacity: 0.4,
    height: 35,
  },
  text6: {
    height: 23,
    width: 23,
    top: 4,
    color: Color.goldenrod,
    left: 16,
  },
  component21: {
    top: 563,
    paddingLeft: 26,
    paddingRight: 38,
  },
  profile: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Profile;
