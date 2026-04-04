import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import HighlightCard from "@/components/HighlightCard";
import Tabs from "@/components/Tabs";
import { ThemedText } from "@/components/themed-text";
import { ScrollView, StyleSheet, View } from "react-native";
import FloatingMenu from "@/components/FloatingMenu";

export default function Dashboard() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <Tabs />

        {/* Top 3 cards */}
        <View style={styles.row}>
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </View>

        {/* Title + Filter */}
        <View style={styles.titleRow}>
          <ThemedText style={styles.title}>Events Coming Up</ThemedText>
          <ThemedText style={styles.filter}>Filter</ThemedText>
        </View>

        {/* Event list */}
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
      {/* Floating button (OUTSIDE ScrollView) */}
      <FloatingMenu />
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "bold" },
  filter: { backgroundColor: "#ddd", padding: 6 },
});
