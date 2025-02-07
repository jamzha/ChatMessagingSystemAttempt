import { Stack } from "expo-router";

export default function PermissionsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Permissions" }} />
    </Stack>
  );
}
