import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  itemStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    maxWidth: "95%",
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemCont: {
    maxWidth: "65%",
  },
  playIcon: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
  thumbnail: {
    textTransform: "capitalize",
    color: "#fff",
    fontSize: 20,
  },
  thumb: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#ddd",
    borderRadius: 50,
    marginHorizontal: 10,
  },
});

export { globalStyles };
