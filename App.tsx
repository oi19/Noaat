import { StatusBar, StyleSheet, View } from "react-native"
import React from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { Provider } from "react-redux"
import { SafeAreaProvider } from "react-native-safe-area-context"
import store from "./src/application/index"

import { Colors } from "./src/shared/styles"

import Splash from "./src/presentaion/screens/Splash/Splash"
import { QueryClient, QueryClientProvider } from "react-query"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  const routeNameRef = React.useRef()
  const queryClient = new QueryClient()

  return (
    <SafeAreaProvider>
      <View style={styles.rootScreen}>
        <StatusBar
          translucent
          barStyle="dark-content"
          animated
          backgroundColor={"rgba(0,0,0,0)"}
        />
        <Provider store={store}>
          <NavigationContainer ref={routeNameRef}>
            <QueryClientProvider client={queryClient}>
              <GestureHandlerRootView style={styles.gesturehandleStyles}>
                <BottomSheetModalProvider>
                  <Splash />
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
            </QueryClientProvider>
          </NavigationContainer>
        </Provider>
      </View>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  gesturehandleStyles: {
    flex: 1,
  },
})
