import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
// import { useLatestProductsQuery } from "../redux/api/productAPI";
// import { addToCart } from "../redux/reducer/cartReducer";
// import { CartItem } from "../types/types";

const Home = () => {
  interface Product {
    name: string;
    price: number;
    category: string;
    photo:string;
    _id?: string;
}

const products: Product[] = [
  { name: "Laptop", price: 999, category: "Electronics",photo:"https://t0.gstatic.com/images?q=tbn:ANd9GcQnJb3rwScgOAcWd4URu_wLavsROAIUkBFn5PjXYx4_s8XB5DpsP1i0s6bsij8p4WJq71dl" },
  { name: "Headphones", price: 99, category: "Electronics",photo:"https://t0.gstatic.com/images?q=tbn:ANd9GcQnJb3rwScgOAcWd4URu_wLavsROAIUkBFn5PjXYx4_s8XB5DpsP1i0s6bsij8p4WJq71dl" },
  { name: "T-shirt", price: 20, category: "Clothing",photo:"https://t0.gstatic.com/images?q=tbn:ANd9GcQnJb3rwScgOAcWd4URu_wLavsROAIUkBFn5PjXYx4_s8XB5DpsP1i0s6bsij8p4WJq71dl" },
  { name: "Book", price: 15, category: "Books",photo:"https://t0.gstatic.com/images?q=tbn:ANd9GcQnJb3rwScgOAcWd4URu_wLavsROAIUkBFn5PjXYx4_s8XB5DpsP1i0s6bsij8p4WJq71dl" },
  { name: "Sneakers", price: 80, category: "Footwear",photo:"https://t0.gstatic.com/images?q=tbn:ANd9GcQnJb3rwScgOAcWd4URu_wLavsROAIUkBFn5PjXYx4_s8XB5DpsP1i0s6bsij8p4WJq71dl" }
];
  
  // const { data, isLoading, isError } = useLatestProductsQuery("");

  // const dispatch = useDispatch();

  const addToCartHandler = () => {
    // if (cartItem.stock < 1) return toast.error("Out of Stock");
    // dispatch(addToCart(cartItem));
    // toast.success("Added to cart");
  };

  // if (isError) toast.error("Cannot Fetch the Products");

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
      
         { products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              // stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
            />
          ))}
   
      </main>
    </div>
  );
};

export default Home;