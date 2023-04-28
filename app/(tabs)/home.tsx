import { StyleSheet } from "react-native";
import { CardView, Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CardView>
        <Text style={styles.title}>Tab One</Text>
      </CardView>
      <CardView>
        <Text style={styles.title}>Tab two</Text>
      </CardView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
