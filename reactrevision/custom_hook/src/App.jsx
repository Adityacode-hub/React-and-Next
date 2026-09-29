import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    cart,
    addToCart,
    updateQuantity,
    removeItem,
    total,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Header */}
      <header className="mx-auto mb-10 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Custom Hooks Store
        </h1>

        <p className="mt-2 text-gray-600">
          Learning useCart with React Custom Hooks
        </p>
      </header>

      {/* Main Content */}
      <main className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

        {/* Products */}
        <section className="lg:col-span-2">

          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">
              Products
            </h2>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {products.length} Products
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

        </section>

        {/* Cart */}
        <section>
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            total={total}
          />
        </section>

      </main>

    </div>
  );
}

export default App;