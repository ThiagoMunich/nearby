import { View, Text, TouchableOpacityProps, TouchableOpacity, Image } from "react-native"
import { s } from "./style"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from "@/styles/theme"
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated"

export type PlaceProps = {
  id: string
  name: string
  description: string
  coupons: number
  cover: any
}

interface Props extends TouchableOpacityProps {
  data: PlaceProps
  index: number
}

export default function Place({ data, index, ...rest }: Props) {
  return (
    <Animated.View entering={FadeInDown.delay(index * 100)}>
      <TouchableOpacity {...rest} style={s.container} activeOpacity={0.7}>
        <Image style={s.image} source={{ uri: data?.cover }} />

        <View style={s.content}>
          <Text style={s.name}>{data?.name}</Text>
          <Text style={s.description} numberOfLines={2}>
            {data?.description}
          </Text>

          <View style={s.footer}>
            <MaterialCommunityIcons name="ticket-percent-outline" size={16} color={colors.red.base} />
            <Text style={s.coupons}>{data?.coupons} cupons disponíveis</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
}
