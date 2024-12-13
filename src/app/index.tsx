import { View, Text } from "react-native"

import { router } from "expo-router"

import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"
import { Button } from "@/components/button"
import Animated, { SlideInDown } from "react-native-reanimated"

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />

      <Steps />

      <Animated.View entering={SlideInDown.delay(6000).springify().mass(0.5).stiffness(50)}>
        <Button onPress={() => router.push("/home")}>
          <Button.Title>Começar</Button.Title>
        </Button>
      </Animated.View>
    </View>
  )
}
