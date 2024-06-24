import React from 'react';
import Heading from './Heading';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import { SearchProvider } from './SearchContext';

export default function Dashboard() {
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-start py-10">
            <div className="w-[60%] h-full overflow-y-auto flex flex-col gap-10 items-center justify-start">
                <Heading title="PokeDex" />
                <SearchProvider>
                    <SearchBar />
                    <PokeList />
                </SearchProvider>
            </div>
        </div>
    );
}
