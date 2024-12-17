import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"
import { SCREEN_HEIGHT } from "@/configs/device"

export const s = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: -32,
    height: SCREEN_HEIGHT / 4,
    backgroundColor: colors.gray[200],
  },
  header: {
    padding: 24,
    paddingTop: 56,
  },
  backButton: {
    width: 40,
    height: 40,
  },
})
