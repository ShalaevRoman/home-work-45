import type { FC } from 'react'
import { CATEGORY_LABELS } from '../constants/products'
import type { ProductCardProps } from '../types/components'

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id)
  }

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-slate-100 text-5xl">
        {product.emoji}
      </div>
      <span className="mb-1 w-fit rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
        {CATEGORY_LABELS[product.category]}
      </span>
      <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
      <p className="mb-4 flex-1 text-sm text-slate-500">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-slate-900">{product.price} ₴</span>
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Додати в кошик
        </button>
      </div>
    </article>
  )
}