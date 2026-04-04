import { StyleSheet } from "react-native";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";

export default function EventCard() {
  return (
    <ThemedView style={styles.card}>
      <ThemedText style={styles.title}>Event Name</ThemedText>
      <ThemedText style={styles.sub}>Date • Location</ThemedText>
      <ThemedView style={styles.btn} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 132,
    backgroundColor: "#CBF4D1",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
  },
  title: { fontWeight: "bold" },
  sub: { fontSize: 12 },
  btn: {
    width: 69,
    height: 20,
    backgroundColor: "#D9D9D9",
    alignSelf: "flex-end",
    marginTop: 10,
  },
});