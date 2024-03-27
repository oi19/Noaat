import React from "react"
import { SvgProps } from "react-native-svg"

import Arrow from "./arrow"

import Messages from "./messages"

import Warning from "./warning"

import SuccessImage from "./sucessImage"
import NotFound from "./notFound"
import Close from "./close"

export type IconsName =
  | "arrow"
  | "messages"
  | "warning"
  | "successImage"
  | "close"

export type RotateTypes = "left" | "right" | "top" | "bottom"

export interface IconsProps {
  color?: string
  width?: number
  height?: number
  name?: IconsName
  rotate?: RotateTypes
  type?: "image" | "svg"
}

export const getRotate = (rotate: string) => {
  switch (rotate) {
    case "top":
      return "90deg"
    case "bottom":
      return "270deg"
    case "left":
      return "0deg"
    case "right":
      return "-180deg"
    default:
      return "0deg"
  }
}

function Svgs(props: IconsProps & SvgProps) {
  const style = { transform: [{ rotate: getRotate(props.rotate || "") }] }

  switch (props.name) {
    case "arrow":
      return <Arrow {...props} style={[props.rotate && style, props.style]} />
    case "messages":
      return (
        <Messages {...props} style={[props.rotate && style, props.style]} />
      )
    case "successImage":
      return (
        <SuccessImage {...props} style={[props.rotate && style, props.style]} />
      )
    case "close":
      return <Close {...props} style={[props.rotate && style, props.style]} />

    default:
      return <NotFound {...props} />
  }
}

export default Svgs
