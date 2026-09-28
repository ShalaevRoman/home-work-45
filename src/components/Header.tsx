import type { FC } from 'react'
import type { HeaderProps } from '../types/components'

export const Header: FC<HeaderProps> = ({ title, subtitle, cartCount, onCartClick }) => {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <button
        type="button"
        onClick={onCartClick}
        className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
      >
        <span aria-hidden="true">🛒</span>
        <span className="font-medium">{cartCount}</span>
      </button>
    </header>
  )
}