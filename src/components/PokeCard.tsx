export default function PokeCard() {
    return (
        <div className="h-40 w-40 aspect-square rounded-2xl overflow-hidden relative border-2 border-slate-100 shadow-2xl">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt=""
            />
            <div className="absolute bottom-0 right-0 w-full h-20 bg-slate-900">
                Pokemon Name
            </div>
        </div>
    );
}
