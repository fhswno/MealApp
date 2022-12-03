import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SearchContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <>
      <SafeAreaView style={styles.status}>
        {isLoading && (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              size={50}
              style={styles.activityIndicatorElement}
              animating={true}
              color={Colors.blue300}
            />
          </View>
        )}
        <SearchContainer>
          <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  status: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  activityIndicatorElement: {
    marginLeft: -25,
  },
});
