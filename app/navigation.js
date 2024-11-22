import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./Screens/products";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetailsScreen from "./Screens/productDetails";
import ShoppingCart from "./Screens/ShoppingCart";
import HomeScreen from "./Screens/products";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";
const Stack = createNativeStackNavigator();

export default Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Cart")}
              style={{ flexDirection: "row" }}
            >
              <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                {numberOfItems}
              </Text>
            </Pressable>
          ),
          // headerLeft: () => (
          //   <MaterialCommunityIcons
          //     onPress={() => navigation.navigate("Track Order")}
          //     name="truck-delivery"
          //     size={22}
          //     color="gray"
          //   />
          // ),
        })}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
