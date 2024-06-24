import React, { ReactNode, createContext, useContext, useState } from 'react';

// Define the shape of the context
interface SearchContextProps {
    isSearched: boolean;
    setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
    selectedType: string | null;
    setSelectedType: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with a default value of undefined
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
    children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
    const [isSearched, setIsSearched] = useState(false);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <SearchContext.Provider value={{ isSearched, setIsSearched, selectedType, setSelectedType }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
