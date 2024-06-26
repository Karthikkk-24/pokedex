import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const getTypeColor = (type : string) => {
    switch (type.toLowerCase()) {
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


const getBackgroundColor = (type : string) => {
    switch (type.toLowerCase()) {
        case 'normal':
            return 'bg-gray-50';
        case 'fire':
            return 'bg-red-50';
        case 'water':
            return 'bg-blue-50';
        case 'electric':
            return 'bg-yellow-50';
        case 'grass':
            return 'bg-green-50';
        case 'ice':
            return 'bg-cyan-50';
        case 'fighting':
            return 'bg-orange-50';
        case 'poison':
            return 'bg-purple-50';
        case 'ground':
            return 'bg-amber-50';
        case 'flying':
            return 'bg-indigo-50';
        case 'psychic':
            return 'bg-pink-50';
        case 'bug':
            return 'bg-lime-50';
        case 'rock':
            return 'bg-stone-50';
        case 'ghost':
            return 'bg-violet-50';
        case 'dragon':
            return 'bg-teal-50';
        case 'dark':
            return 'bg-neutral-50';
        case 'steel':
            return 'bg-slate-50';
        case 'fairy':
            return 'bg-rose-50';
        default:
            return 'bg-gray-50';
    }
};

export default function PokeCard({
    name,
    location,
    number,
    types,
}: {
    name: string;
    location: string;
    number: number;
    types: string[];
}) {

    const navigate = useNavigate();

    const handlePokeSubmit = () => {
        navigate(`/pokemon/${name.toLowerCase()}`);
    }

    return (
        <div onClick={handlePokeSubmit} className="flex flex-col items-center justify-center gap-5 cursor-pointer hover:scale-105 transition-all">
            <div className={`h-52 w-52 aspect-square rounded-xl overflow-hidden relative p-6 border-2 border-slate-50 ${getBackgroundColor(types[0])}`}>
                <img src={location} alt={name} />
            </div>
            <div className="flex flex-col items-start justify-start gap-1 w-full relative">
                <p className="m-0 text-left w-full">{number}</p>
                <h4 className="font-semibold text-left w-full m-0 text-md uppercase">
                    {name}
                </h4>
                <div className="absolute flex flex-col gap-1 items-end justify-end right-0">
                    {types.map((type) => (
                        <span
                            key={type}
                            className={`inline-block px-3 py-1 rounded-md text-xs font-medium capitalize ${getTypeColor(
                                type
                            )} text-slate-800`}
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

PokeCard.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    number: PropTypes.number,
    types: PropTypes.array,
};
