import Heading from './Heading';
import PokeCard from './PokeCard';
import SearchBar from './SearchBar';

export default function Dashboard() {
    const pokedex = {
        1: 'Bulbasaur',
        2: 'Ivysaur',
        3: 'Venusaur',
        4: 'Charmander',
        5: 'Charmeleon',
        6: 'Charizard',
        7: 'Squirtle',
        8: 'Wartortle',
        9: 'Blastoise',
        10: 'Caterpie',
        11: 'Metapod',
        12: 'Butterfree',
        13: 'Weedle',
        14: 'Kakuna',
        15: 'Beedrill',
        16: 'Pidgey',
        17: 'Pidgeotto',
        18: 'Pidgeot',
        19: 'Rattata',
        20: 'Raticate',
        21: 'Spearow',
        22: 'Fearow',
        23: 'Ekans',
        24: 'Arbok',
        25: 'Pikachu',
        26: 'Raichu',
        27: 'Sandshrew',
        28: 'Sandslash',
        29: 'Nidoran♀',
        30: 'Nidorina',
        31: 'Nidoqueen',
        32: 'Nidoran♂',
        33: 'Nidorino',
        34: 'Nidoking',
        35: 'Clefairy',
        36: 'Clefable',
        37: 'Vulpix',
        38: 'Ninetales',
        39: 'Jigglypuff',
        40: 'Wigglytuff',
        41: 'Zubat',
        42: 'Golbat',
        43: 'Oddish',
        44: 'Gloom',
        45: 'Vileplume',
        46: 'Paras',
        47: 'Parasect',
        48: 'Venonat',
        49: 'Venomoth',
        50: 'Diglett',
    };

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-start py-10">
            <div className="w-[60%] h-[70%] overflow-y-auto flex flex-col gap-10 items-center justify-start">
                <Heading title="PokeDex" />
                <SearchBar />
                <div className="w-full h-auto grid grid-cols-5 gap-8 p-8">
                    {Object.keys(pokedex).map((key, value) => (
                        <PokeCard
                            key={key}
                            name={pokedex[key]}
                            location={`/pokemons/${value}.png`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
