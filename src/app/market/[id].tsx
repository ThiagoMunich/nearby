import React, { useEffect } from "react"

import { View, Text } from "react-native"

import { useLocalSearchParams } from "expo-router"

import { Loading } from "@/components/loading"
import { useFetchMarket } from "@/hooks/useFetchMarket"
import { Cover } from "@/components/market/cover"
import { Details } from "@/components/market/details"

export default function Market() {
  const { market, isLoading, fetchMarket } = useFetchMarket()

  const params = useLocalSearchParams<{ id: string }>()

  useEffect(() => {
    fetchMarket(params.id)
  }, [params.id])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={market.cover} />

      <Details data={market} />
    </View>
  )
}
