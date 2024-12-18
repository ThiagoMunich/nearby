import React from "react"

import { View, Text } from "react-native"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import { colors } from "@/styles/theme"
import { s } from "./styles"

type Props = {
  code: string
}

export function Coupon({ code }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Utilize este cupom</Text>

      <View style={s.content}>
        <MaterialCommunityIcons name="ticket-percent-outline" size={24} color={colors.green.light} />,
        <Text style={s.code}>{code}</Text>
      </View>
    </View>
  )
}
