import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AccountSecurity() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button - Now Goes Back to Profile Page */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.replace("/(home)/(tabs)/profile")} // Ensures it goes back to Profile
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Account Security</Text>
      <Text style={styles.info}>
        Your Vimes account is protected by advanced security measures. Keep your info updated for added protection.
      </Text>

      {/* Email */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Email</Text>
        <Text style={styles.settingSubText}>janedoe@georgia.gov</Text>
      </View>

      {/* Edit Password */}
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Password</Text>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      {/* Two-Factor Authentication */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Two-Factor Authentication</Text>
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
  editText: { fontSize: 14, color: "#367CE5" },
});
