import LottieView from "lottie-react-native";
import React, {FC, useState} from "react";
import {StyleSheet, ViewProps} from "react-native";

const LottieConfetti: FC<ViewProps> = () => {
  const [hideConfetti, onHideConfetti] = useState(false);
  const styles = makeStyle(hideConfetti);

  return (
    <>
      <LottieView
        source={require("./json/confetti.json")}
        onAnimationFinish={() => onHideConfetti(true)}
        loop={false}
        autoPlay
        style={styles.lottieViewContainer1}
      />
      <LottieView
        source={require("./json/confetti.json")}
        loop={false}
        autoPlay
        style={styles.lottieViewContainer2}
      />
    </>
  );
};

const makeStyle = (hideConfetti: boolean) => {
  const styles = StyleSheet.create({
    lottieViewContainer1: {
      position: "absolute",
      width: "100%",
      height: "110%",
      zIndex: 100,
      display: hideConfetti ? "none" : "flex",
    },
    lottieViewContainer2: {
      position: "absolute",
      width: "110%",
      height: "70%",
      zIndex: 101,
      display: hideConfetti ? "none" : "flex",
    },
  });
  return styles;
};

export {LottieConfetti};
