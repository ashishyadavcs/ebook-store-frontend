import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set, get) => ({
            // State
            items: [],
            loading: false,

            // Actions
            addItem: item =>
                set(state => {
                    const existingItem = state.items.find(i => i._id === item._id);
                    if (existingItem) {
                        return {
                            items: state.items.map(i =>
                                i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
                            ),
                        };
                    } else {
                        return {
                            items: [...state.items, { ...item, quantity: 1 }],
                        };
                    }
                }),

            removeItem: itemId =>
                set(state => ({
                    items: state.items.filter(item => item._id !== itemId),
                })),

            updateQuantity: (itemId, quantity) =>
                set(state => ({
                    items:
                        quantity > 0
                            ? state.items.map(item =>
                                  item._id === itemId ? { ...item, quantity } : item
                              )
                            : state.items.filter(item => item._id !== itemId),
                })),

            clearCart: () => set({ items: [] }),

            setLoading: isLoading => set({ loading: isLoading }),

            // Getters
            getTotalItems: () => {
                const state = get();
                return state.items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                const state = get();
                return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
            },

            getItemCount: itemId => {
                const state = get();
                const item = state.items.find(i => i._id === itemId);
                return item ? item.quantity : 0;
            },
        }),
        {
            name: "cart-store",
            partialize: state => ({ items: state.items }),
        }
    )
);

export default useCartStore;
