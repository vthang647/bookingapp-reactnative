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
export default class MainScreen extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>hello</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
