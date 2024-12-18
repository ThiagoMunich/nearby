import React from "react"

import { router } from "expo-router"

import { ImageBackground, ImageBackgroundProps } from "react-native"

import Animated, { FadeInLeft } from "react-native-reanimated"

import { s } from "./styles"
import { Button } from "@/components/button"
import { Feather } from "@expo/vector-icons"

interface Props extends ImageBackgroundProps {
  uri: string
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri: uri }} style={s.container}>
      <Animated.View entering={FadeInLeft.duration(500)} style={s.header}>
        <Button style={s.backButton} onPress={() => router.back()}>
          <Button.Icon icon={<Feather name="arrow-left" color="white" size={24} />} />
        </Button>
      </Animated.View>
    </ImageBackground>
  )
}
