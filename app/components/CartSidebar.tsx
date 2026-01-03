import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { setCartOpen, updateQuantity, removeFromCart } from "@/lib/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 5.0 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="relative">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 transition-opacity duration-300"
          onClick={() => dispatch(setCartOpen(false))}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-[400px] 
          bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] z-101
          transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-(--deep-green) text-white">
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} className="text-(--luxe-gold)" />
            <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
              {items.reduce((acc, item) => acc + item.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={() => dispatch(setCartOpen(false))}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                <ShoppingCart size={40} />
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold text-gray-900">Your cart is empty</p>
                <p className="text-gray-500 text-sm">Start adding products to your protocol</p>
              </div>
              <button
                onClick={() => dispatch(setCartOpen(false))}
                className="text-(--luxe-gold) font-bold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group flex gap-4 animate-in fade-in slide-in-from-right-4 duration-300"
                >
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-(--luxe-gold) font-bold mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center p-1 bg-gray-50 rounded-lg border border-gray-100">
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-8 text-center font-bold text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
                        >
                          <Plus size={14} />
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
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-500 text-sm">
              <span>Delivery Fee</span>
              <span className="font-semibold text-gray-900">${deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
              <span>Total</span>
              <span className="text-(--deep-green)">${total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            onClick={() => dispatch(setCartOpen(false))}
            className={`w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-sm ${items.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
          >
            Checkout Protocol
          </Link>

          <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-tighter">
            Secure SSL Encrypted Checkout
          </p>
        </div>
      </div>
    </div>
  );
}
