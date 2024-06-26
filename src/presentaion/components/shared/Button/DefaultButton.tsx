import React, { FC, memo } from "react"
import { ActivityIndicator, TouchableOpacityProps } from "react-native"

import { ButtonProps } from "./Button"
import { ScaleButton } from "./ScaleButton"
import styles from "./styles"
import Svgs from "../../../../assets/svgs"
import { Colors, Spacing } from "../../../../shared/styles/index"
import Text from "../Text/Text"

const DefaultButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({
    text,
    iconName,
    iconContainerStyle,
    textContainerStyle,
    isLoading,
    ...props
  }) => {
    return (
      <ScaleButton
        {...props}
        style={[styles.defaultButtonContainer, props.style]}
      >
        {iconName && !isLoading && (
          <Svgs
            name={iconName}
            style={[{ marginLeft: Spacing.S16 }, iconContainerStyle]}
            {...props.iconStyle}
          />
        )}

        {text && !isLoading && (
          <Text
            fontSize="H2"
            fontFamily="MEDIUM"
            color="PRIMARY1"
            {...props.textStyle}
            style={[
              {
                paddingHorizontal: Spacing.S8,
              },
              textContainerStyle,
            ]}
          >
            {text}
          </Text>
        )}

        {props.children}
        {isLoading && (
          <ActivityIndicator size={"small"} color={Colors.PRIMARY} />
        )}
      </ScaleButton>
    )
  }
)

export { DefaultButton }
