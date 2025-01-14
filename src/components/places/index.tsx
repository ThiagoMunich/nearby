import React, { useRef } from "react"

import { Text } from "react-native"

import { router } from "expo-router"

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"

import { s } from "./styles"
import Place from "../place"
import { SCREEN_HEIGHT } from "@/configs/device"
import { PlaceProps } from "@/hooks/useFetchMarket"

interface Props {
  data: PlaceProps[]
}

export function Places({ data }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 280,
    max: SCREEN_HEIGHT - 128,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enableOverDrag={false}
      backgroundStyle={s.container}
      handleIndicatorStyle={s.indicator}
      snapPoints={[snapPoints.min, snapPoints.max]}
    >
      <BottomSheetFlatList
        data={data}
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => <Text style={s.title}>Explore locais perto de você</Text>}
        renderItem={({ item, index }) => (
          <Place data={item} index={index} onPress={() => router.navigate(`/market/${item.id}`)} />
        )}
      />
    </BottomSheet>
  )
}
