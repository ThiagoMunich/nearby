import { View, Text, ViewProps } from "react-native"

import { s } from "./styles"
import Animated, { FadeInUp } from "react-native-reanimated"

interface StepProps extends ViewProps {
  title: string
  description: string
  icon?: any
  index: number
}
export function Step({ title, description, icon, index, ...rest }: StepProps) {
  return (
    <Animated.View entering={FadeInUp.delay((index + 1) * 1600).duration(1000)} {...rest} style={s.container}>
      <View>{icon}</View>
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>

        <Text style={s.description}>{description}</Text>
      </View>
    </Animated.View>
  )
}
