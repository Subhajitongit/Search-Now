import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import TextField from "../components/TextField";
import axios from "axios";
import SearchContainer from "../components/SearchContainer";
import * as Linking from "expo-linking";

const HomeScreen = (props) => {
  // const {
  //   params: { url },
  // } = props.route;
  // console.log(props.route.params.url);
  const url = Linking.useURL();
  console.log(url, "okay");
  const [text, setText] = React.useState("");
  const [res, setRes] = React.useState([]);

  const getData = (val) => {
    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
      params: {
        q: val,
        pageNumber: "1",
        pageSize: "10",
        autoCorrect: "true",
      },
      headers: {
        "X-RapidAPI-Key": "75385f102cmsh7f3c6df822c1745p1d6ff9jsn72e44fd32740",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setRes(response.data.value);
        console.log(res);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // url == undefined ? setText("") : setText(props.route.params.id);

  return (
    <ImageBackground
      source={require("../assets/stacked-waves-haikei.png")}
      style={{ flex: 1, resizeMode: "cover", width: "100%", height: "100%" }}
    >
      <SafeAreaView>
        <View
          style={{
            paddingTop: 50,
            paddingHorizontal: 20,
            alignItems: "center",
            width: "100%",
          }}
        >
          <ScrollView style={{ width: "100%" }}>
            <TextField
              placeholder="Search here..."
              color="white"
              bottom={10}
              onChangeText={setText}
              value={text}
              onSubmitEditing={() => {
                getData(text);
                console.log(text);
              }}
            />
            {/* <Text style={{ fontSize: 65 }}>
              {url == undefined ? "" : `${props.route.params.id}`}
            </Text> */}
            <View
              style={{
                width: "100%",
                alignItems: "center",
                gap: 50,
              }}
            >
              {res.map((val) => {
                return (
                  <Pressable
                    key={val.id}
                    onPress={() =>
                      props.navigation.navigate("Detail", {
                        title: val.title,
                        body: val.body,
                        url: val.url,
                        img: val.image.url,
                      })
                    }
                  >
                    <SearchContainer
                      key={val.id}
                      title={val.title}
                      desc={val.description}
                      width={Dimensions.get("window").width}
                    />
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
