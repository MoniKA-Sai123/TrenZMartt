import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="w-full md:w-1/4">
        <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex flex-col justify-between p-4 w-full md:w-3/4">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-green-500">${item.price}</p>
          <button onClick={removeFromCart} className="text-red-500 hover:text-red-700 bg-pink-100 rounded-full w-10 h-10 flex  flex-col items-center justify-center">
            <MdDelete size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;