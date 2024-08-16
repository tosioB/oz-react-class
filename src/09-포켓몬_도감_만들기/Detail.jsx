import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../redux/09-포켓몬_도감_만들기/selector";

function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(pokemon)

  return(
    <>
      <div className="pokemon-detail">
        <span className="img-box">
          <img src={pokemon.front} alt={pokemon.name} />
        </span>
        <p className="number">{pokemon.id}번 포켓몬</p>
        <p className="name">{pokemon.name}</p>
        <p className="desc">{pokemon.description}</p>
      </div>
    </>
  )
}

export default Detail;