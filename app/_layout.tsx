import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/* Tela inicial (login) - agora como index */}
        <Stack.Screen name="index" options={{ headerShown: false }} />

        {/* Telas autenticadas */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="DetalhesProduto"
          options={{ title: "Detalhes", headerShown: true }}
        />
        {/* Rota 404 */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
