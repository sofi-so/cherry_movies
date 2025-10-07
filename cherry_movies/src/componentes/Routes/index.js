import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Detalhes from "../Screens/Details";

export default function Routes (){

    const stack = createNativeStackNavigator();

    return(

        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Detalhes" component={Detalhes}/>
          </stack.Navigator>  
        </NavigationContainer>
    )
}