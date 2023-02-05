import React from 'react';
import { MateriaInterface } from '../interfaces/MateriaInterface';


// export interface MateriasContextInterface {
//     materias: MateriaInterface[]
// }

export const MateriasContext = React.createContext<MateriaInterface[]>([]);