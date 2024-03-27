import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MainAppStackTypes } from "./navigation-types"
import ServeyScreen from "../presentaion/screens/ServeyScreen/ServeyScreen"

const Stack = createStackNavigator<MainAppStackTypes>()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Servey" component={ServeyScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
