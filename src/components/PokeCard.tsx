import PropTypes from 'prop-types';

export default function PokeCard({
    name,
    location,
}: {
    name: string;
    location: string;
}) {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className="h-52 w-52 aspect-square rounded-xl overflow-hidden relative p-6 border-2 border-slate-100 bg-green-100">
                <img
                    src={location} alt={name}
                />
            </div>
            <h4 className="font-semibold text-xl uppercase">
                {name}
            </h4>
        </div>
    );
}

PokeCard.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
};
