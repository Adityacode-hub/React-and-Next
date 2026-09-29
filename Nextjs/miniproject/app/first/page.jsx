export default function First() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-zinc-900 p-10 shadow-2xl">

        {/* Icons Section */}
        <div className="flex items-center justify-center gap-4 mb-16">

          {/* AI */}
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-gray-400 text-sm">AI</span>
          </div>

          {/* Robot */}
          <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-2xl">🤖</span>
          </div>

          {/* Main Icon */}
          <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center border border-gray-700">
            <span className="text-4xl">✦</span>
          </div>

          {/* Meta */}
          <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-blue-500 font-bold text-xl">∞</span>
          </div>

          {/* Spark */}
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-blue-300">✦</span>
          </div>

        </div>

        {/* Content */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">
            Damn good card
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            A card that showcases a set of tools that you
            use to create your product.
          </p>
        </div>

      </div>

    </div>
  );
}