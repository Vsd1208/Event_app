import { StyleSheet } from "react-native";
import {ThemedView} from "./themed-view";
import {ThemedText} from "./themed-text";

export default function Header() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.profile} />
      <ThemedText style={styles.bell}>🔔</ThemedText>
    </ThemedView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#A8D5BA",
  },
  bell: { fontSize: 22 },
});