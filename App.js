import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";

import LoginScreen from "./app/Screen/LoginScreen";
import MainScreen from "./app/Screen/MainScreen";
import AuthStack from "./app/Screen/AuthStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Goto detail"
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
    </View>
  );
};

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="go to detail"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <Button title="go to the detail" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
