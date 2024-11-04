import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { MealOptions } from './mealOptions';

export function Refeicao() {

  const route = useRoute();
  //usando os parametros que enviei em registroDeRefeicoes
  const { mealType } = route.params;

  const mealDefaults = {
    'Café da Manhã': {
      defaultProtein: 'Ovos',
      defaultCarb: 'Pão',
      defaultOthers: ['Banana'],
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

  // Get defaults based on mealType
  const defaults = mealDefaults[mealType] || {};
  const { defaultProtein, defaultCarb, defaultOthers = [] } = defaults; //cria 3 novas variáveis separadas e atribui a elas os valores de cada default com base na mealtype

  const navigation = useNavigation();
  const [defaultOption, setDefaultOption] = useState(0);
  const numberOfOptions = 2;
  const mealOptions = Array.from({ length: numberOfOptions });
  const navigationDestination = ['MealOptions'];
  //const navigationDestinations = ['CafeDaManhaOptions', 'AlmocoOptions', 'LancheOptions', 'JantarOptions', 'CeiaOptions', 'LivreOptions'];

  /*const handleDefault = (index) => {
    if (defaultOption !== index) {
      setDefaultOption(index);
    } else {
      setDefaultOption(defaultOption);
    }
  };*/

  const handleDefault = (index) => {
    setDefaultOption(index);
  };

  const navigateToDestination = () => {
    navigation.navigate('MealOptions', { mealType });
  };


  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.mealTitle}>{mealType}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.page}>
        {mealOptions.map((_, index) => (
          <View style={defaultOption === index ? styles.defaultOptionBox : styles.nonDefaultOptionBox} key={index}>
            <View style={styles.optionHeader}>
              <Text style={styles.optionText}>Opcão {index + 1}</Text>
              <TouchableOpacity onPress={() => navigateToDestination(index)}>
                <Image source={require('../editar.png')} style={styles.edit} />
              </TouchableOpacity>

            </View>

            <View>
              <Text style={styles.defaultMealDescription}>{defaultProtein}</Text>
              <Text style={styles.defaultMealDescription}>{defaultCarb}</Text>
              {defaultOthers.map((food, index) => (
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
  header: {
    height: 100,
    width: "100%",
    backgroundColor: "#7B7B8E"
  },
  defaultOptionBox: {
    width: 350,
    height: 300,
    backgroundColor: 'rgba(131, 203, 134, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    justifyContent: 'space-between', // Align items in a column
    paddingVertical: 20 // Add padding between the content and the button
  },
  nonDefaultOptionBox: {
    width: 350,
    height: 300,
    backgroundColor: 'rgba(178, 178, 207, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    justifyContent: 'space-between', // Align items in a column
    paddingVertical: 20 // Add padding between the content and the button
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Align items at the start and end of the row
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