import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set, get) => ({
            // State
            user: null,
            loading: false,

            // Actions
            setUser: userData => set({ user: userData, loading: false }),

            setLoading: isLoading => set({ loading: isLoading }),

            logout: () => set({ user: null, loading: false }),

            updateProfile: profileData =>
                set(state => ({
                    user: state.user ? { ...state.user, ...profileData } : null,
                })),

            // Getters
            isLoggedIn: () => {
                const state = get();
                return !!state.user;
            },

            isAdmin: () => {
                const state = get();
                return state.user?.role === "admin";
            },
        }),
        {
            name: "user-store",
            partialize: state => ({ user: state.user }),
        }
    )
);

export default useUserStore;
