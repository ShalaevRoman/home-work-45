import type { Product, ProductCategory } from './models'

export interface HeaderProps {
  title: string
  subtitle: string
  cartCount: number
}

export interface ProductFilterFormProps {
  search: string
  category: ProductCategory | 'all'
  onSearchChange: (value: string) => void
  onCategoryChange: (value: ProductCategory | 'all') => void
}

export interface ProductCardProps {
  product: Product
  onAddToCart: (productId: string) => void
}

export interface ProductListProps {
  products: Product[]
  onAddToCart: (productId: string) => void
}