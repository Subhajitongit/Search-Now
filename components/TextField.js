import { View, Text, TextInput } from "react-native";
import React from "react";

const TextField = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        color: props.color,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderColor: "rgb(220,220,220)",
        marginBottom: props.bottom,
      }}
    ></TextInput>
  );
};

export default TextField;
