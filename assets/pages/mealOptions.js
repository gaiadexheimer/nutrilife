import React from 'react';
import { Substituicoes } from './substituicoes';
import { useState } from 'react';


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

export function MealOptions({ route }) {
    //const { proteinOptions, carbOptions, otherFoodsOptions, defaultProtein, defaultCarb } = mealOptions[mealType];
    const { mealType } = route.params;
    // Retrieve the meal options for the given mealType
    const options = mealOptions[mealType];
    const { proteinOptions, carbOptions, otherFoodsOptions, defaultProtein, defaultCarb } = options;

    return (
        <Substituicoes
            mealType={mealType}
            proteinOptions={proteinOptions}
            carbsOptions={carbOptions}
            otherFoodsOptions={otherFoodsOptions}
            defaultProtein={defaultProtein}
            defaultCarb={defaultCarb}
            defaultOthers={[otherFoodsOptions]}
        />
    );
}
