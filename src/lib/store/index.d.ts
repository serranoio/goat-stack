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
export declare const useQuoteStore: import("zustand").UseBoundStore<import("zustand").StoreApi<QuoteStoreState>>;
export declare const useBoundQuoteStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<QuoteStoreState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<QuoteStoreState, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: QuoteStoreState) => void) => () => void;
        onFinishHydration: (fn: (state: QuoteStoreState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<QuoteStoreState, unknown>>;
    };
}>;
export interface LangStore {
    lang: string;
    setLang: (newLang: string) => void;
}
export declare const useLangStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<LangStore>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<LangStore, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: LangStore) => void) => () => void;
        onFinishHydration: (fn: (state: LangStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<LangStore, unknown>>;
    };
}>;
