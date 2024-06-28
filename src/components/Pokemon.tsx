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
        fetchPokemonData();
    }, []);

    const fetchPokemonData = async () => {
        try {
            const pokemonName = name?.toLowerCase();
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
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

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <div className="w-[80%] h-full flex items-center justify-center gap-10">
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    <div className="w-[30rem] h-[30rem] relative flex items-center justify-center">
                        <div
                            className="w-full h-full rounded-full absolute bg-gradient-radial from-green-200 via-green-100 to-transparent"
                        ></div>
                        <img
                            src={`/public/pokemons/${name}.png`}
                            className="w-96 h-auto z-10"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col items-start justify-center">
                    {pokemonName}
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
