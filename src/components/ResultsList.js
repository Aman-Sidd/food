import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail results={item} />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  container: {
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);
