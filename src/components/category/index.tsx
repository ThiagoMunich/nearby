import { Text, Pressable, PressableProps } from "react-native"

import { s } from "./styles"

type Props = PressableProps & {
  iconId: string
  name: string
  isSelected?: boolean
}

export function Category({ iconId, name, isSelected, ...rest }: Props) {
  return (
    <Pressable {...rest} style={[s.container, isSelected && s.isContainerSelected]}>
      <Text style={[s.name, isSelected && s.isNameSelected]}>{name}</Text>
    </Pressable>
  )
}
