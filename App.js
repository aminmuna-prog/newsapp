import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/HomeScreen";
import NewsViewer from "./src/NewsViewer";
import Search from "./src/Search";
import Splash from "./src/Splash";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="NewsViewer" component={NewsViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
