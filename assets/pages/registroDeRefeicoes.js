import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Refeicao } from './refeicao';

export function RegistroRefeicoes() {
  const navigation = useNavigation();
  const numberOfMeals = 6;
  const mealsNumber = Array.from({ length: numberOfMeals });
  const mealName = ['Café da Manhã', 'Almoço', 'Lanche', 'Jantar', 'Ceia', 'Refeição Livre'];

  //O estado inicial de buttonSources vai ser um array de tamanho numberOfMeals, em que cada elemento do array vai ser a mesma imagem circle.png
  const [buttonSources, setButtonSources] = useState(Array(numberOfMeals).fill(require('../circle.png')));
  //Todos os elementos começam como 'unchecked', ou seja, setar todos os estados iniciam com false no array das meals
  const [checkedStates, setCheckedStates] = useState(Array(numberOfMeals).fill(false));

  /*const navigateToDestination = (destination, { mealType, defaultProtein, defaultCarb, defaultOthers = [] }) => {
    navigation.navigate(destination, { mealType, defaultProtein, defaultCarb, defaultOthers });
  };*/

  const navigateToDestination = (destination, { mealType }) => {
    navigation.navigate(destination, { mealType });
  };


  const handleButtonPress = (index) => {
    //criando cópias dos arrays buttonSources e checkedStates para que possam ser modificados sem alterar diretamente os arrays originais
    // [...buttonSources] cria uma nova cópia do array buttonSources, e [...checkedStates] cria uma nova cópia do array checkedStates
    const updatedButtonSources = [...buttonSources];
    const updatedCheckedStates = [...checkedStates];

    // muda o estado do botao no index. Se era false fica true e vice-versa
    updatedCheckedStates[index] = !updatedCheckedStates[index]; // Alterna o estado entre true/false
    updatedButtonSources[index] = updatedCheckedStates[index] ? require('../check.png') : require('../circle.png'); // Altera a imagem com base no estado

    //atualiza os arrays originais
    setButtonSources(updatedButtonSources);
    setCheckedStates(updatedCheckedStates);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}></View>

      <ScrollView contentContainerStyle={styles.page}>
        {mealsNumber.map((_, index) => (    //the .map() method iterates over each item of the mealsNumber array. First asrgument is ignored because it is not needed. Second argument is the index of the current item. This function return a TouchableOpacity component for each item in mealsNumber array.
          <TouchableOpacity
            onPress={() => navigateToDestination('Refeicao', { mealType: mealName[index] })}
            //ta pegando o index de mealsNumber e aplicando no array navigationDestinations, pra ir pra aquela destination do index que foi passado
            key={index}
            style={styles.mealBox}
          >
            <View style={styles.mealBoxContent}>
              <TouchableOpacity onPress={() => handleButtonPress(index)}>
                <Image source={buttonSources[index]} style={styles.circle} />
              </TouchableOpacity>
              <Text style={styles.mealText}>{mealName[index]}</Text>
            </View>

            <Image source={require('../expandir.png')} style={styles.expand} />

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#222221',
    alignItems: 'center',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#7B7B8E',
  },
  mealBox: {
    height: 80,
    width: 340,
    backgroundColor: 'rgba(178, 178, 207, 0.5)',
    borderRadius: 12,
    flexDirection: 'row',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
  mealBoxContent: {
    flexDirection: 'row',
  },
  mealText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 10,
  },
  expand: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});
