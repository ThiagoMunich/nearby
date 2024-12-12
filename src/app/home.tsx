import { useCallback, useEffect, useState } from "react"

import { View } from "react-native"

import { Categories } from "@/components/categories"
import { useFetchPlaces } from "@/hooks/useFetchPlaces"
import { useFetchCategories } from "@/hooks/useFetchCategories"
import { Places } from "@/components/places"

export default function Home() {
  const { places, fetchPlaces } = useFetchPlaces()

  const { categories, fetchCategories } = useFetchCategories()

  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    if (categories.length !== 0) {
      setSelectedCategory(categories[0].id)
    } else {
      fetchCategories()
    }
  }, [categories])

  useEffect(() => {
    selectedCategory !== "" && fetchPlaces(selectedCategory)
  }, [selectedCategory])

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories data={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />

      <Places data={places} />
    </View>
  )
}
