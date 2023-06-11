import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme, LogBox } from "react-native";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "./utilities/themes/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./Components/MainScreen";
import Weather from "./Components/Weather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const paperTheme = colorScheme === "dark" ? darkTheme : lightTheme;
  const Stack = createNativeStackNavigator();
  return (
    <>
      <PaperProvider theme={paperTheme}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <SafeAreaProvider style={{ flex: 1 }}>
              <Stack.Navigator>
                <Stack.Screen
                  name="MainScreen"
                  component={MainScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Weather"
                  options={{
                    headerStyle: {
                      width: 390,
                      height: 52,
                      backgroundColor: "#372e6e",
                    },
                    headerTintColor: "#EBEBF599",
                    headerTitleStyle: {
                      width: 102,
                      height: 34,
                      fontSize: 28,
                      fontWeight: "400",
                      fontStyle: "normal",
                      lineHeight: 34,
                      letterSpacing: 0.36399999260902405,
                      color: "#FFFFFF",
                    },
                    headerShadowVisible: true,
                    headerBlurEffect: "systemThickMaterialDark",
                  }}
                  component={Weather}
                />
              </Stack.Navigator>
              <StatusBar style="auto" />
            </SafeAreaProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
