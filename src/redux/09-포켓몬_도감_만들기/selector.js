import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) => createSelector(
  state => state.pokemon.data,
  (pokemon) => pokemon.find((e) => e.id === pokemonId)
)