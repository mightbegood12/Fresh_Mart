import { useCart } from "../context/CartContext";
export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      {cartItems.length === 0 ? (
        <div className=" flex items-center">
          <p className="uppercase text-2xl">your cart is empty</p>
          <hr className="border-none h-[1.8px] w-7 bg-gray-600" />
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}
                <button
                  className="ml-2 w-[20px] text-[14px] py-[2px] border-2 text-white bg-red-600  hover:bg-red-500 ease-in duration-150 border-red-600 border-opacity-85 rounded-lg text-center cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
