import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './assets/pages/login';
import { Menu } from './assets/pages/menu';
import { RegistroRefeicoes } from './assets/pages/registroDeRefeicoes';
import { Refeicao } from './assets/pages/refeicao';
import { CafeDaManha, Almoco, Lanche, Jantar, Ceia } from './assets/pages/refeicaoOpcoes';
import { Substituicoes } from './assets/pages/substituicoes';
import { MealOptions } from './assets/pages/mealOptions';
import { MyMealPlan } from './assets/pages/mymealplan';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="RegistroRefeicoes"
          component={RegistroRefeicoes}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Refeicao"
          component={Refeicao}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="CafeDaManha"
          component={CafeDaManha}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Almoco"
          component={Almoco}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Lanche"
          component={Lanche}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Jantar"
          component={Jantar}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Ceia"
          component={Ceia}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Substituicoes"
          component={Substituicoes}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="MealOptions"
          component={MealOptions}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="MyMealPlan"
          component={MyMealPlan}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
