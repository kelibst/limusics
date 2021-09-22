import React from "react";
import {
  View,
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { handleMusic } from "./playMusics";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const { width } = Dimensions.get("window");

const PlayerModel = ({ visible, propss, closeModal }) => {
  return (
    <SafeAreaView>
      <Modal transparent={true} animationType="slide" visible={visible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.playerContent}>
              <Text style={styles.albArt}>
                <Ionicons name="musical-notes" size={44} color="white" />
              </Text>
              <Text numberOfLines={1} style={styles.title}>
                {propss?.currentState?.currentAudio.filename}
              </Text>
              <View style={styles.mCtrls}>
              <Slider
                  style={{ width: width - 40, height: 40 }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                />
                <View style={styles.musiCtrls}>
                  <TouchableOpacity>
                    <AntDesign
                      name={"banckward"}
                      size={40}
                      color={"black"}
                      style={styles.playIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <AntDesign
                      name={"leftcircle"}
                      size={40}
                      color={"black"}
                      style={styles.playIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleMusic(
                        propss?.currentState?.currentAudio,
                        propss.updateState,
                        propss.currentState
                      );
                    }}
                  >
                    <FontAwesome
                      name={
                        propss?.currentState?.playing
                          ? "pause-circle"
                          : "play-circle-o"
                      }
                      size={80}
                      color={propss?.currentState?.playing ? "black" : "black"}
                      style={styles.playIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign
                      name={"rightcircle"}
                      size={40}
                      color={"black"}
                      style={styles.playIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <AntDesign
                      name={"forward"}
                      size={40}
                      color={"black"}
                      style={styles.playIcon}
                    />
                  </TouchableOpacity>
                </View>
               
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default PlayerModel;

const styles = StyleSheet.create({
  playerContent: {
    position: "absolute",
    bottom: 1,
    backgroundColor: "#eee",
    padding: 20,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  albArt: {
    backgroundColor: "black",
    padding: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
    alignContent: "center",
    alignSelf: "center",
  },
  musiCtrls: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 20,
    paddingVertical: 10,

    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  mCtrls: {
    
  },
});
