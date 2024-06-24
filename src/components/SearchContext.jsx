import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [isSearched, setIsSearched] = useState(false);

    return (
        <SearchContext.Provider value={{ isSearched, setIsSearched }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    return useContext(SearchContext);
}

SearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
