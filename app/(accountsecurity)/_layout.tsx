import { Stack } from "expo-router";

export default function AccountSecurityLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Account Security" }} />
    </Stack>
  );
}
