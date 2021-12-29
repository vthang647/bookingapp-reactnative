import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainScreen from "./MainScreen";

export default class LoginScreen extends React.Component {
  state = { name: "", passwd: "" };

  continue = () => {
    this.props.navigation.navigate("MainScreen", { name: this.state.name });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.txtTitle}>Login</Text>
        </View>
        <Image
          source={require("../assets/icon.png")}
          style={styles.imageStyleIcon}
        />
        <View style={{ marginHorizontal: 24 }}>
          <Text style={styles.header}>UserName</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <Text style={styles.header}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={(passwd) => {
              this.setState({ passwd });
            }}
            value={this.state.passwd}
          />

          <TouchableWithoutFeedback onPress={this.continue}>
            <View style={styles.buttonLogin}>
              <Text style={styles.txtInButton}>
                <Ionicons name="md-log-in" size={24} color="black" />
                Login
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
  },
  txtTitle: {
    fontSize: 42,
    fontWeight: "900",
    color: "#200ead",
    alignSelf: "center",
  },
  imageStyleIcon: {
    width: 45,
    height: 45,
    alignSelf: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 16,
  },
  input: {
    marginTop: 16,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600",
  },
  buttonLogin: {
    marginTop: 16,
    backgroundColor: "#039c4f",
    justifyContent: "center",
    borderRadius: 30,
    alignSelf: "center",
    width: 160,
    height: 40,
  },
  txtInButton: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
