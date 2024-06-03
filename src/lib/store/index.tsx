import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import { get, set, del } from 'idb-keyval';
export interface Quote {
  content: string;
  author?: string;
  authorSlug?: string;
  dateModified?: string;
  _id?: string;
}

export interface QuoteStoreState {
  quotes: Quote[];
  addQuote: (newQuote: Quote) => void;
  removeAllQuotes: () => void;
}

export const useQuoteStore = create<QuoteStoreState>((set) => ({
  quotes: [],
  addQuote: (newQuote: any) =>
    set((state: any) => ({ quotes: [...state.quotes, newQuote] })),
  removeAllQuotes: () => set({ quotes: [] }),
}));

// Custom storage object
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

export const useBoundQuoteStore = create<QuoteStoreState>()(
  persist(
    (set, get) => ({
      quotes: [],
      addQuote: (newQuote) => set({ quotes: [...get().quotes, newQuote] }),
      removeAllQuotes: () => set({ quotes: [] }),
    }),
    {
      name: 'quote-storage', // unique name
      storage: createJSONStorage(() => storage),
    }
  )
);

export interface LangStore {
  lang: string;
  setLang: (newLang: string) => void;
}

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (newLang) => set({ lang: newLang }),
    }),
    {
      name: 'lang-storage', // unique name
      storage: createJSONStorage(() => storage),
    }
  )
);

