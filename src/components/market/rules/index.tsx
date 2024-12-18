import { PlaceProps } from "@/hooks/useFetchMarket"
import React from "react"
import { View, Text } from "react-native"
import { s } from "./styles"

type Props = Pick<PlaceProps, "rules">

export function Rules({ rules }: Props) {
  return (
    <View style={s.container}>
      {rules.map((rule) => {
        return (
          <Text style={s.label} key={rule.id}>
            • {rule.description}
          </Text>
        )
      })}
    </View>
  )
}
