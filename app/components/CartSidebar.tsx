"use client";

import { X, Minus, Plus, ShoppingCart } from "lucide-react";

export default function CartSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  // Fake placeholder items (UI only)
  const items = [
    {
      id: 1,
      name: "Sample Product",
      price: 39.99,
      quantity: 1,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Another Product",
      price: 19.99,
      quantity: 2,
      picture: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-90"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 
          bg-white shadow-xl z-100
          transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-(--dark-green)">
          <h2 className="text-xl font-bold text-(--black)">Your Cart</h2>

          <button onClick={() => setOpen(false)} className="text-(--black)">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto flex-1">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingCart size={50} />
              <p className="mt-2 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-(--black)">
                          {item.name}
                        </h3>

                        <button className="text-gray-400">
                          <X size={18} />
                        </button>
                      </div>

                      <p className="text-(--gold) font-semibold mt-1">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <button className="w-7 h-7 flex items-center justify-center bg-(--gold) text-(--black) rounded-full">
                          <Minus size={16} />
                        </button>

                        <span className="font-semibold text-(--black)">
                          {item.quantity}
                        </span>

                        <button className="w-7 h-7 flex items-center justify-center bg-(--gold) text-(--black) rounded-full">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        <div className="p-5 border-t border-(--dark-green)">
          <div className="flex justify-between text-(--black) mb-2">
            <span>Subtotal</span>
            <span className="font-bold">$79.98</span>
          </div>

          <div className="flex justify-between text-(--black)">
            <span>Delivery Fee</span>
            <span className="font-bold">$5.00</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-(--black) border-t mt-4 pt-3">
            <span>Total</span>
            <span className="text-(--gold)">$84.98</span>
          </div>

          <button className="w-full mt-4 py-3 bg-(--gold) text-(--black) rounded-md font-semibold hover:opacity-90 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
