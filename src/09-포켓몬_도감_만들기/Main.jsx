import { useSelector } from "react-redux";
import Card from "./Card";

function Main() {
  const pokemonData = useSelector(state => state.pokemon.data);

  return(
    <ul className="pokemon-list">
      {
        pokemonData.map((item) => {
          return(
            <Card key={item.id} pokemon={item} />
          )
        })
      }
    </ul>
  )
}

export default Main;