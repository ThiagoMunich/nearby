import { View, Text, Image } from "react-native"

import { s } from "./style"

export function Welcome() {
  return (
    <View>
      <Image style={s.logo} source={require("@/assets/logo.png")} />

      <Text style={s.title}>Boas vindas ao Nerby!</Text>

      <Text style={s.subtitle}>
        Tenha cupons de vantagem para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}
