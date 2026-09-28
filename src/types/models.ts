export type ProductCategory = 'electronics' | 'clothing' | 'home' | 'books'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: ProductCategory
  emoji: string
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface CartLineItem {
  product: Product
  quantity: number
}