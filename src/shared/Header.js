import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  const pressHandler = () => {
    // navigation.openDrawer()
    console.log("working");
  };
  return (
    <SafeAreaView>
        <StatusBar />
      <View style={styles.header}>
        <MaterialIcons
          name="menu"
          size={28}
          onPress={pressHandler}
          style={styles.icon}
        />
        <View>
          <Text style={styles.headerText}>some text</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginVertical: 10
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
