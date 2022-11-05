import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.containerTop}>
          <Text>Israel</Text>
        </View>
        <View style={styles.containerBottom}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  containerTop: {
    backgroundColor: "green",
    padding: 16,
  },
  containerBottom: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
