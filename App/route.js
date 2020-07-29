import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Login from "./Login"
import SignUp from "./SignUp"
import Welcome from "./Welcome"
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{title: "Welcome"}} />
        <Stack.Screen name="Home" component={Home} options={{title: "Home"}} />
        <Stack.Screen name="Login" component={Login} options={{title: "Login"}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title: "Sign up"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;