import İphone from "../assets/iphone.jpg";
import Playstation from "../assets/playstation.jpg";
import Mouse from "../assets/mouse.jpg";

const Products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 2500,
    discountPrice: 2400, // Endirim var
    isStock: true,
    imageUrl: İphone,
  },
  {
    id: 2,
    name: "PlayStation 5",
    price: 1200,
    discountPrice: null, // Endirim yoxdur
    isStock: false, // Bitib
    imageUrl: Playstation,
  },
  {
    id: 3,
    name: "Logitech Mouse",
    price: 100,
    discountPrice: 80,
    isStock: true,
    imageUrl: Mouse,
  },
];

export default Products;
