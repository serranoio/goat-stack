export declare const useRandomQuote: () => {
    data: any;
    isLoading: boolean;
    error: unknown;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<any, unknown>>;
};
