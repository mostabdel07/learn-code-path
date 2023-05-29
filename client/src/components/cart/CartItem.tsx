import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import useOnlineCourses from "@/hooks/useOnlineCourses";

type CartItemProps = {
  id: number;
};

const CartItem = ({ id }: CartItemProps) => {
  const { data, loading } = useOnlineCourses();

  const { removeFromCart } = useShoppingCart();

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  const item = data.find((i: { id: number }) => i.id === id);
  if (item == null) return null;

  return (
    <li key={item.id} className="space-y-4 md:flex py-6">
      <div className="h-24 w-34 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="text-gray-900">
            <h3 className="text-base font-medium">{item.title}</h3>

            <p className="text-gray-500">Curso en línea</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-base font-medium text-gray-700">
            {item.price} &euro;
          </p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-500"
              onClick={() => removeFromCart(id)}
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
