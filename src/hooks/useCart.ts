import { useMemo, useState } from 'react'
import type { CartItem, CartLineItem, Product } from '../types/models'

interface UseCartResult {
  lineItems: CartLineItem[]
  cartCount: number
  total: number
  addToCart: (productId: string) => void
  removeFromCart: (productId: string) => void
}

export function useCart(products: Product[]): UseCartResult {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (productId: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { productId, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  const lineItems = useMemo<CartLineItem[]>(() => {
    return items.reduce<CartLineItem[]>((result, item) => {
      const product = products.find((candidate) => candidate.id === item.productId)
      if (product) {
        result.push({ product, quantity: item.quantity })
      }
      return result
    }, [])
  }, [items, products])

  const cartCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])

  const total = useMemo(
    () => lineItems.reduce((sum, lineItem) => sum + lineItem.product.price * lineItem.quantity, 0),
    [lineItems],
  )

  return { lineItems, cartCount, total, addToCart, removeFromCart }
}