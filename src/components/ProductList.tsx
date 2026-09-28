import type { FC } from 'react'
import type { ProductListProps } from '../types/components'
import { ProductCard } from './ProductCard'

export const ProductList: FC<ProductListProps> = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <p className="rounded-xl bg-white p-8 text-center text-slate-500 shadow-sm">
        Товарів за вашим запитом не знайдено
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}