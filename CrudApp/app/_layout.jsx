import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerTitleStyle: {
              fontSize: 40,
              fontWeight: "bold",
              color: "blue",
              textAlign: "center",
            },
            headerTitle: "Todo List App",
          }}
        />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
