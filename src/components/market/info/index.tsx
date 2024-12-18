import React, { ReactNode } from "react"
import { View, Text } from "react-native"

import { s } from "./styles"

type Props = {
  icon: ReactNode
  label: string
}

export function Info({ icon, label }: Props) {
  return (
    <View style={s.container}>
      {icon}
      <Text style={s.label}>{label}</Text>
    </View>
  )
}
