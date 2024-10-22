import React from 'react';
import { Substituicoes } from './substituicoes';
import { useState } from 'react';

/*
const mealOptions = {
    'Café da Manhã': {
        proteinOptions: ['Ovos', 'Barra proteica', 'Whey', 'Milk'],
        carbOptions: ['Pão', 'Aveia', 'Tapioca'],
        defaultProtein: 'Ovos',
        defaultCarb: 'Pão',
        otherFoodsOptions: ['Queijo', 'Fruta', 'Requeijão', 'Suco', 'Pasta de amendoim'],
    },
    'Almoço': {
        proteinOptions: ['Frango', 'Peixe', 'Carne'],
        carbOptions: ['Arroz', 'Feijão', 'Macarrão'],
        defaultProtein: 'Frango',
        defaultCarb: 'Arroz',
        otherFoodsOptions: ['Salada', 'Fruta', 'Legumes'],
    },
    'Lanche': {
        proteinOptions: ['Iogurte', 'Barra de proteína'],
        carbOptions: ['Fruta', 'Biscoito'],
        defaultProtein: 'Iogurte',
        defaultCarb: 'Fruta',
        otherFoodsOptions: ['Biscoito', 'Fruta'],
    },
    'Jantar': {
        proteinOptions: ['Peito de frango', 'Salmão', 'Carne'],
        carbOptions: ['Quinoa', 'Batata'],
        defaultProtein: 'Peito de frango',
        defaultCarb: 'Batata',
        otherFoodsOptions: ['Salada', 'Fruta'],
    },
    'Ceia': {
        proteinOptions: ['Queijo', 'Ovos', 'Peito de peru'],
        carbOptions: ['Pão integral', 'Crackers'],
        defaultProtein: 'Queijo',
        defaultCarb: 'Pão integral',
        otherFoodsOptions: ['Iogurte', 'Fruta'],
    },
    'Livre': {
        proteinOptions: ['Carne'],
        carbOptions: ['Pão'],
        defaultProtein: 'Carne',
        defaultCarb: 'Pão',
        otherFoodsOptions: ['Batatas fritas'],
    }
};

export function MealOptions({ mealType }) {
    const { proteinOptions, carbOptions, otherFoodsOptions, defaultProtein, defaultCarb } = mealOptions[mealType];

    return (
        <Substituicoes
            title={mealType}
            proteinOptions={proteinOptions}
            carbsOptions={carbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein={defaultProtein}
            defaultCarb={defaultCarb}
            defaultOthers={['']}
        />
    );
}
    */

//Define protein and carb options for each meal type
const breakfastProteinOptions = ['Ovos', 'Barra proteica', 'Whey', 'Milk'];
const breakfastCarbOptions = ['Pão', 'Aveia', 'Tapioca'];
const lunchProteinOptions = ['Frango', 'Peixe', 'Carne'];
const lunchCarbOptions = ['Arroz', 'Feijão', 'Macarrão'];
const snackProteinOptions = ['Iogurte', 'Barra de proteína'];
const snackCarbOptions = ['Fruta', 'Biscoito'];
const dinnerProteinOptions = ['Peito de frango', 'Salmão', 'Carne'];
const dinnerCarbOptions = ['Quinoa', 'Batata'];
const supperProteinOptions = ['Queijo', 'Ovos', 'Peito de peru'];
const supperCarbOptions = ['Pão integral', 'Crackers']; 

// Meal Screen Components
export function CafeDaManhaOptions() {
    const otherFoodsOptions = ['Queijo', 'Fruta', 'Requeijão', 'Suco', 'Pasta de amendoim'];

    return (
        <Substituicoes
            title="Café da Manhã"
            proteinOptions={breakfastProteinOptions}
            carbsOptions={breakfastCarbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein="Ovos"
            defaultCarb="Pão"
            defaultOthers={['Queijo']} // Change to array
        />
    );
}

export function AlmocoOptions() {
    const otherFoodsOptions = ['Salada', 'Fruta', 'Legumes'];

    return (
        <Substituicoes
            title="Almoço"
            proteinOptions={lunchProteinOptions}
            carbsOptions={lunchCarbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein="Frango"
            defaultCarb="Arroz"
            defaultOthers={['Queijo']} // Change to array
        />
    );
}

export function LancheOptions() {
    const otherFoodsOptions = ['Biscoito', 'Fruta'];

    return (
        <Substituicoes
            title="Lanche" // Correct title
            proteinOptions={snackProteinOptions}
            carbsOptions={snackCarbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein="Iogurte" // Change as needed
            defaultCarb="Fruta" // Change as needed
            defaultOthers={['Barra de proteína']} // Change to array
        />
    );
}

export function JantarOptions() {
    const otherFoodsOptions = ['Salada', 'Fruta'];

    return (
        <Substituicoes
            title="Jantar" // Correct title
            proteinOptions={dinnerProteinOptions}
            carbsOptions={dinnerCarbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein="Peito de frango" // Change as needed
            defaultCarb="Batata" // Change as needed
            defaultOthers={['Vegetais assados']} // Change to array
        />
    );
}

export function CeiaOptions() {
    const otherFoodsOptions = ['Iogurte', 'Fruta'];

    return (
        <Substituicoes
            title="Ceia" // Correct title
            proteinOptions={supperProteinOptions}
            carbsOptions={supperCarbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein="Queijo" // Change as needed
            defaultCarb="Pão integral" // Change as needed
            defaultOthers={['Fruta']} // Change to array
        />
    );
}

export function LivreOptions() {
  const otherFoodsOptions = ['Iogurte', 'Fruta'];

  return (
      <Substituicoes
          title="Livre" // Correct title
          proteinOptions={supperProteinOptions}
          carbsOptions={supperCarbOptions}
          otherFoodsOptions={otherFoodsOptions}
          defaultProtein="Carne" // Change as needed
          defaultCarb="Pão" // Change as needed
          defaultOthers={['Batatas fritas']} // Change to array
      />
  );
}

// useDefaultOptions handles an array of default other foods
export const useDefaultOptions = () => {
  // Initialize state to hold default options for each meal type
  const [defaultProteins, setDefaultProteins] = useState({});
  const [defaultCarbs, setDefaultCarbs] = useState({});
  const [defaultOthers, setDefaultOthers] = useState({});

  const setDefaultOption = (mealType, protein, carb, others) => {
    setDefaultProteins((prev) => ({ ...prev, [mealType]: protein }));
    setDefaultCarbs((prev) => ({ ...prev, [mealType]: carb }));
    setDefaultOthers((prev) => ({ ...prev, [mealType]: others }));
  };

  return {
    defaultProteins,
    defaultCarbs,
    defaultOthers,
    setDefaultOption,
  };
};

