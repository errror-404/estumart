/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  StyleSheet,
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
} from "react-native";

import Colors from "../constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type products = {
  product: product[];
};
export type product = {
  brand_name: string;
  category: string;
  id: number;
  name: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function CardView(props: ViewProps, h: boolean, data: products) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "cardBackground"
  );

  return h == true ? (
    <FlatList
      data={data.product}
      horizontal
      style={[{ backgroundColor }, styles.card, style]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  ) : (
    <FlatList
      data={data.product}
      style={[{ backgroundColor }, styles.card, style]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
