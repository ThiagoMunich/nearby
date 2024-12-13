import { View } from "react-native"

import { s } from "./style"
import Animated, { FadeInUp, SlideInLeft, ZoomIn } from "react-native-reanimated"

export function Welcome() {
  return (
    <View>
      <Animated.Image entering={ZoomIn.springify()} style={s.logo} source={require("@/assets/logo.png")} />

      <Animated.Text entering={SlideInLeft.springify().mass(0.5).delay(500)} style={s.title}>
        Boas vindas ao Nerby!
      </Animated.Text>

      <Animated.Text entering={FadeInUp.duration(600).delay(800)} style={s.subtitle}>
        Tenha cupons de vantagem para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Animated.Text>
    </View>
  )
}
