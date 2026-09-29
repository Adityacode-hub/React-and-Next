function ProductCard({ image, title, description, price, buttonText }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {/* Bottom section */}
        <div className="mt-6 flex items-center justify-between">

          <p className="text-xl font-bold text-white">
            {price}
          </p>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200">
            {buttonText}
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;