import * as yup from "yup"
import { translate } from "./language"

yup.setLocale({
  mixed: {
    required: ({ path }) => {
      return translate("validation.required", {
        path: translate(`Form.${path}`),
      })
    },
  },
  string: {
    length: ({ path, length }) =>
      translate("validation.length", {
        path: translate(`Form.${path}`),
        length,
      }),
    min: ({ path, min }) =>
      translate("validation.minString", {
        path: translate(`Form.${path}`),
        min,
      }),
    max: ({ path, max }) =>
      translate("validation.maxString", {
        path: translate(`Form.${path}`),
        max,
      }),
    email: ({ path }) =>
      translate("validation.email", { path: translate(`Form.${path}`) }),
  },
  number: {
    min: ({ path, min }) =>
      translate("validation.minNumber", {
        path: translate(`Form.${path}`),
        min,
      }),
    max: ({ path, max }) =>
      translate("validation.maxNumber", {
        path: translate(`Form.${path}`),
        max,
      }),
  },
})

export const ReviewSchema = yup.object().shape({
  review: yup.string().nullable(),
  tags: yup
    .array()
    .min(1, "At least one tag is required")
    .of(yup.number().required()),
})
