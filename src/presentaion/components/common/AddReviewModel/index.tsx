import React, { RefObject, useEffect, useState } from "react"
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Keyboard,
} from "react-native"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { translate } from "../../../../shared/helpers/language"
import { Colors, Spacing } from "../../../../shared/styles"
import { scale } from "../../../../shared/styles/dimensions"
import Button from "../../shared/Button/Button"
import Text from "../../shared/Text/Text"
import { ControlledInput } from "../../shared/Input/Input"
import BaseModal from "../BaseModal/BaseModal"
import { styles } from "./styles"
import { taglist as data } from "./data"
import { selectedAnswerBodyProps } from "../../../screens/ServeyScreen/ServeyScreen"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ReviewSchema } from "../../../../shared/helpers/validationSchema"
import TagList from "../TagList/TagList"

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
  onCompletion,
  onCancel,
}) => {
  const [selectedTags, setSelectedTags] = useState<number[]>([])
  const [isTagErrorVisible, setTagErrorVisible] = useState<boolean>(false)
  const [isTextInputVisible, setTextInputVisible] = useState<boolean>(false)
  const [snapPoints, setSnapPoints] = useState<Array<number | string>>(["50%"])

  const { control, setValue, getValues, clearErrors, reset } = useForm({
    resolver: yupResolver(ReviewSchema),
    defaultValues: {
      review: questionAnswer?.description ?? "",
      tags: questionAnswer?.tags ?? [],
    },
  })

  useEffect(() => {
    console.log(questionAnswer)
    setSelectedTags(questionAnswer?.tags ?? [])
    setValue("tags", questionAnswer?.tags ?? [])
    setValue("review", questionAnswer?.description ?? "")
  }, [questionAnswer])

  const handleTagPress = (filteredSelectedTags: number[]) => {
    clearErrors("tags")
    setTagErrorVisible(false)
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
      console.log(getValues())
      onCompletion({
        description: getValues("review"),
        tags: getValues("tags"),
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
          <TagList
            data={data}
            selectedTags={selectedTags}
            onSelectTags={handleTagPress}
            isTagErrorVisible={isTagErrorVisible}
          />
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
