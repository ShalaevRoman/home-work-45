import type { FC } from 'react'
import type { CartPanelProps } from '../types/components'

export const CartPanel: FC<CartPanelProps> = ({ isOpen, items, total, onClose, onRemove }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30" onClick={onClose}>
      <div
        className="flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Кошик</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити кошик"
            className="text-slate-400 transition hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-slate-500">Кошик порожній</p>
        ) : (
          <ul className="flex flex-1 flex-col gap-3 overflow-y-auto">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex items-center gap-3 rounded-lg border border-slate-200 p-3"
              >
                <span className="text-2xl">{product.emoji}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{product.name}</p>
                  <p className="text-xs text-slate-500">
                    {quantity} × {product.price} ₴
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(product.id)}
                  className="text-sm font-medium text-red-500 transition hover:text-red-700"
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
          <span className="font-medium text-slate-700">Разом</span>
          <span className="text-lg font-bold text-slate-900">{total} ₴</span>
        </div>
      </div>
    </div>
  )
}