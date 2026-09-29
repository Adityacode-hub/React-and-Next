import {
  FaTrash,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

function CartItem({
  item,
  updateQuantity,
  removeItem,
}) {
  function handleIncrease() {
    updateQuantity(
      item.id,
      item.quantity + 1
    );
  }

  function handleDecrease() {
    if (item.quantity > 1) {
      updateQuantity(
        item.id,
        item.quantity - 1
      );
    }
  }

  function handleRemove() {
    removeItem(item.id);
  }

  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">

      <div className="mb-3">
        <h3 className="font-semibold text-gray-900">
          {item.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          ₹{item.price} each
        </p>
      </div>

      <div className="flex items-center justify-between">

        {/* Quantity controls */}
        <div className="flex items-center gap-2">

          <button
            onClick={handleDecrease}
            disabled={item.quantity === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaMinus className="text-xs" />
          </button>

          <span className="w-8 text-center font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={handleIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-gray-600 transition hover:bg-gray-100"
          >
            <FaPlus className="text-xs" />
          </button>

        </div>

        {/* Remove */}
        <button
          onClick={handleRemove}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50"
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default CartItem;