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
    // <div className="flex items-center justify-between">
    //   <img
    //     src={item.img}
    //     style={{ width: "125px", height: "75px", objectFit: "cover" }}
    //   />
    //   <div className="ml-4">
    //     <div className="font-bold">{item.title}</div>
    //     <div>{item.price}</div>
    //     <button
    //       onClick={() => removeFromCart(id)}
    //       className="px-1 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    //     >
    //       Eliminar
    //     </button>
    //   </div>
    // </div>
    <li key={item.id} className="flex py-6">
      <div className="h-24 w-34 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={"#"}>{item.title}</a>
            </h3>
            <p className="ml-4 text-blue-500">
              {parseInt(item.price) === 0.0 ? "Gratuito" : item.price}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Curso online</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
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
