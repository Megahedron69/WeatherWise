/*prettier-ignore*/
import { MD3LightTheme as DefaultTheme, DarkTheme } from "react-native-paper";

// export const Flavor = () => {
//   const fontConfig = {
//     /*prettier-ignore*/
//     SFPRODISPLAYREGULAR: require("../../assets/fonts/SFPRODISPLAYREGULAR.ttf"),
//     SFPRODISPLAYMEDIUM: require("../../assets/fonts/SFPRODISPLAYMEDIUM.ttf"),
//     SFPRODISPLAYBOLD: require("../../assets/fonts/SFPRODISPLAYBOLD.ttf"),
//     SFPRODISPLAYBLACKITALIC: require("../../assets/fonts/SFPRODISPLAYBLACKITALIC.ttf"),
//   };
//   SplashScreen.preventAutoHideAsync();
//   const [fontsLoaded] = useFonts(fontConfig);
//   const onLayoutRootView = async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//     if (!fontsLoaded) {
//       return null;
//     }
//   };
//   onLayoutRootView();
// };

export const lightTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    primary: "rgb(152, 64, 97)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 217, 226)",
    onPrimaryContainer: "rgb(62, 0, 29)",
    secondary: "rgb(43, 94, 167)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(215, 227, 255)",
    onSecondaryContainer: "rgb(0, 27, 63)",
    tertiary: "rgb(0, 99, 155)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(206, 229, 255)",
    onTertiaryContainer: "rgb(0, 29, 51)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 27)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(32, 26, 27)",
    surfaceVariant: "rgb(242, 221, 225)",
    onSurfaceVariant: "rgb(81, 67, 71)",
    outline: "rgb(131, 115, 119)",
    outlineVariant: "rgb(213, 194, 198)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(53, 47, 48)",
    inverseOnSurface: "rgb(250, 238, 239)",
    inversePrimary: "rgb(255, 177, 200)",
    elevation: {
      level0: "transparent",
      level1: "rgb(250, 242, 247)",
      level2: "rgb(247, 236, 242)",
      level3: "rgb(244, 230, 238)",
      level4: "rgb(243, 229, 236)",
      level5: "rgb(241, 225, 233)",
    },
    surfaceDisabled: "rgba(32, 26, 27, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 27, 0.38)",
    backdrop: "rgba(58, 45, 48, 0.4)",
    quaternary: "rgb(0, 99, 153)",
    onQuaternary: "rgb(255, 255, 255)",
    quaternaryContainer: "rgb(205, 229, 255)",
    onQuaternaryContainer: "rgb(0, 29, 50)",
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    primary: "rgb(255, 177, 200)",
    onPrimary: "rgb(94, 17, 51)",
    primaryContainer: "rgb(123, 41, 73)",
    onPrimaryContainer: "rgb(255, 217, 226)",
    secondary: "rgb(171, 199, 255)",
    onSecondary: "rgb(0, 47, 101)",
    secondaryContainer: "rgb(2, 69, 142)",
    onSecondaryContainer: "rgb(215, 227, 255)",
    tertiary: "rgb(151, 203, 255)",
    onTertiary: "rgb(0, 51, 83)",
    tertiaryContainer: "rgb(0, 74, 118)",
    onTertiaryContainer: "rgb(206, 229, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(32, 26, 27)",
    onBackground: "rgb(235, 224, 225)",
    surface: "rgb(32, 26, 27)",
    onSurface: "rgb(235, 224, 225)",
    surfaceVariant: "rgb(81, 67, 71)",
    onSurfaceVariant: "rgb(213, 194, 198)",
    outline: "rgb(158, 140, 144)",
    outlineVariant: "rgb(81, 67, 71)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(235, 224, 225)",
    inverseOnSurface: "rgb(53, 47, 48)",
    inversePrimary: "rgb(152, 64, 97)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 34, 36)",
      level2: "rgb(50, 38, 41)",
      level3: "rgb(57, 43, 46)",
      level4: "rgb(59, 44, 48)",
      level5: "rgb(63, 47, 51)",
    },
    surfaceDisabled: "rgba(235, 224, 225, 0.12)",
    onSurfaceDisabled: "rgba(235, 224, 225, 0.38)",
    backdrop: "rgba(58, 45, 48, 0.4)",
    quaternary: "rgb(149, 204, 255)",
    onQuaternary: "rgb(0, 51, 82)",
    quaternaryContainer: "rgb(0, 74, 117)",
    onQuaternaryContainer: "rgb(205, 229, 255)",
  },
};
