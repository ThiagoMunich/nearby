import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native"

import { s } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean
}

function Button({ isLoading = false, children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.8} style={[s.container, rest.style]} disabled={isLoading}>
      {isLoading ? <ActivityIndicator size="small" color="white" /> : children}
    </TouchableOpacity>
  )
}

interface TitleProps extends TextProps {}
function Title({ children }: TitleProps) {
  return <Text style={s.title}>{children}</Text>
}

function Icon({ icon }: any) {
  return icon
}

Button.Title = Title
Button.Icon = Icon

export { Button }
