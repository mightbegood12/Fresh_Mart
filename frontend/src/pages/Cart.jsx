import { useCart } from "../context/CartContext";
export default function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <p className="uppercase text-2xl">your cart is empty</p>

      {cartItems.length === 0 ? (
        <div className=" flex items-center">
          <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
