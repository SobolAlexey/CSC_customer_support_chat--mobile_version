import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import StartView from "../components/screens/StartView";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {<Stack.Screen name='StartView' component={StartView} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
