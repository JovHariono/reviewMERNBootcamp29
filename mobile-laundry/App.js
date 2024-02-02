import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ListBelanja from "./components/ListBelanja";
import FormSignIn from "./components/FormSignIn";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenHome from './screens/ScreenHome';
import ScreenAbout from './screens/ScreenAbout';

const Stack = createStackNavigator();

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= "ScreenHome"
          component= {ScreenHome}
          options= {{ title: "Home" }}
        />
        <Stack.Screen 
          name= "ScreenAbout"
          component= {ScreenAbout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  textHeading1: {
    fontSize: 20,
    color: "#000088",
  },
  btn: {
    border: 1,
    padding: 16,
    backgroundColor: "tomato",
  },
  btn_text: {
    color: "white"
  }

  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
