import { create } from "zustand";

const useEbooksStore = create((set, get) => ({
    // State
    ebooks: [],
    featured: [],
    trending: [],
    categories: [],
    loading: false,
    error: null,
    pagination: {
        currentPage: 1,
        totalPages: 1,
        total: 0,
    },
    filters: {
        category: "",
        search: "",
        sortBy: "createdAt",
        sortOrder: "desc",
    },

    // Actions
    setEbooks: ebooks => set({ ebooks, loading: false, error: null }),

    setFeatured: featured => set({ featured }),

    setTrending: trending => set({ trending }),

    setCategories: categories => set({ categories }),

    setLoading: loading => set({ loading }),

    setError: error => set({ error, loading: false }),

    setPagination: pagination => set({ pagination }),

    setFilters: filters =>
        set(state => ({
            filters: { ...state.filters, ...filters },
        })),

    clearFilters: () =>
        set({
            filters: {
                category: "",
                search: "",
                sortBy: "createdAt",
                sortOrder: "desc",
            },
        }),

    addEbook: ebook =>
        set(state => ({
            ebooks: [ebook, ...state.ebooks],
        })),

    updateEbook: (id, updates) =>
        set(state => ({
            ebooks: state.ebooks.map(ebook =>
                ebook._id === id ? { ...ebook, ...updates } : ebook
            ),
        })),

    removeEbook: id =>
        set(state => ({
            ebooks: state.ebooks.filter(ebook => ebook._id !== id),
        })),

    // Getters
    getEbookById: id => {
        const state = get();
        return state.ebooks.find(ebook => ebook._id === id);
    },

    getEbooksByCategory: category => {
        const state = get();
        return state.ebooks.filter(ebook => ebook.category === category);
    },
}));

export default useEbooksStore;
