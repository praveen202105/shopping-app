import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  View,
  Pressable,
} from "react-native";

import ProductDetailsScreen from "./productDetails";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productSlice";
// import navigation from '../navigation';

export default function HomeScreen({ navigation }) {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // update selected product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("Product Details", { ProductDetailsScreen });
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
