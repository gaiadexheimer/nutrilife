import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Menu() {

  const navigation = useNavigation()
  const numberOfFeatures = 3;
  const features = Array.from({ length: numberOfFeatures });

  return (
    <><ScrollView contentContainerStyle={styles.page}>

      <View>
        <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('MyMealPlan')}>
          <Image
            source={require('../plano-white.png')}
            style={styles.icon} />
          <Text style={styles.optionText}>Meu Plano Alimentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuOption}>
          <Image
            source={require('../cook-white.png')}
            style={styles.icon} />
          <Text style={styles.optionText}>Receitas</Text>
        </TouchableOpacity>


      </View>

      <View>
        <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('RegistroRefeicoes')}>
          <Image
            source={require('../diario-white.png')}
            style={styles.icon} />
          <Text style={styles.optionText}>Registro de Refeições</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuOption}>
          <Image
            source={require('../meta-white.png')}
            style={styles.icon} />
          <Text style={styles.optionText}>Metas</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>



      <View style={styles.pagefooter}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MyMealPlan')}>
            <Image source={require('../plano-gray.png')} style={styles.menubutton} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RegistroRefeicoes')}>
            <Image source={require('../diario-gray.png')} style={styles.menubutton} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image source={require('../menu.png')} style={styles.menubutton} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../cook-gray.png')} style={styles.menubutton} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../meta-gray.png')} style={styles.menubutton} />
          </TouchableOpacity>
        </View>
      </View></>

  )
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: "#222221",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuOption: {
    width: 160,
    height: 160,
    backgroundColor: 'rgba(178, 178, 207, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 14
  },
  optionText: {
    fontSize: 18,
    color: "white"
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 20
  },
  pagefooter: {
    height: 100,
    width: '100%',
    backgroundColor: '#7B7B8E',
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 15,
    flexDirection: "row"
  },
  menubutton: {
    height: 35,
    width: 35,
    marginHorizontal: 20
  }
})