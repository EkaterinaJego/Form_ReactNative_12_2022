import React, { useState } from "react";
import { SocialButton } from "react-native-login-screen";
import Modal from "react-native-modal";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [allInfo, setAllInfo] = useState(false);
  const [inputDone, setInputDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    if (userName && password && checkPassword) {
      if (password !== checkPassword) {
        setErrorMessage("Password error");
        setInputDone(true);
      } else {
        console.log("It's ok");
        setAllInfo(true);
      }
    } else {
      setErrorMessage("Not all info is collected");
      setIsVisible(true);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
        <View>
          <Text style={styles.nameofthepage1}>Sing up </Text>
          <Text style={styles.nameofthepage2}>
            Sign up for continue explore!
          </Text>
          <View style={styles.socialButtonsView}>
            <View style={styles.socialButtonViewEach}>
              <SocialButton
                style={styles.socialbutton}
                imageSource={require("./assets/facebook.png")}
                onPress={() => {}} // add link to FB
              />
            </View>

            <View style={styles.socialButtonViewEach}>
              <SocialButton
                style={styles.socialbutton}
                imageSource={require("./assets/twitter.png")}
                onPress={() => {}} // add link to Twitter
              />
            </View>
            <View style={styles.socialButtonViewEach}>
              <SocialButton
                style={styles.socialbutton}
                imageSource={require("./assets/apple.png")}
                onPress={() => {}} // add link to Apple
              />
            </View>
          </View>

          <View style={styles.textinputMain}>
            <Text style={styles.textinputText}>Username</Text>
            <View style={styles.textinput}>
              <TextInput
                style={styles.textinputText}
                autoCapitalize="none"
                onChangeText={(text) => {
                  setUserName(text);
                  setInputDone(true);
                }}
                value={userName}
              ></TextInput>
            </View>
            <Text style={styles.textinputText}>Password</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.textinputText}
              onChangeText={(text) => {
                setPassword(text);
                setInputDone(true);
              }}
              secureTextEntry={true}
              value={password}
            ></TextInput>
            <Text style={styles.textinputText}>Retype password</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.textinputText}
              onChangeText={(text) => {
                setCheckPassword(text);
              }}
              secureTextEntry={true}
              value={checkPassword}
            ></TextInput>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Modal
              isVisible={isVisible}
              coverScreen={true}
              backdropOpacity={0.4}
              style={styles.modal}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.modalText}>{errorMessage}</Text>
              </View>
            </Modal>
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

  textinputMain: {
    width: "100%",
  },

  textinput: {
    width: "100%",
  },

  textinputText: {
    marginBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    color: "grey",
  },

  fillfields: {
    color: "red",
    opacity: 0.6,
  },

  button: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderColor: "blue",
    backgroundColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },

  socialButtonsView: {
    flexDirection: "row",
    width: "100%",
  },

  socialButtonViewEach: {
    borderColor: "black",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#CECDCD",
    marginBottom: 40,
    marginRight: 20,
    width: 50,
    height: 50,
  },

  socialbutton: {
    backgroundColor: "#CECDCD",
    justifyContent: "center",
    marginTop: "35%",
    paddingLeft: 30,
    paddingRight: 10,
    width: "auto",
    height: "auto",
    alignItems: "center",
  },

  registerbutton: {
    fontSize: 12,
    marginTop: 18,
    color: "grey",
  },

  modal: {
    backgroundColor: "blue",
    width: "100%",
    borderRadius: 10,
    paddingTop: "10%",
    alignItems: "center",
    marginLeft: "0%",
    marginTop: "150%",
  },

  modalText: {
    color: "white",
    fontSize: 20,
  },
});
