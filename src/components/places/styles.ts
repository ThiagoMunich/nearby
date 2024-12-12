import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet"

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: SCREEN_WIDTH / 4,
    height: 6,
    backgroundColor: colors.gray[300],
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
})
