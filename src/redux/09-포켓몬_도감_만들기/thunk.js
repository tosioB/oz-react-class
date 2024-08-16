import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplepokemonById = createAsyncThunk(
  'pokemon/fetchMultiplepokemonById',
  async (maxpokemonId) => {
    // 1~151까지의 배열 만들기
    const numberArray = Array.from({length: maxpokemonId}, (_, index) => {return index + 1});
    // console.log(numberArray); // [1,2,3,...151]

    const fetchAPI = async (pokemonId) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
      const data = await response.json();
      
      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === 'ko').name,
        description: data.flavor_text_entries.find((el) => el.language.name === 'ko').flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
      }
      return pokemonData;
    }
      return await Promise.all(numberArray.map((e) => {return fetchAPI(e)}))
  }
)