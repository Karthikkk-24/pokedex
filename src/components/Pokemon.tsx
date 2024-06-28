import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemon: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [pokemonName, setPokemonName] = useState<string>('');
    const [pokeOrder, setPokeOrder] = useState<number>(0);
    const [pokeTypes, setPokeTypes] = useState<string[]>([]);
    const [pokemonWeight, setPokemonWeight] = useState<number>(0);
    const [pokemonHeight, setPokemonHeight] = useState<number>(0);
    const [pokemonMoveSet, setPokemonMoveSet] = useState<string[]>([]);

    useEffect(() => {
        if (name) {
            fetchPokemonData();
        }
    }, [name]);

    const fetchPokemonData = async () => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            console.log(response.data);
            setPokeOrder(response.data.order);
            setPokemonName(response.data.name);
            setPokeTypes(
                response.data.types.map((type: any) => type.type.name)
            );
            setPokemonWeight(response.data.weight);
            setPokemonHeight(response.data.height);
            setPokemonMoveSet(
                response.data.moves.map((move: any) => move.move.name)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'normal':
                return 'bg-gray-200';
            case 'fire':
                return 'bg-red-200';
            case 'water':
                return 'bg-blue-200';
            case 'electric':
                return 'bg-yellow-200';
            case 'grass':
                return 'bg-green-200';
            case 'ice':
                return 'bg-cyan-200';
            case 'fighting':
                return 'bg-orange-200';
            case 'poison':
                return 'bg-purple-200';
            case 'ground':
                return 'bg-amber-200';
            case 'flying':
                return 'bg-indigo-200';
            case 'psychic':
                return 'bg-pink-200';
            case 'bug':
                return 'bg-lime-200';
            case 'rock':
                return 'bg-stone-200';
            case 'ghost':
                return 'bg-violet-200';
            case 'dragon':
                return 'bg-teal-200';
            case 'dark':
                return 'bg-neutral-300';
            case 'steel':
                return 'bg-slate-300';
            case 'fairy':
                return 'bg-rose-200';
            default:
                return 'bg-gray-200';
        }
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <div className="w-[80%] h-full flex items-center justify-center gap-10">
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    <div className="w-[30rem] h-[30rem] relative flex items-center justify-center">
                        <div className={`w-full h-full rounded-full absolute bg-gradient-radial ${getTypeColor(pokeTypes[0])} opacity-20`}></div>
                        <img
                            src={`/public/pokemons/${name}.png`}
                            className="w-96 h-auto z-10"
                            alt={pokemonName}
                        />
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col items-start justify-center">
                    <h1 className="text-2xl font-bold">{pokemonName.toUpperCase()}</h1>
                    <p>Order: {pokeOrder}</p>
                    <p>Types: {pokeTypes.join(', ').toUpperCase()}</p>
                    <p>Weight: {pokemonWeight} hg</p>
                    <p>Height: {pokemonHeight} dm</p>
                    <p>Moves: {pokemonMoveSet.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
