import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const ResultsDetail = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: results.image_url }}></Image>
      <Text style={styles.name}>{results.name}</Text>
      <Text>
        {results.rating} Stars, {results.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 5,
  },
});

export default ResultsDetail;
