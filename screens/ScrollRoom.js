import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ScrollRoom = () => {
  return (
    <View style={styles.scrollRoom}>
      <View style={[styles.elementsCardParent, styles.parentPosition]}>
        <View style={[styles.elementsCard, styles.elementsCardLayout]}>
          <View style={styles.elementsBg}>
            <View style={styles.color} />
          </View>
          <Image
            style={styles.usersIcon}
            resizeMode="cover"
            source={require("../assets/users.png")}
          />
          <View style={[styles.groupParent, styles.parentPosition]}>
            <View style={styles.group}>
              <Text style={[styles.text, styles.textTypo]}>
                Hello! In this room we will discuss the material related to what
                we lately covered in computer programming class!
              </Text>
              <Text style={styles.title}>Computer Programming</Text>
            </View>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image.png")}
            />
          </View>
        </View>
        <View style={[styles.elementsCard1, styles.elementsCardLayout]}>
          <View style={styles.elementsBg}>
            <View style={styles.color} />
          </View>
          <Image
            style={styles.usersIcon}
            resizeMode="cover"
            source={require("../assets/users.png")}
          />
          <View style={[styles.groupParent, styles.parentPosition]}>
            <View style={styles.group}>
              <Text style={[styles.text, styles.textTypo]}>
                We will be discussing time value of money for tomorrow! You can
                join if you want to learn! It will be a 2 hours session!
              </Text>
              <Text style={styles.title}>Principles of Finance</Text>
            </View>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            />
          </View>
        </View>
        <View style={[styles.elementsTags, styles.elementsLayout]}>
          <View style={[styles.group2, styles.group2Position]}>
            <View style={[styles.color2, styles.group2Position]} />
            <Text style={styles.text2}>Join!</Text>
          </View>
        </View>
        <View style={[styles.elementsTags1, styles.elementsLayout]}>
          <View style={[styles.group2, styles.group2Position]}>
            <View style={[styles.color2, styles.group2Position]} />
            <Text style={styles.text2}>Join!</Text>
          </View>
        </View>
      </View>
      <View style={[styles.elementsCard2, styles.elementsCardLayout]}>
        <View style={styles.elementsBg}>
          <View style={styles.color} />
        </View>
        <Image
          style={styles.usersIcon}
          resizeMode="cover"
          source={require("../assets/users.png")}
        />
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={styles.group}>
            <Text
              style={[styles.text, styles.textTypo]}
            >{`In this room, we will discussing the material of AI class. Feel free join!  `}</Text>
            <Text style={styles.title}>Artificial Intelligence</Text>
          </View>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image2.png")}
          />
        </View>
      </View>
      <View style={[styles.elementsTags2, styles.elementsLayout]}>
        <View style={[styles.group2, styles.group2Position]}>
          <View style={[styles.color2, styles.group2Position]} />
          <Text style={styles.text2}>Join!</Text>
        </View>
      </View>
      <View style={styles.scrollRoomChild} />
      <View style={[styles.elementsCard3, styles.elementsCardLayout]}>
        <View style={styles.elementsBg}>
          <View style={styles.color} />
        </View>
        <Image
          style={styles.usersIcon}
          resizeMode="cover"
          source={require("../assets/users.png")}
        />
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={styles.group}>
            <Text style={[styles.text, styles.textTypo]}>
              We will be discussing theories of IR for next Saturday! You can
              join if you want to learn! It will be a 2 hours session!
            </Text>
            <Text style={styles.title}>Theories of IR</Text>
          </View>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image3.png")}
          />
        </View>
      </View>
      <View style={[styles.elementsTags3, styles.elementsLayout]}>
        <View style={[styles.group2, styles.group2Position]}>
          <View style={[styles.color2, styles.group2Position]} />
          <Text style={styles.text2}>Join!</Text>
        </View>
      </View>
      <View style={[styles.sandwich, styles.sandwichLayout]}>
        <View style={[styles.sandwich1, styles.sandwichLayout]}>
          <Text style={[styles.explore, styles.exploreTypo, styles.textTypo]}>
            Explore
          </Text>
          <Text style={[styles.explore1, styles.exploreTypo]}>Explore</Text>
        </View>
        <View style={styles.iconUserCircleIconParent}>
          <Image
            style={[
              styles.iconUserCircleIcon,
              styles.iconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/-icon-user-circle-icon3.png")}
          />
          <Image
            style={[styles.iconBookIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-book-icon1.png")}
          />
          <Image
            style={[styles.iconPlusCircle, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-plus-circle2.png")}
          />
          <Text style={[styles.material, styles.profileTypo]}>Material</Text>
          <Text style={[styles.create, styles.createTypo]}>Create</Text>
          <Text style={[styles.rewards, styles.createTypo]}>Rewards</Text>
          <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
          <Image
            style={[styles.groupIcon, styles.iconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
        </View>
        <View style={styles.iconSearchIcon}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 326,
    top: 0,
    position: "absolute",
  },
  elementsCardLayout: {
    height: 345,
    width: 327,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    opacity: 0.4,
    fontSize: FontSize.size_xs,
  },
  elementsLayout: {
    height: 24,
    width: 50,
    position: "absolute",
  },
  group2Position: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  sandwichLayout: {
    width: 375,
    backgroundColor: Color.colorsWhite100,
    position: "absolute",
    overflow: "hidden",
  },
  exploreTypo: {
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.darkslategray_100,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    opacity: 0.4,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "50%",
    height: "50%",
    maxHeight: "100%",
    top: "0%",
  },
  profileTypo: {
    top: 28,
    height: 19,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.darkslategray_100,
    opacity: 0.4,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  createTypo: {
    width: 60,
    top: 28,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.darkslategray_100,
    opacity: 0.4,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  color: {
    height: "100.29%",
    width: "100.31%",
    top: "-0.15%",
    right: "-0.15%",
    bottom: "-0.15%",
    left: "-0.15%",
    borderRadius: Border.br_2xs,
    borderColor: "#b8844c",
    backgroundColor: Color.colorsWhite100,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  elementsBg: {
    height: "99.71%",
    width: "99.69%",
    right: "0.31%",
    bottom: "0.29%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  usersIcon: {
    bottom: 21,
    width: 86,
    height: 40,
    left: 20,
    position: "absolute",
  },
  text: {
    top: "36.84%",
    lineHeight: 20,
    color: Color.colorsBlack100,
    textAlign: "left",
    fontFamily: FontFamily.h4,
    opacity: 0.4,
    fontSize: FontSize.size_xs,
    width: 269,
    left: 0,
    position: "absolute",
  },
  title: {
    marginTop: -47.5,
    fontSize: FontSize.h2_size,
    fontWeight: "500",
    fontFamily: FontFamily.h2,
    color: Color.darkslategray_100,
    textAlign: "left",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  group: {
    marginTop: 42.5,
    height: 95,
    width: 269,
    top: "50%",
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  imageIcon: {
    right: 0,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 160,
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    height: 275,
    left: 0,
    overflow: "hidden",
  },
  elementsCard: {
    left: 0,
    top: 0,
    height: 345,
    width: 327,
    borderColor: "#fff",
  },
  elementsCard1: {
    top: 711,
    left: 0,
  },
  color2: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.orange,
  },
  text2: {
    marginTop: -7,
    left: "26.88%",
    fontSize: FontSize.h5_size,
    lineHeight: 15,
    color: Color.colorsWhite100,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    top: "50%",
    position: "absolute",
  },
  group2: {
    overflow: "hidden",
  },
  elementsTags: {
    top: 300,
    left: 245,
  },
  elementsTags1: {
    top: 1012,
    left: 239,
  },
  elementsCardParent: {
    height: 1055,
    left: 25,
  },
  elementsCard2: {
    top: 354,
    left: 25,
  },
  elementsTags2: {
    top: 661,
    left: 270,
  },
  scrollRoomChild: {
    top: 539,
    left: 117,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  elementsCard3: {
    top: 1077,
    left: 25,
  },
  elementsTags3: {
    top: 1369,
    left: 263,
  },
  explore: {
    top: 32,
    left: 4,
    height: 19,
    width: 57,
    opacity: 0.4,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
  },
  explore1: {
    top: 6,
    left: 2,
    fontSize: FontSize.size_mini,
  },
  sandwich1: {
    top: 37,
    left: 9,
    height: 55,
  },
  iconUserCircleIcon: {
    width: "8.25%",
    right: "3.74%",
    left: "88.01%",
  },
  iconBookIcon: {
    height: "46.83%",
    width: "6.76%",
    top: "4.17%",
    right: "87.05%",
    bottom: "49%",
    left: "6.19%",
  },
  iconPlusCircle: {
    height: "52.08%",
    width: "8.59%",
    right: "57.56%",
    bottom: "47.92%",
    left: "33.85%",
    top: "0%",
    maxHeight: "100%",
  },
  material: {
    width: 57,
    left: 0,
  },
  create: {
    left: 82,
    height: 20,
  },
  rewards: {
    left: 164,
    height: 19,
  },
  profile: {
    left: 246,
    width: 45,
  },
  groupIcon: {
    width: "8.31%",
    right: "29.03%",
    left: "62.66%",
  },
  iconUserCircleIconParent: {
    height: "69.57%",
    width: "77.57%",
    top: "24.64%",
    right: "2.95%",
    bottom: "5.8%",
    left: "19.48%",
    position: "absolute",
  },
  vectorIcon: {
    width: 27,
    height: 27,
  },
  iconSearchIcon: {
    top: 16,
    left: 19,
    flexDirection: "row",
    position: "absolute",
  },
  sandwich: {
    top: 646,
    borderColor: "#d3d3d3",
    height: 69,
    borderWidth: 1,
    borderStyle: "solid",
    width: 375,
    left: 0,
  },
  scrollRoom: {
    flex: 1,
    height: 1638,
    overflow: "hidden",
    width: "100%",
  },
});

export default ScrollRoom;
