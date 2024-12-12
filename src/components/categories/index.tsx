import React, { memo } from "react"

import { FlatList } from "react-native"

import { s } from "./style"
import { Loading } from "../loading"
import { Category } from "../category"

export type CategoryProps = {
  id: string
  name: string
}

interface Props {
  selectedCategory: string
  onSelect: (id: string) => void
  data: CategoryProps[]
}

export const Categories = memo(({ data, selectedCategory, onSelect }: Props) => {
  return (
    <FlatList
      data={data}
      horizontal
      style={s.container}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Loading />}
      contentContainerStyle={s.content}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={selectedCategory === item.id}
        />
      )}
    />
  )
})
