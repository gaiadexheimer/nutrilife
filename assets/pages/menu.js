import { View, StyleSheet, Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Menu(){

  const navigation = useNavigation()

  return(
    <View style={styles.page}>
      
      <TouchableOpacity style={styles.menuOption}>
        <Image
          source={require('../plano.png')}
          style={styles.icon}
        />
        <Text style={styles.optionText}>Meu Plano Alimentar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('RegistroRefeicoes')}>
        <Image
          source={require('../diario.png')}
          style={styles.icon}
        />
        <Text style={styles.optionText}>Registro de Refeições</Text>
      </TouchableOpacity>

    </View>
    
  )
}

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: "#222221",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  menuOption:{
    width: 160,
    height: 160,
    backgroundColor: 'rgba(178, 178, 207, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  optionText:{
    fontSize: 18,
    color: "white"
  },
  icon:{
    width: 40,
    height: 40,
    marginBottom: 20
  }
})