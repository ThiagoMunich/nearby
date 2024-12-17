import { useState } from "react"

import { api } from "@/services/api"
import { PlaceProps } from "@/components/place"

export function useFetchMarket() {
  const [isLoading, setIsLoading] = useState(true)

  const [market, setMarket] = useState<PlaceProps[]>([])

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
