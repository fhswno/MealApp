import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const RestaurantInfo = () => {
  return (
    <>
      <View>
        <Text style={styles.text}>Welcome to Israel</Text>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  }
});