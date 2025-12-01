import "./App.css";
import "./components/ProductCard/productCard.css";

import iphoneImg from "./assets/iPhone.jpg";
import playstation from "./assets/playstation.jpg";
import LogitechMouse from "./assets/mouse.jpg";
import ProductCard from "./components/ProductCard/productCard";
function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 2500,
      discountPrice: 2400, // Endirim var
      isStock: true,
      imageUrl: iphoneImg,
    },
    {
      id: 2,
      name: "PlayStation 5",
      price: 1200,
      discountPrice: null, // Endirim yoxdur
      isStock: false, // Bitib
      imageUrl: playstation,
    },
    {
      id: 3,
      name: "Logitech Mouse",
      price: 100,
      discountPrice: 80,
      isStock: true,
      imageUrl: LogitechMouse,
    },
  ];
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          discountPrice={product.discountPrice}
          isStock={product.isStock}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
