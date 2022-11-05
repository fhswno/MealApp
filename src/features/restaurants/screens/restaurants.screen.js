import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
          />
        </View>
        <View style={styles.containerBottom}>
          <RestaurantInfo/>
        </View>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: "white",
    padding: 16,
  },
  containerBottom: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});