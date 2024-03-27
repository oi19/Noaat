export enum Endpoints {
  SECTORS = "https://forsa-staging.bit68.com/api/v1/stores/mysectors/",
  BRANDS = "https://forsa-staging.bit68.com/api/v1/stores/mystores/?sector=1",
  OFFERS = "https://forsa-staging.bit68.com/api/v1/stores/myoffers/",
  ADDITIONAL_LOANS = "https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/",
}

export const ScreenNames = {
  LOGIN: "Login",
  REGISTRATION: "Registration",
  PROFILE: "Profile",
  TRANSACTION: "Transactions",
  TRANSACTION_DETAILS: "TransactionDetails",
  BUDGET: "Budget",
}

export enum LanguageCode {
  EN = "en",
  AR = "ar",
}

export enum BudgetRountesNames {
  ALL = "all",
  PERSONAL = "personal",
  WORk = "work",
}

export enum BudgetCatergory {
  FOOD = 1,
  CLOTHES = 2,
  TRANSPORTATION = 3,
}

export const PeriodsTypes = () => {
  return [
    { title: "Week", type: "days", number: "7" },
    { title: "Month", days: "30", type: "months", number: "1" },
    { title: "Three Months", days: "90", type: "months", number: "3" },
  ]
}

export enum Payment_Method {
  CASH = 1,
  CREDIT_CARD = 2,
}

export enum Currency_Values {
  USD = 1,
  EGP = 2,
  SAR = 3,
}

export enum SWIP_TYPE {
  RESEND_BUTTON = "RESEND",
}

export enum Fixed_Servey_Answer_Values {
  VERY_SAD = 1,
  SAD = 2,
  NEUTRAL = 3,
  GOOD = 4,
  EXCELLENT = 5,
}
