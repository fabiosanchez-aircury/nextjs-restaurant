"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";

export default function OrderSummary() {
  const order = useStore((state) => state.order);

  return (
    <aside className="lg:h-screen lg:overflow-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>

      {order.length === 0 ? (
        <p className="text-center my-10">El carrito esta vacío</p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item}></ProductDetails>
          ))}
        </div>
      )}
    </aside>
  );
}
