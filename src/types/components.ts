import type { CartLineItem, Product, ProductCategory } from './models'

export interface HeaderProps {
  title: string
  subtitle: string
  cartCount: number
  onCartClick: () => void
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

export interface CartPanelProps {
  isOpen: boolean
  items: CartLineItem[]
  total: number
  onClose: () => void
  onRemove: (productId: string) => void
}