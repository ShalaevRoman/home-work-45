import { useMemo, useState } from 'react'
import type { Product, ProductCategory } from '../types/models'

interface UseProductFilterResult {
  search: string
  category: ProductCategory | 'all'
  filteredProducts: Product[]
  setSearch: (value: string) => void
  setCategory: (value: ProductCategory | 'all') => void
}

export function useProductFilter(products: Product[]): UseProductFilterResult {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<ProductCategory | 'all'>('all')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(normalizedSearch)
      const matchesCategory = category === 'all' || product.category === category
      return matchesSearch && matchesCategory
    })
  }, [products, search, category])

  return { search, category, filteredProducts, setSearch, setCategory }
}