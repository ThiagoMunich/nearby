import { useState } from "react"

import { api } from "@/services/api"
import { Alert } from "react-native"

export function useFetchCoupon() {
  const [isLoading, setIsLoading] = useState(true)

  const [coupon, setCoupon] = useState()

  async function fetchCoupon(id: string) {
    try {
      let response = await api.patch(`/coupons/${id}`)

      Alert.alert("Coupon", response.data.coupon)

      setCoupon(response.data.coupon)

      setIsLoading(false)
    } catch (error) {
      console.log(error, "Erro ao buscar lugares.")
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return { coupon, setCoupon, isLoading, fetchCoupon }
}
