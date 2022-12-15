import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [allChamps, setAllChamps] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
        <View>
          <Text style={styles.nameofthepage}>LOG IN</Text>

          <View style={styles.textinput}>
            <TextInput
              placeholder="email"
              style={styles.textinputeach}
              autoCapitalize="none"
              onChangeText={(text) => {
                setEmail(text);
              }}
              value={email}
            ></TextInput>
            <TextInput
              placeholder="password"
              autoCapitalize="none"
              style={styles.textinputeach}
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
              value={password}
            ></TextInput>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },

  logo: {
    alignItems: "center",
  },

  nameofthepage: {
    fontSize: 20,
    color: "grey",
    marginBottom: 60,
  },

  textinput: {
    width: "100%",
  },

  textinputeach: {
    marginBottom: 30,
    borderBottomColor: "pink",
    borderBottomWidth: 1,
  },

  fillfields: {
    color: "red",
    opacity: 0.6,
  },

  button: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",

    width: "50%",
    height: 40,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 20,
  },

  registerbutton: {
    fontSize: 12,
    marginTop: 18,
    color: "grey",
  },
});
