import { useState } from "react"

import { api } from "@/services/api"
import { CategoryProps } from "@/components/categories"

export function useFetchCategories() {
  const [categories, setCategories] = useState<CategoryProps[]>([])

  async function fetchCategories() {
    try {
      const response = await api.get("/categories")

      setCategories(response.data)
    } catch (error) {
      console.log(error, "Erro ao buscar categorias.")
    }
  }

  return { categories, setCategories, fetchCategories }
}
