import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components';

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Israeli Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "12 Farm Lane - SW6 1PS London",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <View>
        <Card elevation={ 5 } style={ styles.cardLayout }>
          <Card.Cover
            key={ name }
            style={ styles.cover }
            source={{ uri: photos[0] }}
          />
          {/* <Card.Title
            title={ name }
            style={ styles.title }
          /> */}
          <Title>{ name }</Title>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
