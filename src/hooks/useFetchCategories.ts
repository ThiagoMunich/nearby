import { api } from "@/services/api"
import { useState } from "react"

export function useFetchCategories() {
  const [categories, setCategories] = useState([])

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")

      setCategories(data)
    } catch (error) {
      console.log("Erro ao buscar categorias.")
    }
  }

  return { categories, fetchCategories }
}
