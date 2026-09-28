import { useState } from 'react'
import { CartPanel } from './components/CartPanel'
import { Header } from './components/Header'
import { ProductFilterForm } from './components/ProductFilterForm'
import { ProductList } from './components/ProductList'
import { PRODUCTS } from './constants/products'
import { useCart } from './hooks/useCart'
import { useProductFilter } from './hooks/useProductFilter'

function App() {
  const { search, category, filteredProducts, setSearch, setCategory } =
    useProductFilter(PRODUCTS)
  const { lineItems, cartCount, total, addToCart, removeFromCart } = useCart(PRODUCTS)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        title="Каталог товарів"
        subtitle="Демонстрація компонентів на Tailwind CSS"
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
        <ProductFilterForm
          search={search}
          category={category}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      </main>
      <CartPanel
        isOpen={isCartOpen}
        items={lineItems}
        total={total}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  )
}

export default App