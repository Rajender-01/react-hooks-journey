"use client";
import { useCart } from "@/src/hooks-learning/01-basic-hooks/useContext/CartContext";

const products = [
  { id: 1, name: "Shoes", price: 2000 },
  { id: 2, name: "T-Shirt", price: 1000 },
  { id: 3, name: "Watch", price: 5000 },
];

const CartExamplePage = () => {
  const { items, addToCart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-lg font-bold mb-4">Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center border p-3 mb-3"
        >
          <div>
            <h2 className="font-medium">{product.name}</h2>
            <p className="text-sm">₹{product.price}</p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="border px-3 py-1"
          >
            Add
          </button>
        </div>
      ))}

      <hr className="my-6" />

      <h2 className="text-lg font-bold mb-4">Cart</h2>

      {items.length === 0 && <p className="text-sm">Cart is empty</p>}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-3 mb-3"
        >
          <div>
            <h2 className="font-medium">{item.name}</h2>
            <p className="text-sm">₹{item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="border px-3 py-1"
          >
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <p className="mt-4 font-semibold">Total: ₹{totalPrice}</p>
      )}
    </div>
  );
};

export default CartExamplePage;