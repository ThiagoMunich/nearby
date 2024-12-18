import React, { useMemo } from "react"

import { View, Text } from "react-native"

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

import { s } from "./styles"
import { Info } from "../info"
import { colors } from "@/styles/theme"
import { PlaceProps } from "@/hooks/useFetchMarket"

type Props = {
  data: PlaceProps
}

const iconConfig = {
  size: 20,
  color: colors.red.base,
}

export function Details({ data }: Props) {
  const availableInfo = useMemo(
    () => [
      {
        icon: <MaterialCommunityIcons name="ticket-percent-outline" size={iconConfig.size} color={iconConfig.color} />,
        label: `${data.coupons} cupons disponíveis`,
      },
      {
        icon: <Ionicons name="location-outline" size={iconConfig.size} color={iconConfig.color} />,
        label: data.address,
      },
      { icon: <Ionicons name="call-outline" size={iconConfig.size} color={iconConfig.color} />, label: data.phone },
    ],
    []
  )

  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>

      <Text style={s.description}>{data.description}</Text>

      <Text style={s.info}>Informações</Text>

      <View style={{ gap: 20 }}>
        {availableInfo.map((info) => {
          return <Info key={info.label} icon={info.icon} label={info.label} />
        })}
      </View>
    </View>
  )
}
