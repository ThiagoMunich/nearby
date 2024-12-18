import { useState } from "react"

import { api } from "@/services/api"

export type PlaceProps = {
  latitude: number
  longitude: number
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
  phone: string
  rules: {
    id: string
    description: string
  }[]
}

export function useFetchMarket() {
  const [isLoading, setIsLoading] = useState(true)

  const [market, setMarket] = useState<PlaceProps>({} as PlaceProps)

  async function fetchMarket(id: string) {
    try {
      let response = await api.get(`/markets/${id}`)

      setMarket(response.data)

      setIsLoading(false)
    } catch (error) {
      console.log(error, "Erro ao buscar lugares.")
      setIsLoading(false)
    }
  }

  return { market, setMarket, isLoading, fetchMarket }
}
