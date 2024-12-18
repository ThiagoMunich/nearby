import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    gap: 12,
  },
  label: {
    letterSpacing: 0.5,
    color: colors.gray[400],
    fontFamily: fontFamily.regular,
  },
})
