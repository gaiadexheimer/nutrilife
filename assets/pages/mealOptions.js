import React from 'react';
import { Substituicoes } from './substituicoes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';


export function MealOptions({ route }) {
    const { mealType } = route.params;

    const mealOptions = {
        'Café da Manhã': {
            proteinOptions: ['2 Ovos', '15g Whey'],
            carbsOptions: ['50g Pão', 'Aveia'],
            otherOptions: ['Quinoa', 'Batata'],
            defaultProtein: '2 Ovos',
            defaultCarb: '50g Pão',
            defaultOther: 'Banana',
        },
        'Almoço': {
            proteinOptions: ['Frango', 'Peixe', 'Carne'],
            carbsOptions: ['Arroz', 'Feijão', 'Macarrão'],
            otherOptions: ['Quinoa', 'Batata'],
            defaultProtein: 'Frango',
            defaultCarb: 'Arroz',
            defaultOther: 'Banana',
        },
        'Lanche': {
            proteinOptions: ['Iogurte', 'Barra de proteína'],
            carbsOptions: ['Fruta', 'Biscoito'],
            otherOptions: ['Quinoa', 'Batata'],
            defaultProtein: 'Iogurte',
            defaultCarb: 'Fruta',
            defaultOther: 'Banana',
        },
        'Jantar': {
            proteinOptions: ['Peito de frango', 'Salmão', 'Carne'],
            carbsOptions: ['Quinoa', 'Batata'],
            otherOptions: ['Quinoa', 'Batata'],
            defaultProtein: 'Peito de frango',
            defaultCarb: 'Batata',
            defaultOther: 'Banana',
        },
        'Ceia': {
            proteinOptions: ['Queijo', 'Ovos', 'Peito de peru'],
            carbsOptions: ['Pão integral', 'Crackers'],
            otherOptions: ['Quinoa', 'Batata'],
            defaultProtein: 'Queijo',
            defaultCarb: 'Pão integral',
            defaultOther: 'Banana',
        }
    };


    // Retrieve the meal options for the given mealType
    const options = mealOptions[mealType];
    const { proteinOptions, carbsOptions, otherOptions, defaultProtein, defaultCarb, defaultOther } = options;

    // State for storing the selected options (Protein, Carb, Other)
    const [selectedProtein, setSelectedProtein] = useState(defaultProtein);
    const [selectedCarb, setSelectedCarb] = useState(defaultCarb);
    const [selectedOthers, setSelectedOthers] = useState(defaultOther);

    // Load saved options from AsyncStorage
    useEffect(() => {
        const loadSavedOptions = async () => {
            try {
                const savedProtein = await AsyncStorage.getItem(`${mealType}_protein`);
                const savedCarb = await AsyncStorage.getItem(`${mealType}_carb`);
                const savedOthers = await AsyncStorage.getItem(`${mealType}_other`);

                if (savedProtein) setSelectedProtein(savedProtein);
                if (savedCarb) setSelectedCarb(savedCarb);
                if (savedOthers) setSelectedOthers(savedOthers);
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
            await AsyncStorage.setItem(`${mealType}_other`, newOthers);
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

    //nessa pagina mealOptions eu retorno o que eu selecionei lá na página de substituicoes
    //the entire UI of MealOptions is delegated to the Substituicoes component.
    return (
        <Substituicoes
            mealType={mealType}
            proteinOptions={proteinOptions}
            carbsOptions={carbsOptions}
            otherOptions={otherOptions}
            selectedProtein={selectedProtein}
            selectedCarb={selectedCarb}
            selectedOthers={selectedOthers}
            onProteinChange={handleProteinChange}
            onCarbChange={handleCarbChange}
            onOthersChange={handleOthersChange}
        />
    );

}
