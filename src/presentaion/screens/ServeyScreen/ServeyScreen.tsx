import React, { useEffect } from "react"

import { View, FlatList } from "react-native"
import { useMutation } from "react-query"

import Button from "../../components/shared/Button/Button"

import { BottomSheetModal } from "@gorhom/bottom-sheet"
import ServeyList from "../../components/common/ServeyList/ServeyList"

import { styles } from "./styles"

import { data } from "../../../mock/serveyQuestions.json"
import SuccessModel from "../../components/common/SuccessModal/SuccessModal"
import BlurProgressView from "../../components/common/blur-activity-indicator/BlurProgressView"
import { postPromise } from "../../../infrastructure/api/api"
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar"
import { Spacing } from "../../../shared/styles"

export interface selectedAnswerBodyProps {
  answerId: number
  tags: number[]
  description: any
}

export interface selectedAnswerProps {
  [key: number]: selectedAnswerBodyProps // Use question ID as key
}

const ServeyScreen: React.FC = () => {
  const successModelRef = React.useRef<BottomSheetModal>(null)
  const flatListRef = React.useRef<FlatList>(null)
  const [answers, setAnswers] = React.useState<selectedAnswerProps>({})
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)
  const [isLoading, setLoading] = React.useState<boolean>(false)

  // const { isLoading, mutateAsync: submitServey } = useMutation({
  //   mutationFn: () => postPromise,
  //   onSuccess: () => openSuccessModal(),
  // })

  const openSuccessModal = () => {
    successModelRef.current.present()
  }

  const closeSuccessModal = () => {
    setCurrentIndex(0)
    setTimeout(() => {
      successModelRef.current.close()
    }, 300)
  }

  const onSubmitReview = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      openSuccessModal()
    }, 300)
  }

  const onAnswerButtonPressed = (
    isLastItem: boolean,
    currentAnswer: selectedAnswerProps
  ) => {
    if (isLastItem) {
      onSubmitReview()
    } else {
      setCurrentIndex(currentIndex + 1)
    }
    setAnswers({ ...answers, ...currentAnswer })
  }

  React.useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
    })
  }, [currentIndex])

  return (
    <View style={styles.root}>
      <Button
        style={styles.goBackButton}
        iconName="arrow"
        iconStyle={styles.goBackIcon}
        onPress={() => {
          if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
          }
        }}
      />
      <View style={{ margin: Spacing.S20 }}>
        <ProgressBar
          type="segmented"
          currentStep={currentIndex + 1}
          totalSteps={data.length}
        />
      </View>
      <ServeyList
        forwardRef={flatListRef}
        questionList={data}
        currentIndex={currentIndex}
        onCompletion={onAnswerButtonPressed}
        answers={answers}
      />
      <SuccessModel
        forwardRef={successModelRef}
        onContinuePress={closeSuccessModal}
      />
      {isLoading ? <BlurProgressView /> : null}
    </View>
  )
}

export default ServeyScreen
