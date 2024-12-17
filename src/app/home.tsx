import { useEffect, useState } from "react"

import { View, Text, StyleSheet } from "react-native"

import { router } from "expo-router"

import MapView, { Marker, Callout } from "react-native-maps"

import { Places } from "@/components/places"
import { Categories } from "@/components/categories"
import { useFetchPlaces } from "@/hooks/useFetchPlaces"
import { useFetchCategories } from "@/hooks/useFetchCategories"

import { colors, fontFamily } from "@/styles/theme"

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
      >
        <Marker
          identifier="current"
          image={require("@/assets/location.png")}
          coordinate={{ longitude: initialLocation.longitute, latitude: initialLocation.latitude }}
        />

        {places?.map((place) => {
          return (
            <Marker
              key={place.id}
              identifier={place.id}
              image={require("@/assets/pin.png")}
              coordinate={{ longitude: place.longitude, latitude: place.latitude }}
            >
              <Callout onPress={() => router.navigate(`/market/${place.id}`)}>
                <View>
                  <Text style={s.calloutName}>{place.name}</Text>
                  <Text style={s.calloutAddress}>{place.address}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <Places data={places} />
    </View>
  )
}

const s = StyleSheet.create({
  calloutView: {
    borderColor: "black",
    borderWidth: 2,
  },
  calloutName: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
  },
  calloutAddress: {
    fontSize: 12,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
  },
})
