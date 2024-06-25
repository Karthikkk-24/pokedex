import React from 'react';
import { useParams } from 'react-router-dom';

const Pokemon: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <div className="h-[80vh] w-full rounded-tl-3xl rounded-tr-3xl bg-white relative z-50">
            <h1>Pokemon: {name}</h1>
        </div>
    );
};

export default Pokemon;
