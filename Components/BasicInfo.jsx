import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
export const BasicInfo = (props) => {
  const styles = StyleSheet.create({
    basicInfo: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      alignItems: "center",
      width: 390,
      height: 183,
      flexWrap: "nowrap",
      position: "absolute",
      top: 0,
      marginTop: 98,
    },
    cityName: {
      flex: 1,
      width: 129,
      height: "auto",
      fontSize: 22,
      fontWeight: 500,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 0,
      top: 0,
      color: props.isDay == 1 ? "black" : "white",
      textShadowColor: props.isDay == 1 ? "white" : "black",
      textShadowRadius: 15,
    },
    temperature: {
      width: 257,
      height: "auto",
      fontStyle: "normal",
      fontWeight: "200",
      fontSize: 83,
      textAlign: "center",
      letterSpacing: 0.374,
      marginTop: 1,
      color: props.isDay == 1 ? "black" : "white",
      textShadowColor: props.isDay == 1 ? "white" : "black",
      textShadowRadius: 15,
    },
    weatherCondn: {
      width: 115,
      height: "auto",
      fontWeight: "600",
      fontSize: 20,
      textAlign: "center",
      marginTop: 3,
      flex: 1,
      color: props.isDay == 1 ? "black" : "white",
      textShadowColor: props.isDay == 1 ? "white" : "black",
      textShadowRadius: 15,
    },
    highLow: {
      width: 115,
      fontSize: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 2,
      color: props.isDay == 1 ? "black" : "white",
    },
  });
  return (
    <View style={styles.basicInfo}>
      <View style={styles.cityName}>
        <Text style={styles.cityName} variant="titleMedium">
          {props.CityName}
        </Text>
      </View>
      <View className="temperature">
        <Text style={styles.temperature}>{props.temp}°C</Text>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        className="weatherCondn"
      >
        <Text variant={"titleMedium"} style={styles.weatherCondn}>
          {props.condition}
        </Text>
      </View>
      <View style={styles.highLow}>
        <Text
          style={{
            color: props.isDay == 1 ? "black" : "white",
            textShadowColor: props.isDay == 1 ? "white" : "black",
            textShadowRadius: 15,
          }}
          variant={"titleMedium"}
        >
          H:{props.High}°
        </Text>
        <Text
          style={{
            color: props.isDay == 1 ? "black" : "white",
            textShadowColor: props.isDay == 1 ? "white" : "black",
            textShadowRadius: 15,
          }}
          variant={"titleMedium"}
        >
          L:{props.Low}°
        </Text>
      </View>
    </View>
  );
};
