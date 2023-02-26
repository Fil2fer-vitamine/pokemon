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

/**
 * ---
 * METHODES DE CYCLE DE VIE :
 * *****************************************************
 * componentDidMouth()
 * Méthode pour créer un composant lorsqu'il est inséré dans le DOM.
 * Cela nous permet de mettre en place certaines instructions
 * lors de l'initialisationdu composant, comme la récuparation
 * de données depuis un serveur distant par exemple ...
 * On parle de MONTAGE du composant en terme Reactjs.
 * ******************************************************
 * componentDidUpdate(prevProps, prevState)
 * A chaque modification détectée, le composant est mis à jour.
 * La méthode reçoit en paramètre 2 objets représentant les 'props'
 * et le 'state' avant la mise à jour.
 * Il y a opportunité de travailler sur le DOM une fois que le
 * composant a été mis à jour.
 * *******************************************************
 * componentWillUnmount()
 * Cette méthode est appelée juste avant que le composant est détruit
 * par React : il est détruit lorsqu'il est retiré du DOM ...
 * En terme React, cette étape est appelé le DEMONTAGE.
 * ---
 */
