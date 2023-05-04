import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CardView,
  product,
  products,
  Text,
  View,
} from "../../components/Themed";
import { database } from "../../src/config/fb";

export default function TabOneScreen() {
  const [productlist, setproducts] = useState<products[]>([]);
  useEffect(() => {
    const ref = collection(database, "productos");
    const q = query(ref, orderBy("name", "desc"));

    const u = onSnapshot(q, (querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => ({
        brand_name: doc.data().brand_name,
        category: doc.data().category,
        id: doc.data().id,
        name: doc.data().name,
      }));
      setproducts(temp);
    });
    return u;
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <ScrollView horizontal={true}>
            <CardView style={styles.sizeh} h={true}></CardView>
          </ScrollView>
          <View style={{ flexDirection: "row" }}>
            <CardView style={styles.sizehm} h={true}>
              <Text style={styles.title}>Tab two</Text>
            </CardView>
          </View>

          <CardView style={styles.sizev} h={false}>
            <Text style={styles.title}>Tab two</Text>
          </CardView>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
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
  sizeh: {
    width: 120,
    height: 120,
  },
  sizev: {
    width: 400,
    height: 160,
  },
  sizehm: {
    width: 100,
    height: 50,
  },
});
