import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-gray-100">
        <FaShoppingCart className="text-5xl text-blue-500" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {product.name}
      </h3>

      <p className="mt-2 text-xl font-bold text-blue-600">
        ₹{product.price}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        <FaShoppingCart />
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;