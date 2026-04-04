import { StyleSheet } from "react-native";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";

export default function Tabs() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.active}>Events</ThemedText>
      <ThemedText style={styles.inactive}>My Events</ThemedText>
    </ThemedView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10, 
    marginBottom: 16,
  },
  active: { backgroundColor: "#A8D5BA", padding: 6 },
  inactive: { backgroundColor: "#ddd", padding: 6 },
});