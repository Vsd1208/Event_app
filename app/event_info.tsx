import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Spacing, Radii, Shadows } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

interface DetailRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  colors: any;
}

function DetailRow({ icon, label, value, colors }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <View style={[styles.iconBox, { backgroundColor: colors.primary + "22" }]}>
        <Ionicons name={icon} size={18} color={colors.primary} />
      </View>
      <View style={styles.detailText}>
        <Text style={[styles.detailLabel, { color: colors.subText }]}>{label}</Text>
        <Text style={[styles.detailValue, { color: colors.text }]}>{value}</Text>
      </View>
    </View>
  );
}

export default function EventInfoScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.8}
          style={[styles.backBtn, { backgroundColor: colors.surface }]}
        >
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: colors.text }]}>Event Details</Text>

        <TouchableOpacity
          onPress={() => router.push("/student_profile" as any)}
          activeOpacity={0.8}
        >
          <View style={[styles.profileCircle, { backgroundColor: colors.surface, borderColor: colors.primary }]} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Event Image */}
        <View style={[styles.imageBox, { backgroundColor: colors.surface }]}>
          <Ionicons name="image-outline" size={48} color={colors.primary} style={{ opacity: 0.4 }} />
        </View>

        {/* Event Name Card */}
        <View style={[styles.nameCard, { backgroundColor: colors.primary }]}>
          <Text style={styles.eventName}>Tech Conference 2026</Text>
          <View style={styles.organizerRow}>
            <Ionicons name="person-circle-outline" size={16} color="#fff" />
            <Text style={styles.organizerText}>Organized by: Tech Club</Text>
          </View>
        </View>

        {/* Details Card */}
        <View style={[styles.detailsCard, { backgroundColor: colors.surface }, Shadows.light]}>

          <DetailRow
            icon="calendar-outline"
            label="Date & Time"
            value="Aug 14, 2026 • 10:00 AM"
            colors={colors}
          />
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <DetailRow
            icon="location-outline"
            label="Venue"
            value="Moscone Center, San Francisco"
            colors={colors}
          />
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <DetailRow
            icon="people-outline"
            label="Total Participants"
            value="500 seats available"
            colors={colors}
          />
          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <DetailRow
            icon="card-outline"
            label="Payment"
            value="Free Entry"
            colors={colors}
          />
        </View>

        {/* Description Card */}
        <View style={[styles.descCard, { backgroundColor: colors.surface }, Shadows.light]}>
          <Text style={[styles.descTitle, { color: colors.text }]}>About this Event</Text>
          <Text style={[styles.descText, { color: colors.subText }]}>
            Join us for an incredible tech conference featuring industry leaders, workshops, and networking opportunities. This event brings together the brightest minds in technology for a full day of learning and collaboration.
          </Text>
        </View>

        {/* Bottom spacing */}
        <View style={{ height: Spacing.xl }} />
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={[styles.bottomRow, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          style={[styles.remindBtn, { borderColor: colors.primary }]}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Ionicons name="notifications-outline" size={18} color={colors.primary} />
          <Text style={[styles.remindText, { color: colors.primary }]}>Remind Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.registerBtn, { backgroundColor: colors.primary }, Shadows.medium]}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Text style={styles.registerText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2,
  },
  imageBox: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  nameCard: {
    marginHorizontal: Spacing.lg,
    marginTop: -1,
    borderRadius: Radii.md,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  eventName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 6,
  },
  organizerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  organizerText: {
    color: "#ffffffcc",
    fontSize: 13,
    fontWeight: "500",
  },
  detailsCard: {
    marginHorizontal: Spacing.lg,
    borderRadius: Radii.md,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.sm,
    gap: Spacing.md,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: Radii.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  detailText: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 15,
    fontWeight: "600",
  },
  divider: {
    height: 0.5,
    marginLeft: 52,
  },
  descCard: {
    marginHorizontal: Spacing.lg,
    borderRadius: Radii.md,
    padding: Spacing.lg,
  },
  descTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: Spacing.sm,
  },
  descText: {
    fontSize: 14,
    lineHeight: 22,
  },
  bottomRow: {
    flexDirection: "row",
    gap: Spacing.md,
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  remindBtn: {
    flex: 1,
    height: 50,
    borderRadius: Radii.md,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  remindText: {
    fontSize: 15,
    fontWeight: "700",
  },
  registerBtn: {
    flex: 2,
    height: 50,
    borderRadius: Radii.md,
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
});