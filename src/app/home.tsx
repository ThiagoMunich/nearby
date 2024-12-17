import { useEffect, useState } from "react"

import { View } from "react-native"

import MapView from "react-native-maps"

import { Categories } from "@/components/categories"
import { useFetchPlaces } from "@/hooks/useFetchPlaces"
import { useFetchCategories } from "@/hooks/useFetchCategories"
import { Places } from "@/components/places"

export default function Home() {
  const { places, fetchPlaces } = useFetchPlaces()

  const { categories, fetchCategories } = useFetchCategories()

  const [selectedCategory, setSelectedCategory] = useState("")

  const initialLocation = {
    latitude: -23.561187293883442,
    longitute: -46.656451388116494,
  }

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

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitute,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />

      <Places data={places} />
    </View>
  )
}
