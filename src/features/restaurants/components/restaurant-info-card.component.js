import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from '../../../components/typography/text.component'
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// const Title = styled.Text`
//   font-family: ${(props) => props.theme.fonts.inter};
//   font-size: ${(props) => props.theme.fontSizes.body};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

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

// const styles = StyleSheet.create({
//   closedText: {
//     color: "red",
//   },
// });
