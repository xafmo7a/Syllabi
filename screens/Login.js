import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.loginButton}>
        <View style={styles.loginButtonChild} />
        <Text style={styles.login1}>Login</Text>
      </View>
      <View
        style={[
          styles.enterYourPasswordInput,
          styles.enterLayout,
          styles.enterPosition,
        ]}
      >
        <View
          style={[
            styles.enterYourPasswordInputChild,
            styles.enterLayout,
            styles.image1IconPosition,
          ]}
        />
        <Image
          style={styles.fluenteye20FilledIcon}
          resizeMode="cover"
          source={require("../assets/fluenteye20filled.png")}
        />
        <Text style={[styles.enterYourPassword, styles.welcomeBackFlexBox]}>
          Enter your password
        </Text>
      </View>
      <View
        style={[
          styles.enterYourPasswordInput1,
          styles.enterLayout,
          styles.enterPosition,
        ]}
      >
        <View
          style={[
            styles.enterYourPasswordInputChild,
            styles.enterLayout,
            styles.image1IconPosition,
          ]}
        />
        <Text style={[styles.enterYourPassword, styles.welcomeBackFlexBox]}>
          Enter your email
        </Text>
      </View>
      <View style={styles.text}>
        <Text
          style={[
            styles.welcomeBack,
            styles.welcomeBackFlexBox,
            styles.image1IconPosition,
          ]}
        >{`Welcome back! `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    left: 0,
    top: 0,
  },
  enterLayout: {
    height: 56,
    width: 331,
    position: "absolute",
  },
  enterPosition: {
    left: 22,
    width: 331,
  },
  welcomeBackFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  image1Icon: {
    width: 400,
    height: 403,
    position: "absolute",
  },
  loginButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.darkslategray_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  login1: {
    top: 19,
    left: 148,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemibold,
    color: Color.colorsWhite100,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  loginButton: {
    height: "6.9%",
    width: "88.27%",
    top: "79.31%",
    right: "5.87%",
    bottom: "13.79%",
    left: "5.87%",
    position: "absolute",
  },
  enterYourPasswordInputChild: {
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    borderColor: "#e8ecf4",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
  },
  fluenteye20FilledIcon: {
    top: 17,
    left: 293,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  enterYourPassword: {
    top: 18,
    left: 18,
    lineHeight: 19,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.gray,
    fontSize: FontSize.size_mini,
  },
  enterYourPasswordInput: {
    top: 547,
  },
  enterYourPasswordInput1: {
    top: 479,
  },
  welcomeBack: {
    fontSize: 30,
    letterSpacing: 1.5,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.darkslategray_100,
  },
  text: {
    top: 403,
    right: 75,
    left: 76,
    height: 39,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorsWhite100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
