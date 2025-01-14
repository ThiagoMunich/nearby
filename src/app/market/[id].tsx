import React, { useEffect, useState } from "react"

import { Alert, View } from "react-native"

import { Redirect, useLocalSearchParams } from "expo-router"

import { useCameraPermissions } from "expo-camera"

import { Button } from "@/components/button"
import { Loading } from "@/components/loading"
import { Cover } from "@/components/market/cover"
import { Coupon } from "@/components/market/coupon"
import { Details } from "@/components/market/details"
import { useFetchMarket } from "@/hooks/useFetchMarket"
import { QrCodeModal } from "@/components/market/qr-code-reader"

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>()

  const [_, requestPermission] = useCameraPermissions()

  const { market, isLoading, fetchMarket } = useFetchMarket()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const [couponCode, setCouponCode] = useState<string | null>(null)

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert("You need to grant access to the camera.")
      }

      setIsModalVisible(true)
    } catch (error) {
      return Alert.alert("Error on rendering camera.")
    }
  }

  useEffect(() => {
    fetchMarket(params.id)
  }, [params.id])

  if (isLoading) {
    return <Loading />
  }

  if (!market) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={market.cover} />

      <Details data={market} />

      {couponCode && <Coupon code={couponCode} />}

      <View style={{ padding: 32, marginTop: "auto" }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <QrCodeModal visible={isModalVisible} closeModal={() => setIsModalVisible(false)} />
    </View>
  )
}
