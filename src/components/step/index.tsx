import { View, Text, ViewProps } from "react-native"

import { IconProps } from "@tabler/icons-react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"

interface StepProps extends ViewProps {
  title: string
  description: string
  icon?: any
}
export function Step({ title, description, icon, ...rest }: StepProps) {
  return (
    <View {...rest} style={s.container}>
      {/* {Icon && <Icon size={32} color={colors.green.base} />} */}
      {icon}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>

        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}
