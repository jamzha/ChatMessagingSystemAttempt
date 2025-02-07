import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Permissions() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button - Returns to Profile */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/(home)/(tabs)/profile")}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Permissions</Text>
      <Text style={styles.info}>Manage your app permissions below:</Text>

      {/* Face ID */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Face ID</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
      </View>

      {/* Fingerprint */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Fingerprint</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
      </View>

      {/* Push Notifications */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Push Notifications</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
      </View>

      {/* Location */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Location</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
      </View>

      {/* Data Analytics */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Data Analytics</Text>
        <Text style={styles.settingSubText}>Enabled</Text>
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
