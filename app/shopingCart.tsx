import { StyleSheet } from "react-native";
import React from "react";
import { CardView, Text, View } from "../components/Themed";

const shopingCart = () => {
  return (
    <View style={styles.container}>
      <CardView>
        <Text>shopingCart</Text>
      </CardView>
    </View>
  );
};

export default shopingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
