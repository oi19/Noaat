import {isAndroid, isIos} from "../helpers/utils";
import {Dimensions, Platform, StatusBar} from "react-native";
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HIGHT = Dimensions.get("window").height;

interface params {
  width?: number;
  height?: number;
}

let config = {
  width: 375,
  height: 812,
};

export function setDimensionsConfig(params: params) {
  config = {...config, ...params};
}

export const calcWidthRatio = (
  target: number,
  parent: number = config.width,
) => {
  let ratio = ((target / parent) * 100.0).toString() + "%";
  return ratio;
};

export const getWidth = (target: number = config.width) => {
  return SCREEN_WIDTH * (target / config.width);
};

export const getHeight = (target: number = config.height) => {
  return SCREEN_HIGHT * (target / config.height);
};

export function scale(fontSize: number, standardScreenHeight = config.height) {
  const {height, width} = Dimensions.get("window");
  const standardLength = width > height ? width : height;

  const offset = width > height ? 0 : isIos ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
  const deviceHeight =
    isIphoneX() || isAndroid
      ? standardLength - (offset ? offset : 0)
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export function isIphoneX() {
  const dimension = Dimensions.get("window");
  return (
    isIos &&
    !Platform.isTV &&
    (dimension.height === 780 ||
      dimension.width === 780 ||
      dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 844 ||
      dimension.width === 844 ||
      dimension.height === 896 ||
      dimension.width === 896 ||
      dimension.height === 926 ||
      dimension.width === 926)
  );
}
