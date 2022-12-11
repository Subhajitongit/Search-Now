import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import TextField from "../components/TextField";
import { auth } from "../firebase";

const SignupScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Registered with: ${user.email}`);
        props.navigation.goBack();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/stacked-waves-haikei.png")}
      style={{ flex: 1, resizeMode: "cover", width: "100%", height: "100%" }}
    >
      <View>
        <ScrollView>
          <View
            style={{
              backgroundColor: "white",
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
              marginTop: Dimensions.get("window").height * 0.3,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              paddingTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                marginLeft: 15,
              }}
            >
              Sign Up
            </Text>
            <View
              style={{
                backgroundColor: "lightgray",
                height: 120,
                width: 120,
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image source={require("../assets/camera.png")} />
            </View>

            <View
              style={{
                alignItems: "center",
                width: "100%",
                padding: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 15,
                  }}
                >
                  Name
                </Text>
                <TextField placeholder="Your name" />
              </View>
              <View
                style={{
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 15,
                    marginTop: 20,
                  }}
                >
                  Email
                </Text>
                <TextField
                  placeholder="Your email ID"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View
                style={{
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 15,
                    marginTop: 20,
                  }}
                >
                  Contact No.
                </Text>
                <TextField
                  placeholder="Your contact number"
                  keyboardType="numeric"
                />
              </View>
              <View
                style={{
                  width: "100%",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 15,
                  }}
                >
                  Password
                </Text>
                <TextField
                  placeholder="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <View
                style={{
                  alignItems: "center",
                  width: "100%",
                  marginTop: 30,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#0066FF",
                    borderRadius: 100,
                    width: "100%",
                    alignItems: "center",
                  }}
                  onPress={handleSignUp}
                >
                  <Text
                    style={{
                      color: "white",
                      paddingVertical: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </Text>
                </Pressable>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 30,
                  }}
                >
                  <Text>Already have an account?</Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#0066FF",
                      marginLeft: 5,
                    }}
                    onPress={() => props.navigation.goBack()}
                  >
                    Log In
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
