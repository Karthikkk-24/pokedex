import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pokemon: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    useEffect(() => {
        fetchPokemonData();
    }, []);
    
    const fetchPokemonData = async () => {
        try {
            const pokemonName = name?.toLowerCase();
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <div className="w-[80%] h-full flex items-center justify-center gap-10">
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    <div className="w-96 h-auto">
                        <img
                            src={`/public/pokemons/${name}.png`}
                            className="w-96 h-auto"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col items-start justify-center">
                    sjdfioushjifopjsopfjpsjfpo
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
