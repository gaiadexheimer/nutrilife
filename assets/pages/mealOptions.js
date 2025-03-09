import React from 'react';
import { Substituicoes } from './substituicoes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';



export function MealOptions({ route }) {
    const { mealType } = route.params;

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


    // Retrieve the meal options for the given mealType
    const options = mealOptions[mealType];
    const { proteinOptions, carbOptions, otherFoodsOptions, defaultProtein, defaultCarb } = options;

    // State for storing the selected options (Protein, Carb, Other)
    const [selectedProtein, setSelectedProtein] = useState(defaultProtein);
    const [selectedCarb, setSelectedCarb] = useState(defaultCarb);
    const [selectedOthers, setSelectedOthers] = useState([]);

    // Load saved options from AsyncStorage
    useEffect(() => {
        const loadSavedOptions = async () => {
            try {
                const savedProtein = await AsyncStorage.getItem(`${mealType}_protein`);
                const savedCarb = await AsyncStorage.getItem(`${mealType}_carb`);
                const savedOthers = await AsyncStorage.getItem(`${mealType}_others`);

                if (savedProtein) setSelectedProtein(savedProtein);
                if (savedCarb) setSelectedCarb(savedCarb);
                if (savedOthers) setSelectedOthers(JSON.parse(savedOthers));
            } catch (error) {
                console.error('Error loading saved options from AsyncStorage:', error);
            }
        };

        loadSavedOptions();
    }, [mealType]); // Run only once when the component mounts

    // Save options to AsyncStorage when they change
    const saveSelectedOptions = async (newProtein, newCarb, newOthers) => {
        try {
            await AsyncStorage.setItem(`${mealType}_protein`, newProtein);
            await AsyncStorage.setItem(`${mealType}_carb`, newCarb);
            await AsyncStorage.setItem(`${mealType}_others`, JSON.stringify(newOthers));
        } catch (error) {
            console.error('Error saving options to AsyncStorage:', error);
        }
    };

    // Handlers for changing selected options
    const handleProteinChange = (newProtein) => {
        setSelectedProtein(newProtein);
        saveSelectedOptions(newProtein, selectedCarb, selectedOthers);
    };

    const handleCarbChange = (newCarb) => {
        setSelectedCarb(newCarb);
        saveSelectedOptions(selectedProtein, newCarb, selectedOthers);
    };

    const handleOthersChange = (newOthers) => {
        setSelectedOthers(newOthers);
        saveSelectedOptions(selectedProtein, selectedCarb, newOthers);
    };

    return (
        <Substituicoes
            mealType={mealType}
            proteinOptions={proteinOptions}
            carbsOptions={carbOptions}
            otherFoodsOptions={otherFoodsOptions}
            selectedProtein={selectedProtein}
            selectedCarb={selectedCarb}
            selectedOthers={selectedOthers}
            onProteinChange={handleProteinChange}
            onCarbChange={handleCarbChange}
            onOthersChange={handleOthersChange}
        />
    );
}
