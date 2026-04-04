import { StyleSheet } from "react-native";
import { ThemedView } from "./themed-view";

export default function HighlightCard() {
  return <ThemedView style={styles.card} />;
}

const styles = StyleSheet.create({
  card: {
    width: 90, 
    height: 90,
    backgroundColor: "#A8D5BA",
  },
});