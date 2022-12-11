import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import DetailScreen from "./screens/DetailScreen";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const Stack = createNativeStackNavigator();

function App() {
  const [data, setData] = React.useState(null);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: {
          path: "/:id",
          parse: {
            id: (id) => `${id}`,
          },
        },
      },
    },
  };

  // const url = Linking.useURL();
  // console.log(url);

  // function handleDeepLink(event) {
  //   let data = Linking.parse(event.url);
  //   setData(data);
  // }

  // React.useEffect(() => {
  //   Linking.addEventListener("url", handleDeepLink);
  //   return () => {
  //     Linking.removeEventListener("url");
  //   };
  // }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
