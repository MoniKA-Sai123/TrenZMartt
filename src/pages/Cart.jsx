import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold">Your Cart Summary</h2>
            <p className="text-gray-600 mt-2">Total Items: {cart.length}</p>
            <p className="text-lg font-bold text-gray-800 mt-4">Total Amount: ${totalAmount}</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-2xl font-bold">Cart Empty</h1>
          <Link to="/">
            <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
