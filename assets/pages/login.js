import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core';

export function Login(){
    
    const navigation = useNavigation()

  return(

    <View style={styles.page}>
      <View style={styles.area}>

      <View style={styles.loginBox}>
      <Text style={styles.loginAndPasswordText}>Email</Text>
      </View>
      
      <View style={styles.passwordBox}>
      <Text style={styles.loginAndPasswordText}>Senha</Text>
      </View>
    
      <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.enterText}>Entrar</Text>
      </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: "#222221",
    alignItems: 'center',
    justifyContent: 'center'
  },
  area:{
    height: 560,
    width: 320,
    backgroundColor: 'rgba(178, 178, 207, 0.3)',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(178, 178, 207, 1)'
  },
  loginBox:{
    height: 40,
    width: 250,
    marginTop: 240,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: 'center'
  },
  passwordBox:{
    height: 40,
    width: 250,
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: 'center'
  },
  loginAndPasswordText:{
    color: "gray",
    marginLeft: 15
  },
  enterButton:{
    height: 40,
    width: 200,
    marginTop: 40,
    borderRadius: 15,
    backgroundColor: "#83CB86",
    alignItems: 'center',
    justifyContent: 'center'
  },
  enterText:{
    color: "white"
  }
})