import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const DetailScreen = ({ route }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: route.params.img,
        }}
        style={{ height: 250, width: "100%" }}
      />
      <ScrollView style={{ paddingHorizontal: 15, paddingTop: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {route.params.title}
        </Text>
        <Text style={{ paddingTop: 10 }}>{route.params.body}</Text>
        <Text style={{ fontWeight: "bold", paddingTop: 5, fontSize: 15 }}>
          {route.params.url}
        </Text>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
