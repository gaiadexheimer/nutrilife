import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Refeicao() {
  const route = useRoute();
  const { mealType } = route.params; // Get meal type from route params

  const [protein, setProtein] = useState('');
  const [carb, setCarb] = useState('');
  const [others, setOthers] = useState([]);

  const mealDefaults = {
    'Café da Manhã': {
      defaultProtein: 'Ovos',
      defaultCarb: 'Pão',
      defaultOthers: ['Banana', 'Uvas'],
    },
    'Almoço': {
      defaultProtein: 'Carne',
      defaultCarb: 'Arroz',
      defaultOthers: ['Feijão', 'Salada'],
    },
    'Lanche': {
      defaultProtein: 'Atum',
      defaultCarb: 'Biscoito',
      defaultOthers: ['Fruta'],
    },
    'Jantar': {
      defaultProtein: 'Peixe',
      defaultCarb: 'Batata',
      defaultOthers: ['Legumes'],
    },
    'Refeição Livre': {
      defaultOthers: [],
    },
  };

  // Load saved data from AsyncStorage when component mounts or comes back into focus
  useFocusEffect(
    React.useCallback(() => {
      const loadSavedData = async () => {
        try {
          const savedProtein = await AsyncStorage.getItem(`${mealType}_protein`);
          const savedCarb = await AsyncStorage.getItem(`${mealType}_carb`);
          const savedOthers = await AsyncStorage.getItem(`${mealType}_others`);

          setProtein(savedProtein || mealDefaults[mealType]?.defaultProtein || '');
          setCarb(savedCarb || mealDefaults[mealType]?.defaultCarb || '');
          setOthers(savedOthers ? JSON.parse(savedOthers) : mealDefaults[mealType]?.defaultOthers || []);
        } catch (error) {
          console.log('Error loading saved data', error);
        }
      };

      loadSavedData(); // Load saved data from AsyncStorage when screen is focused
    }, [mealType]) // This will run whenever `mealType` changes
  );

  const navigation = useNavigation();
  const [defaultOption, setDefaultOption] = useState(0);
  const numberOfOptions = 2;
  const mealOptions = Array.from({ length: numberOfOptions });

  const handleDefault = (index) => {
    setDefaultOption(index);
  };

  const navigateToDestination = () => {
    navigation.navigate('MealOptions', { mealType });
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.page}>
        {mealOptions.map((_, index) => (
          <View style={defaultOption === index ? styles.defaultOptionBox : styles.nonDefaultOptionBox} key={index}>
            <View style={styles.optionHeader}>
              <Text style={styles.optionText}>Opção {index + 1}</Text>
              <TouchableOpacity onPress={() => navigateToDestination(index)}>
                <Image source={require('../editar.png')} style={styles.edit} />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.defaultMealDescription}>{protein}</Text>
              <Text style={styles.defaultMealDescription}>{carb}</Text>
              {others.map((food, index) => (
                <Text style={styles.defaultMealDescription} key={index}>{food}</Text>
              ))}
            </View>

            <TouchableOpacity onPress={() => handleDefault(index)} style={defaultOption === index ? styles.defaultOptionButton : styles.nonDefaultOptionButton}>
              <Text style={defaultOption === index ? styles.defaultOption : styles.nonDefaultOption}>
                {defaultOption === index ? "Padrão" : "Tornar Padrão"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: "#222221",
    alignItems: 'center'
  },
  defaultOptionBox: {
    width: 350,
    height: 300,
    backgroundColor: 'rgba(131, 203, 134, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  nonDefaultOptionBox: {
    width: 350,
    height: 300,
    backgroundColor: 'rgba(178, 178, 207, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 100,
  },
  edit: {
    height: 30,
    width: 30
  },
  optionText: {
    fontSize: 20,
    color: 'white'
  },
  defaultMealDescription: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    marginLeft: 50
  },
  defaultOptionButton: {
    backgroundColor: 'rgba(131, 203, 134, 0.3)',
    width: 220,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  nonDefaultOptionButton: {
    backgroundColor: 'rgba(178, 178, 207, 0.3)',
    width: 220,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  defaultOption: {
    fontSize: 18,
    color: "white"
  },
  nonDefaultOption: {
    fontSize: 18,
    color: "white"
  }
});
