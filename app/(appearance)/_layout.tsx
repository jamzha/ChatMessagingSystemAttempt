import { Stack } from "expo-router";

export default function AppearanceLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Appearance" }} />
    </Stack>
  );
}
