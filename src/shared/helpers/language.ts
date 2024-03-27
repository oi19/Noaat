import I18n from "i18next";
import {I18nManager} from "react-native";
import RNRestart from "react-native-restart";

export function changeLanguage(language: "ar" | "en") {
  if (I18n.language !== language) {
    I18n.changeLanguage(language)
      .then(async () => {
        I18nManager.forceRTL(language === "ar");
        I18nManager.allowRTL(language === "ar");
        setTimeout(() => {
          RNRestart.restart();
        }, 100);
      })
      .catch(error => {
        console.log("Error When Change Language : ", error);
      });
  }
}

export function translate(key: string | string[], options?: any): any {
  return key ? I18n.t(key, options) : undefined;
}
