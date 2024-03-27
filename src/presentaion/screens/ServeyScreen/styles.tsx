import { StyleSheet } from "react-native"

import { Colors, Spacing } from "../../../shared/styles"
import { getHeight, getWidth } from "../../../shared/styles/dimensions"

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: getHeight(40),
    // paddingBottom: getHeight(40),
  },
  nextBottomContainer: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: Spacing.S20,
    bottom: getHeight(30),
  },
  goBackButton: {
    justifyContent: "flex-start",
    width: getWidth(60),
  },
  goBackIcon: {
    color: Colors.BLACK,
  },
})
