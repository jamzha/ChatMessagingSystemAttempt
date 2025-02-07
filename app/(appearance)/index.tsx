import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Appearance() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button - Returns to Profile */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/(home)/(tabs)/profile")}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Appearance</Text>
      <Text style={styles.info}>Choose your preferred theme:</Text>

      {/* Default Mode */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Default Mode</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
      </View>

      {/* Dark Mode */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
      </View>

      {/* Light Mode */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Light Mode</Text>
        <Text style={styles.settingSubText}>Coming Soon!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#161B2D", padding: 20 },
  backButton: { paddingVertical: 8 },
  backText: { fontSize: 16, color: "#367CE5" },
  title: { fontSize: 20, color: "#E5E8F0", textAlign: "center", marginBottom: 10 },
  info: { fontSize: 16, color: "#6F799A", textAlign: "center", marginBottom: 20 },
  settingItem: {
    backgroundColor: "#252C45",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  settingText: { fontSize: 14, color: "#CBCCE4" },
  settingSubText: { fontSize: 14, color: "#6F799A" },
});
