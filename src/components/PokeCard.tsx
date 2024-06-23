import PropTypes from 'prop-types';

export default function PokeCard({
    name,
    location,
    number,
}: {
    name: string;
    location: string;
    number: number;
}) {
    return (
        <div className="flex flex-col items-center justify-center gap-5 cursor-pointer hover:scale-105 transition-all">
            <div className="h-52 w-52 aspect-square rounded-xl overflow-hidden relative p-6 border-2 border-slate-50 bg-green-50">
                <img src={location} alt={name} />
            </div>
            <div className='flex flex-col items-start justify-start gap-1 w-full'>
                <p className="m-0 text-left w-full">{number}</p>
                <h4 className="font-semibold text-left w-full m-0 text-xl uppercase">
                    {name}
                </h4>
            </div>
        </div>
    );
}

PokeCard.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    number: PropTypes.number,
};
