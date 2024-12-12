import { StyleSheet } from "react-native"

import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  image: {
    height: 100,
    width: 120,
    borderRadius: 12,
    backgroundColor: colors.gray[200],
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  coupons: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    color: colors.green.dark,
  },
})
