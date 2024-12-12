import { api } from "@/services/api"
import { useState } from "react"

export function useFetchPlaces() {
  const [places, setPlaces] = useState([])

  async function fetchPlaces(category: string) {
    try {
      let response = await api.get(`/markets/category/${category}`)

      setPlaces(response.data)
    } catch (error) {
      console.log(error, "Erro ao buscar lugares.")
    }
  }

  return { places, setPlaces, fetchPlaces }
}
