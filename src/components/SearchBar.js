import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        onChangeText={onTermChange}
        // onEndEditing={() => console.log("submitted")}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: "row",
    backgroundColor: "#DCDCDC",
    height: 50,
    marginHorizontal: 5,
    marginTop: 10,
    paddingLeft: 4,
    borderRadius: 5,
    marginBottom: 4,
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
