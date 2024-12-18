import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100],
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginBottom: 40,
  },
  info: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[400],
    marginBottom: 14,
  },
})
