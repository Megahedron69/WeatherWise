import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  RefreshControl,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Text, useTheme, Button, TouchableRipple } from "react-native-paper";
import { BasicInfo } from "./BasicInfo";
import NetInfo from "@react-native-community/netinfo";
import * as Location from "expo-location";
import Myerror from "./Myerror";
import Error from "./Error";
import BottomSheets from "./BottomSheets";
import { useState, useEffect, useRef } from "react";
import { UseData } from "../useData";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyLoading from "./MyLoading";
const MainScreen = ({ route, navigation }) => {
  const [location, setLocation] = useState({
    coordes: {
      latitude: 43.14,
      longitude: 32.16,
    },
  });

  useEffect(() => {
    const mySetter = () => {
      const { lats, longs } = route.params;
      setLocation({
        coordes: {
          latitude: lats,
          longitude: longs,
        },
      });
    };
    route.params ? mySetter() : console.log("I exir");
  }, [route.params]);
  const { isLoading, isError, data } = UseData(
    "myData",
    location.coordes.latitude,
    location.coordes.longitude
  );
  const theme = useTheme();
  const [isConnected, setIsConnected] = useState(true);
  const [time, setTime] = useState("");
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      let loc = await Location.getCurrentPositionAsync();
      setLocation({
        coordes: {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        },
      });
      console.log(loc);
    } else {
      Alert.alert(
        "Please turn on the location currently setting to default location"
      );
      setLocation();
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    const getDayPeriod = (dateString, code) => {
      const rainArray = [
        1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198.1201, 1240, 1243, 1246,
        1273, 1276,
      ];
      const date = new Date(dateString);
      const hour = date.getHours();
      if (rainArray.includes(code)) {
        return require("../assets/images/Rain-Default.png");
      } else {
        if (hour >= 6 && hour < 12) {
          return require("../assets/images/Morn-Default.png");
        } else if (hour >= 12 && hour < 18) {
          return require("../assets/images/Eve-Default.png");
        } else {
          return require("../assets/images/Night-Default.png");
        }
      }
    };
    let imagePath;
    isLoading
      ? (imagePath = require("../assets/images/Morn-Default.png"))
      : (imagePath = getDayPeriod(
          data.location.localtime,
          data.current.condition.code
        ));

    const myFunc = () => {
      setTime(imagePath);
    };
    myFunc();
  }, [isLoading]);
  const cachedData = !!data;
  if (!isConnected && !cachedData) {
    return <Myerror />;
  }
  if (isError) {
    return <Error errorText={"Dammn those solar flares"} />;
  }
  const styles = StyleSheet.create({
    Image: {
      width: 390,
      height: 390,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 4,
      shadowOpacity: 1,
      zIndex: 20,
    },
    bgWall: {
      flex: 1,
      justifyContent: "center",
      zIndex: -200,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    TabBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      zIndex: 1000,
      width: "100%",
      height: 100,
    },
    Back: {
      zIndex: 10000,
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
    },
    front: {
      zIndex: 15000,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    backButton: {
      zIndex: 10000,
    },
    myIcon: {
      height: 44,
      width: 44,
      padding: 8,
    },
    myButt: {
      marginTop: 22,
    },
    plusButton: {
      position: "relative",
      zIndex: 195000,
      right: 65,
    },
  });
  return (
    <>
      {isLoading ? (
        <MyLoading visible={isLoading} />
      ) : (
        <>
          <ImageBackground
            source={time}
            resizeMode="cover"
            blurRadius={isLoading ? 4 : 1}
            style={styles.bgWall}
          >
            <BasicInfo
              CityName={data.location.name}
              isDay={data.current.is_day}
              temp={data.current.temp_c}
              condition={data.current.condition.text}
              High={data.forecast.forecastday[0].day.maxtemp_c}
              Low={data.forecast.forecastday[0].day.mintemp_c}
            />
            <View
              style={{
                marginTop: 150,
                zIndex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.Image}
                source={require("../assets/images/House.png")}
              ></Image>
            </View>
            <View
              style={{
                zIndex: 2500,
                position: "absolute",
                bottom: 0,
                zIndex: 2,
                width: 408,
                height: 702,
                borderTopLeftRadius: 64,
                borderTopRightRadius: 64,
              }}
            >
              {/* {console.log(data.forecast.forecastday[0].hour[0].time)} */}
              <BottomSheets
                isLoading={isLoading}
                hourlyData={data.forecast.forecastday[0].hour}
                weeklyData={data.forecast.forecastday}
                windSpeed={data.current.wind_kph}
                windDir={data.current.wind_dir}
                sunrise={data.forecast.forecastday[0].astro.sunrise}
                sunset={data.forecast.forecastday[0].astro.sunset}
                airInd={data.current.air_quality["us-epa-index"]}
                uv={data.current.uv}
                precip={data.forecast.forecastday[0].day.totalprecip_mm}
                precipText={
                  data.forecast.forecastday[0].day.daily_chance_of_rain
                }
                feelz={data.current.feelslike_c}
                humidity={data.forecast.forecastday[0].day.avghumidity}
                humiditypt={data.forecast.forecastday[0].hour[0].dewpoint_c}
              />
            </View>
            <View style={styles.TabBar}>
              <ImageBackground
                style={styles.Back}
                resizeMode="cover"
                source={require("../assets/images/rect.png")}
              >
                <View style={styles.backButton}>
                  <TouchableOpacity
                    activeOpacity={0}
                    style={styles.myButt}
                    onPress={getLocation}
                  >
                    <Image
                      style={[
                        styles.myIcon,
                        { marginLeft: 40, marginTop: 0, marginBottom: 32 },
                      ]}
                      source={require("../assets/images/Map.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <TouchableRipple>
                  <Image
                    style={styles.front}
                    source={require("../assets/images/Subtract.png")}
                  ></Image>
                </TouchableRipple>
                <View style={styles.backButton}>
                  <TouchableOpacity
                    activeOpacity={0.2}
                    style={[styles.myButt]}
                    onPress={() => {
                      navigation.navigate("Weather");
                    }}
                  >
                    <Image
                      style={[
                        styles.myIcon,
                        { marginRight: 32, marginTop: 0, marginBottom: 24 },
                      ]}
                      source={require("../assets/images/List.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </>
      )}
    </>
  );
};

export default MainScreen;
