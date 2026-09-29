import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

function Cart({
  cart,
  updateQuantity,
  removeItem,
  total,
}) {
  if (cart.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <FaShoppingCart className="mx-auto mb-4 text-5xl text-gray-300" />

        <h2 className="text-xl font-semibold text-gray-800">
          Your cart is empty
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

      <div className="mb-6 flex items-center gap-3">
        <FaShoppingCart className="text-2xl text-blue-600" />

        <h2 className="text-2xl font-bold text-gray-900">
          Your Cart
        </h2>

        <span className="ml-auto rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {cart.length}
        </span>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-5">

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Total
          </span>

          <span className="text-2xl font-bold text-gray-900">
            ₹{total.toFixed(2)}
          </span>
        </div>

        <button className="mt-5 w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-800">
          Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;