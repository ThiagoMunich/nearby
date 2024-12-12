import { View, Text, TouchableOpacityProps, TouchableOpacity, Image } from "react-native"
import { s } from "./style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from "@/styles/theme"

export type PlaceProps = {
  id: string
  name: string
  description: string
  coupons: number
  cover: any
}

interface Props extends TouchableOpacityProps {
  data: PlaceProps
}

export default function Place({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={s.container}>
      <Image style={s.image} source={{ uri: data?.cover }} />

      <View style={s.content}>
        <Text style={s.name}>{data?.name}</Text>
        <Text style={s.description}>{data?.description}</Text>

        <View style={s.footer}>
          <MaterialCommunityIcons name="ticket-percent-outline" size={16} color={colors.red.base} />
          <Text style={s.coupons}>{data?.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
