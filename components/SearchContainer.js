import { View, Text } from "react-native";
import React from "react";

const SearchContainer = (props) => {
  return (
    <View
      style={{
        width: 320,
        height: 150,
        backgroundColor: "white",
        borderRadius: 15,
        margin: 10,
        overflow: "hidden",
        padding: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingBottom: 10,
        }}
      >
        {props.title}
      </Text>
      <Text>{props.desc}</Text>
    </View>
  );
};

export default SearchContainer;
