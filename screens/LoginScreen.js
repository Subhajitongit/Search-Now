import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import TextField from "../components/TextField";
import { auth } from "../firebase";

const LoginScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        props.navigation.navigate("Home");
      }
    });
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Logged in with: ${user.email}`);
        props.navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View>
      <ImageBackground
        source={require("../assets/stacked-waves-haikei.png")}
        style={{ height: "100%" }}
      />
      <View style={{ position: "absolute" }}>
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
            Log-in
          </Text>
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
                width: "90%",
                alignItems: "flex-end",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Forget Password?</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                width: "100%",
                marginTop: 20,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#0066FF",
                  borderRadius: 100,
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={handleLogin}
              >
                <Text
                  style={{
                    color: "white",
                    paddingVertical: 10,
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </Pressable>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
              >
                <Text>Don't have an account?</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#0066FF",
                    marginLeft: 5,
                  }}
                  onPress={() => props.navigation.navigate("Signup")}
                >
                  Sign up
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
              <View>
                <Text style={{ width: 80, textAlign: "center", color: "gray" }}>
                  Or login with
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                alignItems: "stretch",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../assets/google.png")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <Image
                source={require("../assets/facebook.png")}
                style={{ width: 35, height: 35, borderRadius: 100 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
