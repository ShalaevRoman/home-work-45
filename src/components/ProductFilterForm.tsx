import type { ChangeEvent, FC } from 'react'
import { CATEGORY_LABELS } from '../constants/products'
import type { ProductFilterFormProps } from '../types/components'
import type { ProductCategory } from '../types/models'

export const ProductFilterForm: FC<ProductFilterFormProps> = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value)
  }

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value as ProductCategory | 'all')
  }

  return (
    <form className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Пошук товарів..."
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
      >
        {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </form>
  )
}