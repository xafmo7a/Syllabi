import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Statistics = () => {
  return (
    <View style={styles.statistics}>
      <View style={styles.colorParent}>
        <Image
          style={[
            styles.colorIconPosition4,
            styles.colorIconLayout1,
            styles.colorIconLayout2,
            styles.colorIconPosition5,
            styles.colorIconPosition6,
            styles.colorIconPosition7,
          ]}
          resizeMode="cover"
          source={require("../assets/color.png")}
        />
        <Image
          style={[
            styles.colorIcon1,
            styles.colorIconLayout1,
            styles.colorIconLayout2,
            styles.colorIconPosition5,
          ]}
          resizeMode="cover"
          source={require("../assets/color1.png")}
        />
        <Image
          style={[
            styles.colorIcon2,
            styles.colorIconPosition4,
            styles.colorIconLayout1,
            styles.colorIconLayout2,
            styles.colorIconPosition6,
          ]}
          resizeMode="cover"
          source={require("../assets/color.png")}
        />
        <Image
          style={[
            styles.colorIconPosition3,
            styles.colorIconPosition4,
            styles.colorIconPosition6,
            styles.colorIconPosition7,
          ]}
          resizeMode="cover"
          source={require("../assets/color.png")}
        />
        <Image
          style={[styles.colorIcon4, styles.colorIconPosition3]}
          resizeMode="cover"
          source={require("../assets/color2.png")}
        />
        <Image
          style={[
            styles.colorIconPosition2,
            styles.colorIconPosition4,
            styles.colorIconPosition6,
            styles.colorIconPosition7,
          ]}
          resizeMode="cover"
          source={require("../assets/color.png")}
        />
        <Image
          style={[styles.colorIcon6, styles.colorIconPosition2]}
          resizeMode="cover"
          source={require("../assets/color3.png")}
        />
        <Image
          style={[
            styles.colorIcon7,
            styles.colorIconLayout,
            styles.colorIconPosition4,
          ]}
          resizeMode="cover"
          source={require("../assets/color.png")}
        />
        <Image
          style={[styles.colorIcon8, styles.colorIconLayout]}
          resizeMode="cover"
          source={require("../assets/color4.png")}
        />
        <Image
          style={[
            styles.colorIconPosition1,
            styles.colorIconPosition4,
            styles.colorIconPosition6,
            styles.colorIconPosition7,
          ]}
          resizeMode="cover"
          source={require("../assets/color.png")}
        />
        <Image
          style={[styles.colorIcon10, styles.colorIconPosition1]}
          resizeMode="cover"
          source={require("../assets/color5.png")}
        />
        <Image
          style={[
            styles.colorIconPosition,
            styles.colorIconPosition4,
            styles.colorIconPosition6,
            styles.colorIconPosition7,
          ]}
          resizeMode="cover"
          source={require("../assets/color6.png")}
        />
        <Image
          style={[styles.colorIcon12, styles.colorIconPosition]}
          resizeMode="cover"
          source={require("../assets/color7.png")}
        />
        <Text style={styles.timeSpent}>TIME SPENT</Text>
        <Image
          style={[styles.frameChild, styles.colorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-181.png")}
        />
        <Text style={[styles.hours, styles.hoursClr, styles.hoursTypo]}>
          20.7 hours
        </Text>
        <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
        <Text style={[styles.sun, styles.monTypo]}>Sun</Text>
        <Text style={[styles.thu, styles.monTypo]}>Thu</Text>
        <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
        <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
        <Text style={[styles.fri, styles.monTypo]}>Fri</Text>
        <Text style={[styles.sat, styles.monTypo]}>Sat</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.colorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.thisWeek, styles.thisWeekTypo]}>This Week</Text>
      <Text style={[styles.myPerformance, styles.thisWeekTypo]}>
        My Performance
      </Text>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Image
            style={styles.iconBook}
            resizeMode="cover"
            source={require("../assets/-icon-book.png")}
          />
          <Text
            style={[styles.timeSpent1, styles.timeSpent1Clr, styles.hoursTypo]}
          >
            TIME SPENT
          </Text>
          <Image
            style={[
              styles.iconArrowIosForwardIcon,
              styles.iconPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/-icon-arrow-ios-forward-icon.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Image
            style={[styles.iconBarChart, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/-icon-bar-chart.png")}
          />
          <Text
            style={[styles.averageDay, styles.hours1Typo, styles.timeSpent1Clr]}
          >
            AVERAGE DAY
          </Text>
          <Text style={[styles.hours1, styles.hours1Typo, styles.hoursClr]}>
            2.9 hours
          </Text>
          <Image
            style={[
              styles.iconArrowIosForwardIcon1,
              styles.iconLayout,
              styles.colorIconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/-icon-arrow-ios-forward-icon.png")}
          />
        </View>
        <Text style={[styles.hours2, styles.hoursClr, styles.hoursTypo]}>
          20.7 hours
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  colorIconLayout2: {
    borderRadius: Border.br_52xl_5,
    width: "5.65%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "16.84%",
  },
  colorIconPosition5: {
    left: "8.76%",
    right: "85.59%",
    borderRadius: Border.br_52xl_5,
    width: "5.65%",
  },
  colorIconPosition6: {
    opacity: 0.3,
    top: "34.04%",
    height: "49.12%",
  },
  colorIconPosition7: {
    opacity: 0.3,
    top: "34.04%",
    height: "49.12%",
  },
  colorIconPosition4: {
    opacity: 0.3,
    top: "34.04%",
    height: "49.12%",
  },
  colorIconPosition3: {
    left: "70.34%",
    right: "24.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_52xl_5,
    bottom: "16.84%",
    width: "5.65%",
    position: "absolute",
    overflow: "hidden",
  },
  colorIconPosition2: {
    left: "57.34%",
    right: "37.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_52xl_5,
    bottom: "16.84%",
    width: "5.65%",
    position: "absolute",
    overflow: "hidden",
  },
  colorIconLayout: {
    left: "44.35%",
    right: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_52xl_5,
    width: "5.65%",
    position: "absolute",
    overflow: "hidden",
  },
  colorIconPosition1: {
    left: "33.05%",
    right: "61.3%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_52xl_5,
    bottom: "16.84%",
    width: "5.65%",
    position: "absolute",
    overflow: "hidden",
  },
  colorIconPosition: {
    left: "20.9%",
    right: "73.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_52xl_5,
    bottom: "16.84%",
    width: "5.65%",
    position: "absolute",
    overflow: "hidden",
  },
  hoursClr: {
    color: Color.colorsBlack100,
    fontSize: FontSize.size_lgi,
    letterSpacing: 0.2,
  },
  hoursTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    position: "absolute",
  },
  monTypo: {
    color: Color.darkgray_200,
    fontSize: FontSize.size_mini,
    top: "87.72%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    position: "absolute",
  },
  thisWeekTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  rectangleLayout: {
    height: 105,
    width: 326,
    left: 12,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    opacity: 0.4,
    height: 80,
    width: 86,
    borderRadius: Border.br_mini,
    left: 13,
    top: 11,
    position: "absolute",
  },
  timeSpent1Clr: {
    letterSpacing: -0.1,
    opacity: 0.9,
    color: Color.gray_200,
    fontSize: FontSize.h4_size,
  },
  iconPosition: {
    top: "37.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: "28.57%",
    width: "9.2%",
  },
  hours1Typo: {
    left: "38.34%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    position: "absolute",
  },
  colorIcon1: {
    height: "25.26%",
    top: "57.89%",
  },
  colorIcon2: {
    right: "10.17%",
    left: "84.18%",
    borderRadius: Border.br_52xl_5,
    width: "5.65%",
    opacity: 0.3,
    top: "34.04%",
    height: "49.12%",
  },
  colorIcon4: {
    height: "28.42%",
    top: "54.74%",
  },
  colorIcon6: {
    height: "17.19%",
    top: "65.96%",
  },
  colorIcon7: {
    bottom: "16.84%",
    left: "44.35%",
    right: "50%",
    opacity: 0.3,
    top: "34.04%",
    height: "49.12%",
  },
  colorIcon8: {
    height: "29.12%",
    bottom: "16.14%",
    top: "54.74%",
  },
  colorIcon10: {
    height: "20%",
    top: "63.16%",
  },
  colorIcon12: {
    height: "30.88%",
    top: "52.28%",
  },
  timeSpent: {
    top: "4.91%",
    left: "6.21%",
    letterSpacing: -0.3,
    opacity: 0.9,
    color: Color.gray_200,
    fontSize: FontSize.h4_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    position: "absolute",
  },
  frameChild: {
    height: "35.09%",
    width: "28.25%",
    top: "-8.07%",
    right: "62.71%",
    bottom: "72.98%",
    left: "9.04%",
  },
  hours: {
    top: "15.79%",
    left: "5.93%",
  },
  mon: {
    left: "6.78%",
    letterSpacing: 0.2,
    color: Color.darkgray_200,
    fontSize: FontSize.size_mini,
    top: "87.72%",
  },
  sun: {
    left: "83.05%",
  },
  thu: {
    left: "43.22%",
  },
  wed: {
    left: "30.79%",
  },
  tue: {
    left: "19.49%",
  },
  fri: {
    left: "57.91%",
  },
  sat: {
    left: "69.49%",
  },
  colorParent: {
    top: 122,
    left: 18,
    width: 354,
    height: 285,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.51%",
    width: "5.98%",
    top: "3.33%",
    right: "89.91%",
    bottom: "94.16%",
    left: "4.1%",
  },
  thisWeek: {
    top: 75,
    left: 28,
  },
  myPerformance: {
    top: 433,
    left: 33,
  },
  frameItem: {
    backgroundColor: Color.peru,
  },
  iconBook: {
    height: "32.65%",
    top: "32.38%",
    right: "78.22%",
    bottom: "34.97%",
    left: "12.58%",
    width: "9.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeSpent1: {
    top: "25.71%",
    left: "37.73%",
  },
  iconArrowIosForwardIcon: {
    right: "4.91%",
    bottom: "34.29%",
    left: "85.89%",
  },
  rectangleParent: {
    top: 37,
  },
  frameInner: {
    backgroundColor: Color.goldenrod,
  },
  iconBarChart: {
    height: "22.86%",
    width: "9.82%",
    right: "77.91%",
    bottom: "40%",
    left: "12.27%",
  },
  averageDay: {
    top: "20.95%",
  },
  hours1: {
    top: "48.57%",
  },
  iconArrowIosForwardIcon1: {
    top: "38.1%",
    right: "4.6%",
    bottom: "33.33%",
    left: "86.2%",
  },
  rectangleGroup: {
    top: 183,
  },
  hours2: {
    height: "7.43%",
    width: "28.49%",
    top: "27.86%",
    left: "38.46%",
    display: "flex",
    alignItems: "flex-end",
  },
  frameParent: {
    top: 445,
    left: 16,
    width: 351,
    height: 318,
    position: "absolute",
    overflow: "hidden",
  },
  statistics: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Statistics;
