import React, { useEffect, useState } from 'react';

export default function SearchBar() {
    const pokemonTypes = [
        'Normal',
        'Fire',
        'Water',
        'Electric',
        'Grass',
        'Ice',
        'Fighting',
        'Poison',
        'Ground',
        'Flying',
        'Psychic',
        'Bug',
        'Rock',
        'Ghost',
        'Dragon',
        'Dark',
        'Steel',
        'Fairy',
    ];

    const pokemonTypesImage = [
        '/pokemon-types/normal.png',
        '/pokemon-types/fire.png',
        '/pokemon-types/water.png',
        '/pokemon-types/electric.png',
        '/pokemon-types/grass.png',
        '/pokemon-types/ice.png',
        '/pokemon-types/fighting.png',
        '/pokemon-types/poison.png',
        '/pokemon-types/ground.png',
        '/pokemon-types/flying.png',
        '/pokemon-types/psychic.png',
        '/pokemon-types/bug.png',
        '/pokemon-types/rock.png',
        '/pokemon-types/ghost.png',
        '/pokemon-types/dragon.png',
        '/pokemon-types/dark.png',
        '/pokemon-types/steel.png',
        '/pokemon-types/fairy.png',
    ];

    const handleTypeSelect = (item: string) => {
        if (sessionStorage.getItem('type')) {
            if (sessionStorage.getItem('type') === item) {
                sessionStorage.removeItem('type');
            } else {
                sessionStorage.setItem('type', item);
            }
        } else {
            sessionStorage.setItem('type', item);
        }
        setSearchModal(false);
    }

    const [search, setSearch] = useState('');
    const [searchModal, setSearchModal] = useState(false);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        checkIfSearched();
    }, [setSearchModal, searchModal]);

    function checkIfSearched() {
        if (sessionStorage.getItem('type')) {
            alert('Type: ' + sessionStorage.getItem('type'));
            setIsSearched(true);
        } else {
            setIsSearched(false);
        }
    }

    return (
        <div className="w-[60%] h-auto flex items-center justify-center border-2 border-slate-200 rounded-2xl">
            <button
                type="button"
                className="w-16 h-full flex items-center justify-center cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="lightgray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </button>
            <input
                type="text"
                placeholder="Enter Number or Name"
                className="w-full pl-3 h-12 rounded-xl active:border-none focus-within:outline-none"
            />
            <button
                type="button"
                className="w-16 h-full flex items-center justify-center cursor-pointer"
                onClick={() => setSearchModal(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 6l8 0" />
                    <path d="M16 6l4 0" />
                    <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 12l2 0" />
                    <path d="M10 12l10 0" />
                    <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 18l11 0" />
                    <path d="M19 18l1 0" />
                </svg>
            </button>

            {searchModal && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center backdrop-blur-sm justify-center h-full w-full">
                    <div className="w-[60%] h-[60%] bg-white flex flex-col items-center justify-center gap-5 rounded-3xl shadow-2xl border-2 border-slate-200">
                        <div
                            className="h-16 w-full flex items-center border-slate-200 border-b-2 justify-between px-6"
                            onClick={() => setSearchModal(false)}
                        >
                            <h3 className="m-0 text-xl font-semibold ">
                                Search By Types
                            </h3>
                            <span className="hover:scale-110 transition-all cursor-pointer h-full w-32 flex flex-col items-end justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </span>
                        </div>
                        <div className=" aspect-square rounded-2xl h-full w-full grid grid-cols-5 gap-5 p-8">
                            {pokemonTypes.map((type, index) => (
                                <div
                                    key={type}
                                    className="h-16 w-auto px-2 rounded-xl border-2 border-slate-50 flex items-center gap-2 justify-center text-center hover:scale-110 transition-all cursor-pointer" onClick={() => handleTypeSelect(type)}
                                >
                                    <img
                                        className="w-10 h-10"
                                        src={pokemonTypesImage[index]}
                                        alt=""
                                    />
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
