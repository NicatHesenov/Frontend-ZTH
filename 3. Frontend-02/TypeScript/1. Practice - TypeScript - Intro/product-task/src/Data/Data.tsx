import Iphone from "../assets/iphone.jpg";
import Mouse from "../assets/mouse.jpg";
import PlayStation from "../assets/playstation.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

const productData: Product[] = [
  {
    id: 1,
    name: "Iphone 14 Pro Max",
    price: 3000,
    image: Iphone,
    inStock: true,
  },
  {
    id: 2,
    name: "Magic Mouse",
    price: 200,
    image: Mouse,
    inStock: true,
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: 5000,
    image: PlayStation,
    inStock: false,
  },
];

export default productData;
