import React, { FunctionComponent, useState } from 'react';

const App: FunctionComponent = () => {
  // la valeur name est initialisée avec la valeur "React"
  const [name, setName] = useState<string>('React');
  // Cette fonction retourne une paire de deux éléments :
  // l'état actuel ('name')
  // et une fonction pour modifier la valeur de cet état ('setName()').
  return <h1>Bonjour {name} !</h1>;
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



