import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import coffeeSplashImg from "@/assets/images/coffee-splash.png";
import { Link } from "expo-router";

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={coffeeSplashImg}
      >
        <Text style={styles.text}>Explore</Text>
        <Text style={styles.text}>Visit us Today</Text>
        <Text style={styles.text}>MLO COFFEE SHOP</Text>
        <Text style={styles.text}>Visit us Today</Text>
        <Link href={"/"} style={styles.link}>
          Home
        </Link>
      </ImageBackground>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0, 0, 0,0.5)",
    padding: 4,
  },
});
