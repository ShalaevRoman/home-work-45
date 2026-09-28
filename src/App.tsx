import { useState } from 'react'
import { Header } from './components/Header'
import { ProductFilterForm } from './components/ProductFilterForm'
import { ProductList } from './components/ProductList'
import { PRODUCTS } from './constants/products'
import { useProductFilter } from './hooks/useProductFilter'

function App() {
  const { search, category, filteredProducts, setSearch, setCategory } =
    useProductFilter(PRODUCTS)
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount((count) => count + 1)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Каталог товарів"
        subtitle="Демонстрація компонентів на Tailwind CSS"
        cartCount={cartCount}
      />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
        <ProductFilterForm
          search={search}
          category={category}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </main>
    </div>
  )
}

export default App