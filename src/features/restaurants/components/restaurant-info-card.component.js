import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  Section,
  SectionEnd,
  Info,
  Address,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Open,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Israeli Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "12 Farm Lane - SW6 1PS London",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <View>
        <RestaurantCard elevation={5}>
          <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
          <Info>
            <Text variant="label">{name}</Text>
            <Section>
              <Rating>
                {ratingArray.map((index) => (
                  <SvgXml xml={star} width={20} height={20} key={index} />
                ))}
              </Rating>
              <SectionEnd>
                {isClosedTemporarily && (
                  <Text variant="error">
                    {"Closed Temporarily".toUpperCase()}
                  </Text>
                )}
                <Spacer position="left" size="large">
                  {isOpenNow && <Open xml={open} width={20} height={20} />}
                </Spacer>
                <Spacer position="left" size="large">
                  <Icon source={{ uri: icon }} />
                </Spacer>
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </RestaurantCard>
      </View>
    </>
  );
};
