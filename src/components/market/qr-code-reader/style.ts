import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 32,
    right: 32,
    left: 32,
    backgroundColor: colors.red.base,
  },
})
