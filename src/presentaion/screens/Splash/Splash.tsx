import React, { useState } from "react"
import { View, Image } from "react-native"
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar"
import styles from "./styles"
import MainStack from "../../../navigation/MainStack"

const Splash: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false)


  return (
    <View style={{ flex: 1, width: "100%" }}>
      {loadingComplete ? (
        <MainStack />
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            resizeMode="cover"
            source={require("../../../assets/images/appIcon.png")}
          />
          <ProgressBar
            type="appLoading"
            onCompletion={() => setLoadingComplete(true)}
          />
        </View>
      )}
    </View>
  )
}

export default Splash
