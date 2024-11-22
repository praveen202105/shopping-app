import { Image, StyleSheet, Platform, FlatList, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import products from "./data/products"
import Products from './Screens/products';
import ProductDetailsScreen from './Screens/productDetails';
import { StatusBar } from 'expo-status-bar';
import ShoppingCart from './Screens/ShoppingCart';
// import Navigation from "./navigation"

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    {/* <Products/> */}
    {/* <ProductDetailsScreen/> */}
    {/* <ShoppingCart/>
     */}
     {/* <Navigation/> */}
    <StatusBar style="auto"/>
   </View> 
  );
}

const styles = StyleSheet.create({
  container: {
  // flex:1,
  backgroundColor:'#fff',
  // alignItems:'center',
  // justifyContent:'center'
  }
});
