import React, { useState } from "react";
import LoginScreen, { SocialButton } from "react-native-login-screen";
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
          <Text style={styles.nameofthepage1}>Sing up </Text>
          <Text style={styles.nameofthepage2}>
            Sign up for continue explore!
          </Text>
          <View style={styles.socialButtonsView}>
            <SocialButton
              style={styles.socialbutton}
              imageSource={require("./assets/facebook.png")}
              onPress={() => {}} // add link to FB
            />
            <SocialButton
              style={styles.socialbutton}
              imageSource={require("./assets/twitter.png")}
              onPress={() => {}} // add link to Twitter
            />

            <SocialButton
              style={styles.socialbutton}
              imageSource={require("./assets/apple.png")}
              onPress={() => {}} // add link to Apple
            />
          </View>

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

  nameofthepage1: {
    fontSize: 25,
    color: "black",
    marginTop: 100,
    marginBottom: 20,
  },

  nameofthepage2: {
    fontSize: 18,
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

  socialButtonsView: {
    flexDirection: "row",
    width: "100%",
  },

  socialbutton: {
    backgroundColor: "white",
    alignContent: "flex-end",
    justifyContent: "center",
    marginBottom: 50,
    paddingLeft: 30,
    paddingRight: 10,
    width: 10,
    height: 10,
  },

  registerbutton: {
    fontSize: 12,
    marginTop: 18,
    color: "grey",
  },
});
