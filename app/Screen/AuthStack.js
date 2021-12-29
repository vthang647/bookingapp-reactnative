import React from "react";
import { Text } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure();

export default class AuthStack extends React.Component {
  state = { user: null };

  componentDidMount() {
    this.initAsync();
  }

  initAsync = async () => {
    try {
      await GoogleSignin.initAsync({
        // You may ommit the clientId when the firebase `googleServicesFile` is configured
        clientId:
          "117903160506-q0gnm409b5tajb2krhb16akhfilef2ub.apps.googleusercontent.com",
      });
      this._syncUserWithStateAsync();
    } catch ({ message }) {
      alert("GoogleSignin.initAsync(): " + message);
    }
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignin.signInSilentlyAsync();
    this.setState({ user });
  };

  signOutAsync = async () => {
    await GoogleSignin.signOutAsync();
    this.setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignin.askForPlayServicesAsync();
      const { type, user } = await GoogleSignin.signInAsync();
      if (type === "success") {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

  onPress = () => {
    if (this.state.user) {
      this.signOutAsync();
    } else {
      this.signInAsync();
    }
  };

  render() {
    return <Text onPress={this.onPress}>Toggle Auth</Text>;
  }
}
