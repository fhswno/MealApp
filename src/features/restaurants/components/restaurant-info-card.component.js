import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: ${props => props.theme.colors.ui.primary}
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Israeli Restaurant",
    // icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    // address = "12 Farm Lane - SW6 1PS London",
    // isOpenNow = true,
    // rating = 4,
    // isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <View>
        <RestaurantCard elevation={5}>
          <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
          <Title>{name}</Title>
        </RestaurantCard>
      </View>
    </>
  );
};