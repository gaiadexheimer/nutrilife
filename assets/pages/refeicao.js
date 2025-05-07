import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Refeicao() {
  const route = useRoute();
  const { mealType } = route.params; // Get meal type from route params. from navigation

  const [protein, setProtein] = useState('');
  const [carb, setCarb] = useState('');
  const [others, setOthers] = useState('');

  const mealDefaults = {
    'Café da Manhã': {
      defaultProtein: 'Whey',
      defaultCarb: 'Pão',
      defaultOther: 'Porção de frutas com granola',
    },
    'Almoço': {
      defaultProtein: 'Carne',
      defaultCarb: 'Arroz',
      defaultOther: 'Salada + legumes',
    },
    'Lanche': {
      defaultProtein: 'Atum',
      defaultCarb: 'Biscoito',
      defaultOther: 'Fruta',
    },
    'Jantar': {
      defaultProtein: 'Peixe',
      defaultCarb: 'Batata',
      defaultOther: 'Legumes',
    },
    'Ceia': {
      defaultProtein: 'Peixe',
      defaultCarb: 'Batata',
      defaultOther: 'Salada',
    }
  };

  // Load saved data from AsyncStorage when component mounts or comes back into focus
  useFocusEffect(
    React.useCallback(() => {
      const loadSavedData = async () => {
        try {
          const savedProtein = await AsyncStorage.getItem(`${mealType}_protein`);
          const savedCarb = await AsyncStorage.getItem(`${mealType}_carb`);
          const savedOthers = await AsyncStorage.getItem(`${mealType}_other`);

          setProtein(savedProtein || mealDefaults[mealType]?.defaultProtein || '');
          setCarb(savedCarb || mealDefaults[mealType]?.defaultCarb || '');
          setOthers(savedOthers || mealDefaults[mealType]?.defaultOther || '');
        } catch (error) {
          console.log('Error loading saved data', error);
        }
      };

      loadSavedData(); // Load saved data from AsyncStorage when screen is focused
    }, [mealType]) // This will run whenever 'mealType' changes
  );

  const navigation = useNavigation();

  const navigateToDestination = () => {
    navigation.navigate('MealOptions', { mealType });
  };

  const handleRegisterMeal = async () => {
    try {
      // Load the existing checked states
      const savedCheckedStates = await AsyncStorage.getItem('checkedStates');
      let parsedCheckedStates = savedCheckedStates ? JSON.parse(savedCheckedStates) : Array(5).fill(false);

      // Find the index of the current meal
      const mealNameList = ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar', 'Ceia'];
      const mealIndex = mealNameList.indexOf(mealType);

      if (mealIndex !== -1) {
        parsedCheckedStates[mealIndex] = true; // Mark the meal as checked
        await AsyncStorage.setItem('checkedStates', JSON.stringify(parsedCheckedStates));
      }
    } catch (error) {
      console.error('Error registering meal:', error);
    }
  };


  return (
    <View style={styles.page}>
      <View contentContainerStyle={styles.page}>
        <View style={styles.defaultOptionBox}>

          <View style={styles.optionHeader}>
            <TouchableOpacity onPress={() => navigateToDestination(mealType)}>
              <Image source={require('../editar.png')} style={styles.edit} />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.defaultMealDescription}>{protein}</Text>
            <Text style={styles.defaultMealDescription}>{carb}</Text>
            <Text style={styles.defaultMealDescription}>{others}</Text>
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterMeal}>
            <Text style={styles.registerButtonText}>Registrar esta refeição</Text>
          </TouchableOpacity>


        </View>

      </View>
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
    backgroundColor: 'rgba(178, 178, 207, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    paddingVertical: 20
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30
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
  },
  registerButton: {
    backgroundColor: 'rgba(154, 189, 146, 1)',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 70,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }

});
