import { LanguageCode } from "../constants"

class Font {
  fontEN: font_enI
  fontAR: font_arI

  constructor(fontEN, fontAR) {
    this.fontEN = fontEN
    this.fontAR = fontAR
  }

  getFontForLang = (lang: LanguageCode) => {
    return lang === LanguageCode.EN ? this.fontEN : this.fontAR
  }
}

interface Color {
  Black: string
  primaryDiscoColor: string
  skyBlueColor: string
  grassGreenColor: string
  errorColor: string
  yellowColor: string
  transactionDetailsBackground: string
  datePeriodContainerColor: string
  calenderBackgroundColor: string
  selectedMethodContainerBackgroundColor: string
  unSelectedMethodContainerBackgroundColor: string
  newButtonShadowColor: string
  progressedBarColor: string
  unPorogressedBarColor: string
  commonInputFieldBorderFocusColor: string
  commonInputFieldLabelColor: string
  commonInputFieldBorderColor: string
  commonInputFieldBackgroundColor: string
  commonInputFiledBorderErrorColor: string
  commonNewBackgroundColor: string
  onboardingButtonShadow: string
  primaryColor: string
  buttonFirstColor: string
  buttonSecondColor: string
  greyButtonFirstColor: string
  greyButtonSecondColor: string
  buttonShadowColor: string
  backgroundColor: string
  errorLabelColor: string
  blackFontColor: string
  blackCornerRaduis: string
  blackTitleColor: string
  notesPlaceholderColor: string
  attachmentIconColor: string
  redColorBackground: string
  whiteColorBackground: string
  whiteTitleColor: string
  lightPurple: string
  purple: string
  lightGray: string
  lightGreen: string
  lightRed: string
  red: string
  redTitleColor: string
  shadowColor: string
  progressColor: string
  yellow: string
  peach: string
  blue: string
  azure: string
  azure_20: string
  coolGrey: string
  iceBlue: string
  eggplant: string
  primaryButtonColor: string
  firstSplashColor: string
  secondSplashColor: string
  onBoardTitleColor: string
  onBoardDescriptionColor: string
  circleProgress: string
  seperatedEggplant: string
  tomato: string
  seaweedGreen: string
  white: string
  battleshipGrey: string
  borderError: string
  placeholderColor: string
  orColor: string
  whiteTwo: string
  seaWeedGreenLight: string
  seaWeedGreenDark: string
  darkIndigo: string
  eggplant_48: string
  eggplant_10: string
  grapefruit: string
  grapefruit_20: string
  yellowishOrange: string
  yellowishOrange_20: string
  eggplant_2: string
  eggplantOpacity: string
  everyLightPink: string
  duckEggBlue: string
  pale: string
  absentLabel: string
  holidayLabel: string
  requestsLabel: string
  clockOutLabel: string
  homeCutoffSecColor: string
  paleLavender: string
  electricPurple: string
  whiteThree: string
  darkIndigo_10: string
  modalBackgroundColor: string
  blueGrey: string
  silver: string
  skyBlue: string
  calendarBackground: string
  calendarButtonColor: string
  attachmentBorderColor: string
  darkIceBlue: string
  greyShade: string
  dividerColor: string
  dayraWebviewBackgroundColor: string
  faintBlue: string
  profileLabel: string
  profileBorder: string
  paleGrey: string
  transferColor: string
  opacityGray: string
  SuccessColor: string
  firstLinearColor: string
  secondLinearColor: string
  headerTextColor: string
  gray1: string
  borderInputColor: string
  primaryButtonColorOpacity: string
  darkBlue: string
  grey: string
  borderOpacity: string
  switchButtonColor: string
  uploadImageColor: string
  mainBlue: string
  uploadImageHintsColor: string
  green: string
  primaryOrange: string
  primaryDarkOrange: string
  orange: string
  darkOrange: string
  firstFlipAnimatedCardColor: string
  secondFlipAnimatedCardColor: string
  azureOpacity: string
  transactionincome: string
  transactionOutcome: string
  transactionNameColor: string
  darkGrey: string
  OtpInputError: string
  cameraModal: string
  buttonColorOpacity: string
  unSelectedSuggestion: string
  disableBiometric: string
  buttonOpacityColor: string
  logoutTextColor: string
  cancelTextColor: string
  onboardingLoginButtonColor: string
  createAccountOnboardingButtonColor: string
  bluishBlack: string
  fieldBorderColor: string
  fieldLabelColor: string
  neonBlue: string
  tabbarBorderColor: string
  tabbarText: string
  lightBluishGray: string
  orangeButtonShadowColor: string
  buttonBackground: string
  iconColor: string
  logoutButtonColor: string
  switchColor: string
  tabBarGradient: string
  inputFieldBackground: string
}

export class Theme {
  font: Font
  color: Color

  constructor(font, color) {
    this.font = font
    this.color = color
  }
}

interface font_enI {
  regularFont: string
  mediumFont: string
  semiBoldFont: string
  boldFont: string
  extraBoldFont: string
  heavyFont: string
}

interface font_arI {
  regularFont: string
  mediumFont: string
  semiBoldFont: string
  boldFont: string
  extraBoldFont: string
  heavyFont: string
}

const font_en = {
  regularFont: "Gilroy-Regular",
  mediumFont: "Gilroy-Medium",
  semiBoldFont: "Gilroy-SemiBold",
  boldFont: "Gilroy-Bold",
  extraBoldFont: "Gilroy-ExtraBold",
  heavyFont: "Gilroy-Heavy",
}

const font_ar = {
  regularFont: "Cairo-Regular",
  mediumFont: "Cairo-Medium",
  semiBoldFont: "Cairo-SemiBold",
  boldFont: "Cairo-Bold",
  extraBoldFont: "Cairo-ExtraBold",
  heavyFont: "Cairo-ExtraBold",
}

export const defaultTheme = new Theme(new Font(font_en, font_ar), {
  Black: "black",
  primaryDiscoColor: "#0052CC",
  skyBlueColor: "#33C2E3",
  grassGreenColor: "#59BA47",
  errorColor: "#E5233D",
  yellowColor: "#FFC828",
  trasactionDetailsBackground: "#FAFBFF",
  datePeriodContainerColor: "#092DD1",
  calenderBackgroundColor: "#E1E6FF",
  selectedMethodContainerBackgroundColor: "#091C77",
  unSelectedMethodContainerBackgroundColor: "#E7EAF9",
  blackFontColor: "black",
  newButtonShadowColor: "white",
  progressedBarColor: "#FF5331",
  unPorogressedBarColor: "#D6D6D6",
  commonInputFieldBorderFocusColor: "#092DD1",
  commonInputFieldLabelColor: "#8C8C8C",
  commonInputFieldBorderColor: "#E1E6FF",
  commonInputFieldBackgroundColor: "#F5F5F5",
  commonInputFiledBorderErrorColor: "#FF2A00",
  commonNewBackgroundColor: "#FFFFFF",
  onboardingButtonShadow: "#04041512",
  primaryColor: "#fff",
  buttonFirstColor: "#081A6F",
  buttonSecondColor: "#0931EB",
  greyButtonFirstColor: "#E1E6FF",
  greyButtonSecondColor: "#E7EAF9",
  backgroundColor: "lightgray",
  buttonShadowColor: "#000AFF57",
  errorLabelColor: "#FE5858",
  blackCornerRaduis: "black",
  blackTitleColor: "black",
  notesPlaceholderColor: "grey",
  attachmentIconColor: "#87D5F7",
  redColorBackground: "rgb(241,82,35)",
  whiteColorBackground: "white",
  whiteTitleColor: "white",
  lightPurple: "#e3d3ee",
  purple: "purple",
  lightGray: "lightgray",
  opacityGray: "#DDE0E6",
  lightGreen: "lightgreen",
  lightRed: "#ffb1b1",
  red: "red",
  redTitleColor: "red",
  shadowColor: "#999",
  progressColor: "#3399FF",
  yellow: "yellow",
  peach: "#FFE5B4",
  blue: "blue",
  azure: "#0090e5",
  azure_20: "rgba(0, 144, 229, 0.2)",
  coolGrey: "#9fa2b2",
  iceBlue: "#f2f8ff",
  seperatedEggplant: "rgba(4 ,4 ,21, 0.1)",
  eggplant: "#221F54",
  primaryButtonColor: "#0092EC",
  firstSplashColor: "#081A6F",
  secondSplashColor: "#6F2841",
  onBoardTitleColor: "#221F54",
  onBoardDescriptionColor: "#221F54",
  tomato: "#f15223",
  circleProgress: "rgb(255,170,27)",
  white: "#fcfcfc",
  battleshipGrey: "#6f6f79",
  borderError: "#FE5858",
  placeholderColor: "#919BB4",
  orColor: "#C1C7D0",
  whiteTwo: "#ffffff",
  seaWeedGreenLight: "rgba(45,158,100, 0.2)",
  seaWeedGreenDark: "rgb(45,158, 100)",
  darkIndigo: "rgba(14, 23, 63, 0.1)",
  eggplant_48: "rgba(4, 4, 21, 0.48)",
  eggplant_10: "rgba(4, 4, 21, 0.1)",
  grapefruit: "rgba(254 ,88,0 ,88)",
  grapefruit_20: "rgba(254 ,88, 88, 0.2)",
  yellowishOrange: "rgba(255, 170,0, 27)",
  yellowishOrange_20: "rgba( 255 ,170, 27, 0.2)",
  eggplant_2: "#F0F1F4",
  eggplantOpacity: "#040415",
  placeHolder: "rgb(127, 127, 127)",
  everyLightPink: "#d8d8d8",
  duckEggBlue: "#daf6f4",
  pale: "#fff8cf",
  profileLabel: "rgb(122 ,134, 154)",
  profileBorder: "rgb(244 ,245, 247)",
  absentLabel: "rgba(254 ,88, 88, 0.4)",
  holidayLabel: "rgba(45,158,100, 0.2)",
  requestsLabel: "rgba(138,36,255, 0.2)",
  clockOutLabel: "rgba(255,170,27, 0.2)",
  homeCutoffSecColor: "#fff8cf",
  paleLavender: "#f3e9ff",
  electricPurple: "#8a24ff",
  whiteThree: "#eaeaea",
  seaweedGreen: "rgb(45, 158, 100)",
  darkIndigo_10: "rgba(14 ,23 ,63, 0.1)",
  modalBackgroundColor: "rgba(0,0,0,0.5)",
  blueGrey: "rgb(145,155,180)",
  silver: "rgb(193,199,208)",
  skyBlue: "rgb(82,195,255)",
  calendarBackground: "#fafaf8",
  calendarButtonColor: "#007bff",
  attachmentBorderColor: "rgb(206,207,217)",
  darkIceBlue: "rgb(238,245,253)",
  greyShade: "#505d6f",
  dividerColor: "#e6e6e8",
  dayraWebviewBackgroundColor: "#F5F5F5",
  faintBlue: "rgb(231, 249, 255)",
  paleGrey: "rgb(241,241,249)",
  transferColor: "rgb(6, 193, 255)",
  SuccessColor: "#44D695",
  firstLinearColor: "#FFFFFF",
  secondLinearColor: "#F2F8FF",
  headerTextColor: "#221F54",
  gray1: "#919BB4",
  borderInputColor: "#0404021A",
  primaryButtonColorOpacity: "rgba(0, 147, 236,.5)",
  darkBlue: "#081A6F",
  grey: "#919BB4",
  borderOpacity: "#919BB431",
  switchButtonColor: "#1C998B",
  uploadImageColor: "#3C3C4399",
  uploadImageHintsColor: "#828282D9",
  green: "#1B998B",
  primaryOrange: "#FF5331",
  primaryDarkOrange: "#FF2F00",
  orange: "#F0544F",
  darkOrange: "#BC2B27",
  firstFlipAnimatedCardColor: "#5e647e",
  secondFlipAnimatedCardColor: "#0e173f",
  mainBlue: "#0093EC",
  azureOpacity: "#E0F2FD",
  transactionincome: "#1B998B",
  transactionOutcome: "#F0544F",
  darkGrey: "#515257",
  transactionNameColor: "#9B9B9B",
  OtpInputError: "#F0544F15",
  cameraModal: "#EDEDEDCC",
  buttonColorOpacity: "#C6E7FB",
  unSelectedSuggestion: "#F2F8FF",
  disableBiometric: "#DDF0FD",
  buttonOpacityColor: "rgba(0, 147, 236,.5)",
  logoutTextColor: "#007AFF",
  cancelTextColor: "#0A84FF",
  onboardingLoginButtonColor: "#CDD1E2",
  createAccountOnboardingButtonColor: "#EC6040",
  commonBackgroundColor: "#F0F1F5",
  bluishBlack: "#020824",
  fieldBorderColor: "#CDD1E2",
  fieldLabelColor: "#999BA3",
  neonBlue: "#002BFF",
  tabbarBorderColor: "#3B3B3D0F",
  tabbarText: "#01061D",
  lightBluishGray: "#D3D5DB",
  orangeButtonShadowColor: "#EC60406C",
  buttonBackground: "#EFF2FF",
  iconColor: "#002BFF33",
  logoutButtonColor: "#ED5B5B",
  switchColor: "#39488B",
  tabBarGradient: "#EC60404D",
})

export const darkTheme = new Theme(new Font(font_en, font_ar), {
  primaryColor: "black",
  backgroundColor: "",
})
