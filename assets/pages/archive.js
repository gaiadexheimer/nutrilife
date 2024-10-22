import { View, StyleSheet, Text, ScrollView, Image} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function CafeDaManha(){

  const navigation = useNavigation();

  const numberOfOptions = 3;
  const optionsList = Array.from({ length: numberOfOptions });
  const optionNumber = ['Opção 1', 'Opção 2', 'Opção 3']
  const [defaultOption, setDefaultOption] = useState(0);
  const navigationDestinations = ['SubstituicoesCafeDaManha', 'SubstituicoesCafeDaManha', 'SubstituicoesCafeDaManha'];

  const handleDefault = (index) => {
    if (defaultOption !== index) {
        setDefaultOption(index);
    }else{
        setDefaultOption(defaultOption)
    }
  }

  const navigateToDestination = (index) => {
    const destination = navigationDestinations[index];
    navigation.navigate(destination);
  }

  return(
    <View style={styles.page}>
        <View style={styles.header}></View>
        <ScrollView contentContainerStyle={styles.page}>
        {optionsList.map((_, index) => (
            <View style={defaultOption === index ? styles.defaultOptionBox : styles.nonDefaultOptionBox} key={index}>
                <View style={styles.optionHeader}>
                    <Text style={styles.optionText}>{optionNumber[index]}</Text>
                    <TouchableOpacity 
                    onPress={() => {navigateToDestination(index)}} >
                        <Image
                            source={require('../editar.png')}
                            style={styles.edit}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => handleDefault(index)} 
                    style={defaultOption === index ? styles.defaultOptionButton : styles.nonDefaultOptionButton}>
                    <Text style={defaultOption === index ? styles.defaultOption : styles.nonDefaultOption}>
                    {defaultOption === index ? "Padrão" : "Tornar Padrão"}
                    </Text>
                </TouchableOpacity>
            </View>
        ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flexGrow: 1,
    backgroundColor: "#222221",
    alignItems: 'center'
  },
  header:{
    height: 100,
    width: "100%",
    backgroundColor: "#7B7B8E"
  },
  defaultOptionBox:{
    width: 350,
    height: 300,
    backgroundColor: 'rgba(131, 203, 134, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    flexDirection: 'column',
    gap: 170
  },
  nonDefaultOptionBox:{
    width: 350,
    height: 300,
    backgroundColor: 'rgba(178, 178, 207, 0.5)',
    marginTop: 25,
    borderRadius: 40,
    flexDirection: 'column',
    gap: 170
  },
  optionHeader:{
    flexDirection: 'row',
    gap: 110,
    marginTop: 20,
    justifyContent: 'space-evenly'
  },
  edit:{
    height: 30,
    width: 30
  },
  optionText:{
    fontSize: 20,
    alignItems: 'flex-start',
    color: 'white',
    alignSelf: 'flex-start'
  },
  defaultOptionButton:{
    backgroundColor: 'rgba(131, 203, 134, 0.3)',
    width: 220,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  nonDefaultOptionButton:{
    backgroundColor: 'rgba(178, 178, 207, 0.3)',
    width: 220,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center'
  },
  defaultOption:{
    fontSize: 18,
    color: "white"
  },
  nonDefaultOption:{
    fontSize: 18,
    color: "white"
  }
})