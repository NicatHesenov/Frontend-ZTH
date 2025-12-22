import { useState } from "react";
import "./App.css";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import Navbar from "./components/header/Navbar";
import CartItem from "./MainLayout/CartSidebar/Cartİtem/CartItem";
import Laptop from "./assets/modern-laptop-workspace.png";
import MobilePhone from "./assets/modern-smartphone.png";
import Book from "./assets/open-book-library.png";
import Camera from "./assets/vintage-camera-still-life.png";
import ProdcutList from "./MainLayout/ProductSection/ProductList/ProdcutList";

function App() {
  const [selectCategory, setSelectCategory] = useState("Hamısı");
  const [product, setProduct] = useState([]);

  const data = [
    {
      id: 1,
      imgUrl: Laptop,
      name: "Laptop",
      price: 1200,
      type: "Elektronika",
    },
    {
      id: 2,
      imgUrl: MobilePhone,
      name: "Telefon",
      price: 800,
      type: "Elektronika",
    },
    {
      id: 3,
      imgUrl: Book,
      name: "Kitab",
      price: 25,
      type: "Təhsil",
    },
    {
      id: 4,
      imgUrl: Camera,
      name: "Kamera",
      price: 500,
      type: "Elektronika",
    },
  ];

  const categoryFilter =
    selectCategory === "Hamısı"
      ? data
      : data.filter((item) => item.type === selectCategory);

  const addToCart = (clickedProduct) => {
    setProduct((prev) => {
      const exists = prev.find((item) => item.id === clickedProduct.id);

      if (exists) {
        return prev.map((item) =>
          item.id === clickedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...clickedProduct, quantity: 1 }];
    });
  };

  const onIncrement = (id) => {
    setProduct((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onDecrement = (id) => {
    setProduct((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const onRemove = (id) => {
    setProduct((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = product.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <CategoryFilter
        activeCategory={selectCategory}
        onCategoryChange={setSelectCategory}
      />

      <div className="cart-contianer">
        <CartItem
          cartItem={product}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
          totalAmount={totalAmount}
        />

        <ProdcutList product={categoryFilter} onAdd={addToCart} />
      </div>
    </>
  );
}

export default App;
