import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function MainTabScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header} />

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Text style={styles.name}>John Doe</Text>

          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <View style={styles.innerCircle} />
            </View>
            <View style={styles.statusIndicator}>
              {/* <View style={styles.innerStatus} /> */}
            </View>
          </View>

          {/* Clickable Account Security Button */}
          <TouchableOpacity
            style={styles.securityButton}
            onPress={() => router.push("/(accountsecurity)")}
          >
            <Text style={styles.securityText}>Account Security</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <View style={styles.settingsContainer}>
          <Text style={styles.sectionTitle}>Your Settings</Text>

          {/* Clickable Permissions Button */}
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => router.push("/(permissions)")}
          >
            <Text style={styles.settingText}>Permissions</Text>
          </TouchableOpacity>

          {/* Clickable Language Setting */}
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Language</Text>
            <Text style={styles.settingSubText}>English</Text>
          </TouchableOpacity>

          {/* Clickable Appearance Button */}
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => router.push("/(appearance)")}
          >
            <Text style={styles.settingText}>Appearance</Text>
            <Text style={styles.settingSubText}>Dark</Text>
          </TouchableOpacity>
        </View>

        {/* App Information */}
        <View style={styles.settingsContainer}>
          <Text style={styles.sectionTitle}>Our App</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Support</Text>
            <Text style={styles.settingSubText}>Email us!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Terms of Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Share this app</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out & App Version */}
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>App Version</Text>
            <Text style={styles.settingSubText}>0.0.1 - stable</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: {
    flex: 1,
    backgroundColor: '#161B2D',
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: { width: '100%', height: 88, backgroundColor: '#161B2D' },
  profileContainer: { alignItems: 'center', marginVertical: 20 },
  name: { fontSize: 32, fontWeight: '500', color: '#E5E8F0', fontFamily: 'Manrope' },
  profileImageContainer: {
    width: 113,
    height: 113,
    position: 'relative',
    marginVertical: 10,
  },
  profileImage: {
    width: 113,
    height: 113,
    backgroundColor: '#367CE5',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 37,
    height: 37,
    backgroundColor: '#E5E8F0',
    borderRadius: 50,
  },
  statusIndicator: {
    width: 34,
    height: 34,
    backgroundColor: '#CEE55F',
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  securityButton: {
    backgroundColor: '#252C45',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  securityText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E5E8F0',
    fontFamily: 'Manrope',
  },
  settingsContainer: {
    width: '90%',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#E5E8F0',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  settingItem: {
    backgroundColor: '#252C45',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settingText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#CBCCE4',
    fontFamily: 'Manrope',
  },
  settingSubText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6F799A',
    fontFamily: 'Manrope',
  },
  logoutButton: {
    backgroundColor: '#FA5861',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 10,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E5E8F0',
    fontFamily: 'Manrope',
  },
});
