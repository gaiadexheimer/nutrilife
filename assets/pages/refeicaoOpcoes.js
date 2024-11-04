// refeicaoOpcoes.js
import React from 'react';
import { Substituicoes } from './substituicoes';
import { useDefaultOptions } from './mealOptions'; // Import the hook to manage default options

export function CafeDaManha() {
  const { defaultProteins, defaultCarbs, defaultOthers } = useDefaultOptions(); // Get the default options from the hook
  const breakfastProteinOptions = ['Ovos', 'Barra proteica', 'Whey', 'Milk'];
  const breakfastCarbOptions = ['Pão', 'Aveia', 'Tapioca'];
  const mealType = "Café da Manhã";
  const defaultProtein = defaultProteins[mealType];
  const defaultCarb = defaultCarbs[mealType];
  const defaultOther = defaultOthers[mealType];

  return (
    <Substituicoes
      title="Café da Manhã"
      mealType={mealType}
      defaultProtein={defaultProtein}
      defaultCarb={defaultCarb}
      defaultOther={defaultOther}
      proteinOptions={breakfastProteinOptions}
      carbsOptions={breakfastCarbOptions} // Adjust the options based on your carb/protein data
    />
  );
}

export function Almoco() {
  const { defaultProteins, defaultCarbs } = useDefaultOptions();
  const lunchCarbOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
  const lunchProteinOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
  const mealType = "Almoço";
  const defaultProtein = defaultProteins[mealType];
  const defaultCarb = defaultCarbs[mealType];

  return (
    <Substituicoes
      title="Almoço"
      mealType={mealType}
      defaultProtein={defaultProtein}
      defaultCarb={defaultCarb}
      proteinOptions={lunchProteinOptions}
      carbsOptions={lunchCarbOptions}
    />
  );
}

export function Lanche() {
  const { defaultProteins, defaultCarbs, defaultOthers } = useDefaultOptions();
  const snackCarbOptions = ['Opção 1', 'Opção 2'];
  const snackProteinOptions = ['Opção 1', 'Opção 2'];
  const mealType = "Lanche";
  const defaultProtein = defaultProteins[mealType];
  const defaultCarb = defaultCarbs[mealType];

  return (
    <Substituicoes
      title="Lanche"
      mealType={mealType}
      defaultProtein={defaultProtein}
      defaultCarb={defaultCarb}
      proteinOptions={snackProteinOptions}
      carbsOptions={snackCarbOptions}
    />
  );
}

export function Jantar() {
  const { defaultProteins, defaultCarbs, defaultOthers } = useDefaultOptions();
  const dinnerCarbOptions = ['Opção 1', 'Opção 2'];
  const dinnerProteinOptions = ['Opção 1', 'Opção 2'];
  const mealType = "Jantar";
  const defaultProtein = defaultProteins[mealType];
  const defaultCarb = defaultCarbs[mealType];

  return (
    <Substituicoes
      title="Jantar"
      mealType={mealType}
      defaultProtein={defaultProtein}
      defaultCarb={defaultCarb}
      proteinOptions={dinnerProteinOptions}
      carbsOptions={dinnerCarbOptions}
    />
  );
}

export function Ceia() {
  const { defaultProteins, defaultCarbs, defaultOthers } = useDefaultOptions();
  const supperCarbOptions = ['Opção 1', 'Opção 2'];
  const supperProteinOptions = ['Opção 1', 'Opção 2'];
  const mealType = "Ceia";
  const defaultProtein = defaultProteins[mealType];
  const defaultCarb = defaultCarbs[mealType];

  return (
    <Substituicoes
      title="Ceia"
      mealType={mealType}
      defaultProtein={defaultProtein}
      defaultCarb={defaultCarb}
      proteinOptions={supperProteinOptions}
      carbsOptions={supperCarbOptions}
    />
  );
}
