import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    letterSpacing: 1,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[500],
  },
})
