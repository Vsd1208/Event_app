import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const EventInfoScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileCircle} />
        <Ionicons name="notifications-outline" size={30} />
      </View>

      <View style={styles.imageBox} />

      <View style={styles.infoBox}>
        <Text style={styles.text}>EVENT NAME</Text>
        <Text style={styles.text}>ORGANIZER</Text>
        <Text style={styles.text}>DATE & TIME</Text>
        <Text style={styles.text}>VENUE</Text>
        <Text style={styles.text}>TOTAL PARTICIPANTS</Text>
        <Text style={styles.text}>PAYMENT</Text>
        <Text style={styles.text}>DESCRIPTION</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Remind Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    paddingTop: 18,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  profileCircle: {
    width: 71,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#CBF4D1",
  },

  imageBox: {
    width: 282,
    height: 212,
    backgroundColor: "#CBF4D1",
    alignSelf: "center",
    marginBottom: 15,
  },

  infoBox: {
    width: 314,
    height: 349,
    backgroundColor: "#CBF4D1",
    alignSelf: "center",
    padding: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },

  text: {
    fontSize: 22,
    fontFamily: "IrishGrover",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  button: {
    width: 146,
    height: 37,
    backgroundColor: "#CBF4D1",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "IrishGrover",
  },
});
