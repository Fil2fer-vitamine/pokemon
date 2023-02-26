import React, { FunctionComponent, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
  // la valeur name est initialisée avec la valeur "React"
  const [pokemons, setPokemons] = useState<Pokemon[]>(POKEMONS);
  // Cette fonction retourne une paire de deux éléments :
  // l'état actuel ('name')
  // et une fonction pour modifier la valeur de cet état ('setName()').
  return (
    <div>
      <h1>Pokédex</h1>
      <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
    </div>
  );
};

export default App;
/**
 *      DESTRUCTURING
 *
 * const App: FunctionComponent = () => {}
 *
 * est la même chose que :
 * let nameStateVariable = useState('React');
 * let name = nameStateVariable[0];
 * let setName = nameStateVariable[1];
 */
/**
 * En ce qui concerne le typage imposé par Typescript, le useState est
 * typé en 'string' au niveau de <>
 */
//

/**
 * Définir une variable d'état dans le composant App.tsx
 * !!! Correction : importation de mock-pokemon.ts et pokemon.ts
 * Initialiser cet état avec la liste de pokémon.
 * Typer cet état afin qu'il ait un tableau de pokemons.
 * Afficher le nombre de pokemons présents dans l'état du composant.
 */
