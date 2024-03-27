import { AppointmentsTypes, ChatType } from "../@types"
import { IconsName } from "../assets/svgs"

export type MainNavigationTypes = MainAppStackTypes

export type MainAppStackTypes = {
  Splash: undefined
  Servey: undefined
}

export type HomeStackTypes = {
  Home: undefined
  Search: undefined
}

export type ChatStackTypes = {
  Chat: undefined
}

export type TabsBottomStack = {
  HomeStack: { icon: IconsName; text: string }
  MyAppointmentStack: { icon: IconsName; text: string }
  ChatStackTypes: { icon: IconsName; text: string }
  Profile: { icon: IconsName; text: string }
  Notifications: { icon: IconsName; text: string }
}

export type MainNavigationAllScreensTypes = MainAppStackTypes
export type MainNavigationKeys = keyof MainAppStackTypes
