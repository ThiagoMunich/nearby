import { View, Text } from "react-native"

import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons"

import { s } from "./styles"
import { Step } from "../step"
import { colors } from "@/styles/theme"
import Animated, { FadeInUp } from "react-native-reanimated"

const iconConfig = {
  size: 32,
  color: colors.red.base,
}

const steps = [
  {
    title: "Encontre estabelecimentos",
    description: "Veja locais perto de você que são parceiros Nearby",
    icon: <Entypo name="location-pin" size={iconConfig.size} color={iconConfig.color} />,
  },
  {
    title: "Ative o cupom com QR Code",
    description: "Escaneie o código no estabelecimento para usar o benefício",
    icon: <Ionicons name="qr-code-outline" size={iconConfig.size} color={iconConfig.color} />,
  },
  {
    title: "Garanta vantagens perto de você",
    description: "Ative cupons onde estiver, em diferentes tipos de estabelecimento",
    icon: <MaterialCommunityIcons name="ticket-percent-outline" size={iconConfig.size} color={iconConfig.color} />,
  },
]

export function Steps() {
  return (
    <View style={s.container}>
      <Animated.Text entering={FadeInUp.duration(600).delay(1000)} style={s.title}>
        Veja como funciona:
      </Animated.Text>

      {steps.map((step, index) => {
        return (
          <Step key={step.title} index={index} icon={step.icon} title={step.title} description={step.description} />
        )
      })}
    </View>
  )
}
