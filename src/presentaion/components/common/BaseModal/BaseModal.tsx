import React, { FC, memo, RefObject } from "react"
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
} from "@gorhom/bottom-sheet"
import { Easing } from "react-native-reanimated"
import { Platform, View, ViewProps, ViewStyle } from "react-native"
import styles from "./styles"
import { IconsName } from "../../../../assets/svgs"
import Button from "../../shared/Button/Button"
import Text from "../../shared/Text/Text"
import { Colors, Spacing } from "../../../../shared/styles/index"
import { isRTL } from "../../../../infrastructure/localization/i18n-config"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet"

const BaseModal: FC<
  ViewProps & {
    forwardRef: RefObject<BottomSheetModal>
    snapPoints?: Array<number | string>
    title?: string
    onLeftPress?: () => void
    leftButtonText?: string
    onDismiss?: () => void
    onBackgroundPress?: () => void
    backgroundStyle?: ViewStyle
    enableDrag?: boolean
    titleIcon?: IconsName
    topArrow?: boolean
  }
> = ({
  forwardRef,
  snapPoints,
  title,
  onLeftPress,
  leftButtonText,
  onDismiss,
  backgroundStyle,
  enableDrag = true,
  titleIcon,
  topArrow,
  onBackgroundPress,
  ...props
}) => {
  const onCancel = () => {
    forwardRef.current?.close()
  }

  const handleBackdropPress = () => {
    if (onBackgroundPress && !onDismiss) {
      onBackgroundPress()
    }
  }

  return (
    <BottomSheetModal
      onDismiss={onDismiss}
      enableContentPanningGesture={enableDrag}
      enablePanDownToClose={true}
      enableDismissOnClose
      handleComponent={null}
      enableOverDrag={true}
      backdropComponent={(props: any) => (
        <BottomSheetBackdrop
          onPress={handleBackdropPress}
          {...props}
          disappearsOnIndex={-1}
        />
      )}
      ref={forwardRef}
      animationConfigs={{
        duration: 300,
        easing: Easing.elastic(),
      }}
      index={0}
      backgroundStyle={[styles.backgroundStyle, backgroundStyle]}
      snapPoints={snapPoints || ["50%"]}
    >
      {topArrow ? (
        <Button
          // iconName="arrow"
          // iconStyle={{ rotate: "top", color: Colors.PRIMARY }}
          containerStyle={{ padding: Spacing.S8 }}
        />
      ) : null}
      {title && (
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button
              onPress={onCancel}
              style={styles.button}
              iconStyle={{
                ...styles.icon,
                rotate: isRTL() ? "right" : "left",
              }}
              iconName={titleIcon || "arrow"}
            />
            <Text fontSize="FS13" fontFamily="MEDIUM" color="GRAY_1E103A">
              {title}
            </Text>
          </View>
          {onLeftPress && (
            <Button
              style={{ paddingHorizontal: Spacing.S11 }}
              onPress={onLeftPress}
              textStyle={{
                fontSize: "FS14",
                color: "GRAY_676767",
              }}
              textContainerStyle={{
                textDecorationLine: "underline",
              }}
              text={leftButtonText}
            />
          )}
        </View>
      )}
      {props.children}
    </BottomSheetModal>
  )
}

export default memo(BaseModal)