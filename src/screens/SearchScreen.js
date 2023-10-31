import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  console.log("Hi check...");
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={(term) => searchApi(term)}
      />

      {errorMessage ? <Text> {errorMessage.message} </Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}

      <ResultsList results={filterResultByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultByPrice("$$$")} title="Big Spender" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
