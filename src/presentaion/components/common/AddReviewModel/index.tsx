import { BottomSheetModal } from "@gorhom/bottom-sheet"
import React, { RefObject, useEffect } from "react"
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Keyboard,
} from "react-native"

import { translate } from "../../../../shared/helpers/language"
import { Colors, Spacing } from "../../../../shared/styles"
import { scale } from "../../../../shared/styles/dimensions"
import Button from "../../shared/Button/Button"
import Text from "../../shared/Text/Text"
import { ControlledInput } from "../../shared/Input/Input"
import BaseModal from "../BaseModal/BaseModal"
import { styles } from "./styles"
import { Tag, taglist } from "./data"
import { FS14 } from "../../../../shared/styles/typography"
import { selectedAnswerBodyProps } from "../../../screens/ServeyScreen/ServeyScreen"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ReviewSchema } from "../../../../shared/helpers/validationSchema"

type AddReviewModelModelProps = {
  forwardRef: RefObject<BottomSheetModal>
  questionAnswer: selectedAnswerBodyProps
  isReset?: boolean
  onCompletion: (data: any) => void
  onCancel: () => void
}
// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const AddReviewModel: React.FC<AddReviewModelModelProps> = ({
  forwardRef,
  questionAnswer,
  isReset,
  onCompletion,
  onCancel,
}) => {
  const [selectedTags, setSelectedTags] = React.useState<number[]>(
    questionAnswer?.tags ?? []
  )
  const [isTagErrorVisible, setTagErrorVisible] = React.useState<boolean>(false)
  const [isTextInputVisible, setTextInputVisible] =
    React.useState<boolean>(false)
  const [snapPoints, setSnapPoints] = React.useState<Array<number | string>>([
    "50%",
  ])

  const { control, setValue, getValues, clearErrors, reset } = useForm({
    resolver: yupResolver(ReviewSchema),
    defaultValues: {
      review: isReset ? "" : questionAnswer?.description,
      tags: isReset ? [] : questionAnswer?.tags,
    },
  })

  console.warn(getValues())

  const handleTagPress = (id: number) => {
    clearErrors("tags")
    setTagErrorVisible(false)
    let filteredSelectedTags: number[]
    if (!selectedTags.includes(id)) {
      filteredSelectedTags = [...selectedTags, id]
    } else {
      filteredSelectedTags = selectedTags.filter((tagId) => tagId !== id)
    }
    setSelectedTags(filteredSelectedTags)
    setValue("tags", filteredSelectedTags)
  }

  const toggleTextInput = () => {
    Keyboard.dismiss()
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setTextInputVisible((prev) => !prev)
    setSnapPoints((prev) => (prev[0] === "50%" ? ["60%"] : ["50%"]))
  }

  const onSendReview = () => {
    if (validate()) {
      onCompletion({
        description: getValues["review"],
        tags: getValues["tags"],
      })
    }
  }

  const validate = () => {
    if (getValues("tags").length === 0) {
      setTagErrorVisible(true)
      return false
    }
    return true
  }

  const onCancelButtonPressed = () => {
    Keyboard.dismiss()
    setTagErrorVisible(false)
    checkPreviousData()
    onCancel()
  }

  const checkPreviousData = () => {
    setSelectedTags(questionAnswer?.tags ?? [])
    setValue("tags", questionAnswer?.tags ?? [])
    setValue("review", questionAnswer?.description ?? "")
  }

  const _renderTagsList = () => {
    return (
      <View style={styles.tagsListContainer}>
        {taglist.map((tag: Tag) => (
          <TouchableOpacity
            key={"tageItem" + tag.id}
            style={[
              styles.tag,
              {
                backgroundColor: selectedTags.includes(tag.id)
                  ? Colors.PRIMARY
                  : Colors.PRIMARY_1,
              },
            ]}
            onPress={() => handleTagPress(tag.id)}
          >
            <Text
              style={{
                color: selectedTags.includes(tag.id)
                  ? Colors.WHITE
                  : Colors.BLACK,
                marginEnd: Spacing.S4,
              }}
            >
              {selectedTags.includes(tag.id) ? "-" : "+"}
            </Text>
            <Text
              style={{
                fontSize: FS14,
                color: selectedTags.includes(tag.id)
                  ? Colors.WHITE
                  : Colors.BLACK,
              }}
            >
              {tag.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <BaseModal
      forwardRef={forwardRef}
      onBackgroundPress={onCancelButtonPressed}
      enableDrag={true}
      topArrow
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: Colors.GRAY_EEEEEE,
        borderRadius: scale(20),
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={Platform.select({ ios: 200, android: 60 })}
      >
        <View style={styles.container}>
          <View style={styles.titleQuestionContainer}>
            <Text fontSize="FS18" color="FONT_07101A" fontFamily="MEDIUM">
              {"What did we do wrong?"}
            </Text>
            <Button
              iconName="close"
              iconStyle={{ color: Colors.PRIMARY }}
              style={{ paddingHorizontal: Spacing.S20 }}
              onPress={onCancelButtonPressed}
            />
          </View>
          {isTagErrorVisible ? (
            <Text style={{ marginStart: Spacing.S20 }} color="RED">
              at least 1 tag is required
            </Text>
          ) : null}

          {_renderTagsList()}
          {!isTextInputVisible ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={toggleTextInput}>
                <Text style={styles.shareOpinionText}>Tell Us More</Text>
              </TouchableOpacity>
              <Text>(optional)</Text>
            </View>
          ) : null}

          {isTextInputVisible ? (
            <ControlledInput
              fieldName="review"
              control={control}
              multiline
              numberOfLines={4}
              placeholder={"Write here..."}
              textAlignVertical="top"
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.problemInputStyle}
              // inputRef={problemInputRef}
            />
          ) : null}

          <Button
            type="standard"
            isLoading={false}
            text={translate("Common.sendReview")}
            style={{ alignSelf: "center", width: "100%" }}
            containerStyle={{ marginHorizontal: Spacing.S20 }}
            onPress={onSendReview}
          />
        </View>
      </KeyboardAwareScrollView>
    </BaseModal>
  )
}

export default AddReviewModel
