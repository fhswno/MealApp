import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  background-color: white;
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  background-color: blue;
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.status}>
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  status: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
