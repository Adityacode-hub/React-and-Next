import Card from "./components/Card";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 p-10">

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

        <Card
          image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
          title="Coffee Mug"
          description="Premium ceramic mug for coffee lovers."
          price="$12"
          buttonText="Buy Now"
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
          title="Classic Burger"
          description="Juicy grilled burger with fresh ingredients."
          price="$15"
          buttonText="Buy Now"
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
          title="Headphones"
          description="Premium headphones with great sound."
          price="$20"
          buttonText="Buy Now"
        />

      </div>

    </div>
  );
}

export default App;