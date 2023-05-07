import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import useOnlineCourses from "@/hooks/useOnlineCourses";

type CartItemProps = {
  id: number;
};

const CartItem = ({ id }: CartItemProps) => {
  const { data, loading, error } = useOnlineCourses();

  const { removeFromCart } = useShoppingCart();

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  const item = data.find((i: { id: number }) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-center justify-between">
      <img
        src={item.img}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="ml-4">
        <div className="font-bold">{item.title}</div>
        <div>{item.price}</div>
        <button
          onClick={() => removeFromCart(id)}
          className="px-1 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
