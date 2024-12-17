import React, { useRef } from "react"

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"

import Place, { PlaceProps } from "../place"
import { SCREEN_HEIGHT } from "@/configs/device"
import { Text } from "react-native"
import { s } from "./styles"

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
        renderItem={({ item, index }) => <Place data={item} index={index} />}
        ListHeaderComponent={() => <Text style={s.title}>Explore locais perto de você</Text>}
      />
    </BottomSheet>
  )
}
