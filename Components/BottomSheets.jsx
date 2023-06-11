import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-paper";
import Svg, { Circle } from "react-native-svg";
import { PageScrollView } from "pagescrollview";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const ProgressBar = ({ progress }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 9,
      borderRadius: 34,
      overflow: "hidden",
    },
    background: {
      flex: 1,
    },
    progress: {
      height: "100%",
      borderRadius: 10,
    },
    circle: {
      position: "absolute",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const circlePosition = (progress / 100) * 200;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#3759B1", "#B959E8", "#E64396"]}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.background}
      >
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </LinearGradient>
      <Svg style={styles.circle}>
        <Circle
          cx={circlePosition}
          cy={5}
          r={6}
          fill="white"
          stroke="black"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

const Indirow = (props) => {
  const styles = StyleSheet.create({
    widgetHeading: {
      color: "#9392a9",
      display: "flex",
      fontWeight: "600",
      fontSize: 17,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    widgetStat: {
      color: "white",
      fontWeight: 500,
      marginTop: 5,
      fontSize: 32,
    },
    indiRow: {
      flex: 1,
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      flexDirection: "row",
      width: 362,
      height: 166,
      marginRight: 5,
    },
    Srow: {
      width: 164,
      height: 164,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: "#7459e8",
      backgroundColor: "#282455",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
      elevation: 2,
      shadowColor: "black",
      shadowRadius: 1,
      shadowOffset: 3,
      padding: 15,
    },
  });
  return (
    <View style={styles.Srow}>
      <View style={styles.widgetHeading}>
        <MaterialCommunityIcons
          name={props.icoName}
          size={32}
          color="#9392a9"
          style={[styles.widgetHeading, { fontSize: 17, marginRight: 4 }]}
        />
        <Text style={[styles.widgetHeading, { fontSize: 17 }]}>
          {props.headText}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {props.Line1 ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Text style={[styles.widgetStat, { fontSize: 22 }]}>
              {props.Linetext1}
            </Text>
          </View>
        ) : null}

        {props.Line2 ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Text style={[styles.widgetStat, { fontSize: 22, marginTop: -15 }]}>
              {props.Linetext2}
            </Text>
          </View>
        ) : null}
      </View>
      <View></View>
      {props.specialComponent ? props.specialComponent : null}
    </View>
  );
};
const Indirow2 = (props) => {
  const styles = StyleSheet.create({
    widgetHeading: {
      color: "#9392a9",
      display: "flex",
      fontWeight: "600",
      fontSize: 17,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    indiRow: {
      flex: 1,
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      flexDirection: "row",
      width: 362,
      height: 166,
      marginRight: 5,
    },
    Srow: {
      width: 164,
      height: 164,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: "#7459e8",
      backgroundColor: "#282455",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
      elevation: 2,
      shadowColor: "black",
      shadowRadius: 1,
      shadowOffset: 3,
      padding: 15,
    },
    widgetContent: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    line1: {
      color: "white",
      fontWeight: 500,
      marginTop: 5,
      fontSize: 22,
    },
    line2: {
      color: "white",
      fontWeight: 500,
      marginTop: 2,
      fontSize: 22,
    },
    ImageContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      height: "auto",
      marginTop: 5,
    },
    image: {
      width: 128,
      height: 128,
      flex: 1,
    },
    footerText: {
      display: "flex",
      alignItems: "flex-start",
      position: "absolute",
      bottom: 10,
      left: 10,
      justifyContent: "center",
    },
    footer: {
      fontWeight: 400,
      fontSize: 16,
      color: "white",
    },
  });
  return (
    <View style={styles.Srow}>
      <View style={styles.widgetHeading}>
        <MaterialCommunityIcons
          name={props.icoName}
          size={32}
          color="#9392a9"
          style={[styles.widgetHeading, { fontSize: 17, marginRight: 4 }]}
        />
        <Text style={[styles.widgetHeading, { fontSize: 17 }]}>
          {props.headText}
        </Text>
      </View>
      {props.line1 ? (
        <View style={styles.widgetContent}>
          <View style={styles.line1}>
            <Text style={styles.line1}>{props.line1}</Text>
          </View>
          {props.line2 ? (
            <View style={styles.line2}>
              <Text style={styles.line2}>{props.line2}</Text>
            </View>
          ) : null}
        </View>
      ) : null}
      {props.ImageSource ? (
        <View style={styles.ImageContainer}>
          <Image style={styles.image} source={props.ImageSource} />
        </View>
      ) : null}

      <View style={styles.footerText}>
        <Text style={styles.footer}>{props.footer}</Text>
      </View>
    </View>
  );
};
const WeatEclips = (props) => {
  const styles = StyleSheet.create({
    weatherElipse: {
      width: 60,
      height: 148,
      elevation: 6,
      borderRadius: 30,
      backgroundColor: "#3C2E78",
      shadowColor: "#00000040",
      shadowOffset: {
        width: 5,
        height: 4,
      },
      shadowRadius: 10,
      shadowOpacity: 1,
      borderWidth: 1,
      borderColor: "#7b61ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    timeorday: {
      width: 43,
      height: 20,
      fontSize: 15,
      fontWeight: "600",
      lineHeight: 18.95,
      letterSpacing: -0.5,
      color: "#FFFFFF",
      paddingTop: 5,
      textAlign: "center",
    },
    weatherglyphcont: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 8.5,
      marginBottom: 10,
      width: 44,
      height: 38,
    },
    weatherglyph: {
      width: 64,
      height: 64,
    },
    precipitationText: {
      width: 30,
      height: 18,
      fontSize: 13,
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: 18,
      letterSpacing: -0.07800000160932541,
      textAlign: "center",
      color: "#40CBD8",
    },
    degreeContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 13,
    },
    degree: {
      width: 30,
      height: 24,
      fontSize: 20,
      fontWeight: "500",
      textAlign: "center",
      lineHeight: 24,
      letterSpacing: 0.3799999952316284,
      color: "#FFFFFF",
    },
  });
  const getDayFromDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    const day = date.toLocaleDateString(undefined, options);
    return day.substring(0, 3);
  };
  let myDay = getDayFromDate(props.Day);
  return (
    <View style={styles.weatherElipse}>
      <View
        style={{
          margin: 8.5,
          marginTop: 16,
          marginBottom: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {props.isActive === "button1" ? (
          <Text style={styles.timeorday}>{myTime}</Text>
        ) : (
          <Text style={styles.timeorday}>{myDay}</Text>
        )} */}
        <Text style={styles.timeorday}>{myDay}</Text>
      </View>
      <View style={styles.weatherglyphcont}>
        <Image
          style={styles.weatherglyph}
          source={{ uri: `https:${props.icon}` }}
        ></Image>
        {props.precipChances == 0 ? null : (
          <Text style={styles.precipitationText}>{props.precipChances}%</Text>
        )}
      </View>
      <View style={styles.degreeContainer}>
        <Text style={styles.degree}>{Math.floor(props.temp)}&deg;</Text>
      </View>
    </View>
  );
};
const WeatherElipse = (props) => {
  const styles = StyleSheet.create({
    weatherElipse: {
      width: 60,
      height: 148,
      elevation: 6,
      borderRadius: 30,
      backgroundColor: "#3C2E78",
      shadowColor: "#00000040",
      shadowOffset: {
        width: 5,
        height: 4,
      },
      shadowRadius: 10,
      shadowOpacity: 1,
      borderWidth: 1,
      borderColor: "#7b61ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    timeorday: {
      width: 43,
      height: 20,
      fontSize: 15,
      fontWeight: "600",
      lineHeight: 18.95,
      letterSpacing: -0.5,
      color: "#FFFFFF",
      paddingTop: 5,
      textAlign: "center",
    },
    weatherglyphcont: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 8.5,
      marginBottom: 10,
      width: 44,
      height: 38,
    },
    weatherglyph: {
      width: 64,
      height: 64,
    },
    precipitationText: {
      width: 30,
      height: 18,
      fontSize: 13,
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: 18,
      letterSpacing: -0.07800000160932541,
      textAlign: "center",
      color: "#40CBD8",
    },
    degreeContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
      marginTop: 13,
    },
    degree: {
      width: 30,
      height: 24,
      fontSize: 20,
      fontWeight: "500",
      textAlign: "center",
      lineHeight: 24,
      letterSpacing: 0.3799999952316284,
      color: "#FFFFFF",
    },
  });

  const convertTo12HourFormat = (timeStringe) => {
    const getTimeFromString = (timeString) => {
      const [time] = timeString.match(/\d{2}:\d{2}/);
      return time;
    };
    let hours = getTimeFromString(props.time);
    const formatTimeWithPeriod = (timeString) => {
      const [hours, minutes] = timeString.split(":");
      let period = "";

      if (hours >= 12) {
        period = "pm";
      } else {
        period = "am";
      }
      let formattedHours = parseInt(hours, 10) % 12;
      if (formattedHours === 0) {
        formattedHours = 12;
      }
      return `${formattedHours} ${period}`;
    };
    let eek = formatTimeWithPeriod(hours);
    return eek;
  };
  let myTime = convertTo12HourFormat(props.time);
  return (
    <View style={styles.weatherElipse}>
      <View
        style={{
          margin: 8.5,
          marginTop: 16,
          marginBottom: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {props.isActive === "button1" ? (
          <Text style={styles.timeorday}>{myTime}</Text>
        ) : (
          <Text style={styles.timeorday}>{myDay}</Text>
        )} */}
        <Text style={styles.timeorday}>{myTime}</Text>
      </View>
      <View style={styles.weatherglyphcont}>
        <Image
          style={styles.weatherglyph}
          source={{ uri: `https:${props.icon}` }}
        ></Image>
        {props.precipChances == 0 ? null : (
          <Text style={styles.precipitationText}>{props.precipChances}%</Text>
        )}
      </View>
      <View style={styles.degreeContainer}>
        <Text style={styles.degree}>{Math.floor(props.temp)}&deg;</Text>
      </View>
    </View>
  );
};
const BottomSheets = (props) => {
  const bottomSheetModalRef = useRef(null);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
    },
    backdrop: {
      flex: 1,
      backgroundColor: "#00000080",
    },
    contentContainer: {
      backgroundColor: "transparent",
      padding: 16,
      display: "flex",
    },
    title: {
      fontSize: 18,
    },
    gradientBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
    },
    handleHeader: {
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      backgroundColor: "transparent",
    },
    Tabs: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "absolute",
      top: 1,
      left: 0,
      width: 243,
      height: 12,
    },
    Buttons: {
      width: 115,
      height: "auto",
      flex: 1,
      marginTop: 5,
      marginBottom: 4,
      elevation: 3,
    },
    ButtonText: {
      width: 115,
      height: 20,
      fontSize: 15,
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: 20,
      letterSpacing: -0.5,
      textAlign: "right",
      color: "#EBEBF599",
    },
    Divider: {
      backgroundColor: "white",
      width: 408,
      height: 0,
      shadowColor: "#00000033",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 0,
      shadowOpacity: 1,
      borderWidth: 1,
      borderColor: "#ffffff4d",
      marginTop: 19,
    },
    activeButton: {
      backgroundColor: "white",
      width: 115,
      height: "auto",
      flex: 1,
      marginTop: 5,
      marginBottom: 4,
      shadowColor: "pink",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 6,
    },
    weatherContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      marginBottom: 34,
      marginLeft: 11,
    },
    weatherModal: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      width: 563,
      height: 148,
    },

    weatherDetails: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      width: 408,
      height: "auto",
      borderRadius: 44,
    },
    Lrow: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 360,
      height: 158,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: "#7459e8",
      marginBottom: 10,
      flexDirection: "column",
      padding: 12,
      backgroundColor: "#282455",
      elevation: 2,
      shadowColor: "black",
      shadowRadius: 1,
      shadowOffset: 3,
      marginRight: 5,
    },
    widgetHeading: {
      color: "#9392a9",
      display: "flex",
      fontWeight: "600",
      fontSize: 17,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    widgetStat: {
      color: "white",
      fontWeight: 500,
      marginTop: 5,
      fontSize: 32,
    },
    indiRow: {
      flex: 1,
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      flexDirection: "row",
      width: 362,
      height: 166,
      marginRight: 5,
      marginBottom: 12,
    },
    Srow: {
      width: 164,
      height: 164,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 1.0)",
      backgroundColor: "#282455",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
      elevation: 2,
      shadowColor: "black",
      shadowRadius: 1,
      shadowOffset: 3,
      padding: 15,
    },
  });
  const [isActive, setIsActive] = useState("button1");
  const handlePress = (buttonName) => {
    setIsActive(buttonName);
  };
  const healthStatusArray = [
    "Heaven",
    "Good",
    "Moderate",
    "Unhealthy for sensitive group",
    "Unhealthy",
    "Very Unhealthy",
    "Hazardous",
  ];
  const uvIndexArray = [
    { range: [0, 2], text: "Low" },
    { range: [3, 5], text: "Moderate" },
    { range: [6, 7], text: "High" },
    { range: [8, 10], text: "Very High" },
    { range: [11, Infinity], text: "Extreme" },
  ];
  const temperatureArray = [
    { range: [-Infinity, 0], text: "Freezing" },
    { range: [1, 10], text: "Cold" },
    { range: [11, 20], text: "Cool" },
    { range: [21, 30], text: "Warm" },
    { range: [31, 40], text: "Hot" },
    { range: [41, Infinity], text: "Very Hot" },
  ];
  const getRangeText = (value, rangeArray) => {
    const matchedRange = rangeArray.find(
      ({ range }) => value >= range[0] && value <= range[1]
    );
    if (matchedRange) {
      return matchedRange.text;
    }
    return "Unknown"; // Default text if no matching range is found
  };

  useEffect(() => {
    const openBottomSheet = () => {
      bottomSheetModalRef.current?.present();
    };
    openBottomSheet();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          style={{
            borderRadius: 44,
          }}
          snapPoints={["35%", "48%", "90%"]}
          handleIndicatorStyle={{
            flex: 1,
            width: 48,
            height: 5,
            borderRadius: 44,
            backgroundColor: "#ccc",
          }}
          handleHeight={20}
          backdropComponent={null}
          activeOffsetX={[-999, 999]}
          activeOffsetY={[-5, 5]}
          onDismiss={() => {
            bottomSheetModalRef.current?.present();
          }}
        >
          <LinearGradient
            colors={["#2D2B59", "#322964", "#422B7A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBackground}
          >
            <ScrollView style={styles.contentContainer}>
              <View style={styles.Tabs}>
                <TouchableOpacity
                  style={[
                    isActive === "button1"
                      ? styles.activeButton
                      : styles.Buttons,
                    { marginRight: 100, marginLeft: 32 },
                  ]}
                  onPress={() => handlePress("button1")}
                >
                  <Text style={styles.ButtonText}>Hourly Forecast</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    isActive === "button2"
                      ? styles.activeButton
                      : styles.Buttons,
                    ,
                    { marginLeft: 100, marginRight: 32 },
                  ]}
                  onPress={() => {
                    handlePress("button2");
                  }}
                >
                  <Text style={styles.ButtonText}>Weekly Forecast</Text>
                </TouchableOpacity>
              </View>
              <Divider style={styles.Divider} />
              <View style={styles.weatherContainer}>
                <PageScrollView
                  horizontal={true}
                  style={styles.weatherModal}
                  fadingEdgeLength={30}
                  showsHorizontalScrollIndicator={false}
                >
                  {isActive === "button1"
                    ? props.hourlyData
                        .slice(0, 23)
                        .map((hour, index) => (
                          <WeatherElipse
                            isActive={isActive}
                            buttonName={isActive}
                            key={index}
                            time={hour.time}
                            icon={hour.condition.icon}
                            precipChances={hour.chance_of_rain}
                            temp={hour.temp_c}
                          />
                        ))
                    : isActive === "button2"
                    ? props.weeklyData
                        .slice(0, 6)
                        .map((dayz, index) => (
                          <WeatEclips
                            isActive={props.isActive}
                            key={index}
                            Day={dayz.date}
                            icon={dayz.day.condition.icon}
                            precipChances={dayz.day.totalprecip_mm}
                            temp={dayz.day.avgtemp_c}
                          />
                        ))
                    : null}
                </PageScrollView>
              </View>
              <PageScrollView
                style={styles.weatherDetails}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={35}
              >
                <View style={styles.Lrow}>
                  <View style={styles.widgetHeading}>
                    <MaterialCommunityIcons
                      name="face-mask"
                      size={32}
                      color="#9392a9"
                      style={[styles.widgetHeading, { marginRight: 4 }]}
                    />
                    <Text style={styles.widgetHeading}>Air Quality</Text>
                  </View>
                  <View style={styles.widgetStat}>
                    <Text style={styles.widgetStat}>
                      {props.airInd}-{healthStatusArray[props.airInd]}
                    </Text>
                    <View style={[styles.container, { width: 330 }]}>
                      <ProgressBar
                        style={{ flex: 1 }}
                        progress={props.airInd * 10}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.indiRow}>
                  <Indirow
                    icoName={"sunglasses"}
                    headText={"UV Index"}
                    Line1={true}
                    Linetext1={props.uv}
                    Line2={true}
                    Linetext2={getRangeText(props.uv, uvIndexArray)}
                    specialComponent={
                      <ProgressBar progress={(props.uv / 2) * 10} />
                    }
                  />
                  <Indirow2
                    icoName={"weather-sunset-up"}
                    headText={"Sunrise"}
                    line1={props.sunrise}
                    ImageSource={require("../assets/images/sunlight.png")}
                    footer={`Sunset: ${props.sunset}`}
                  />
                </View>
                <View style={styles.indiRow}>
                  <Indirow2
                    icoName={"weather-windy"}
                    headText={"Wind Direction"}
                    ImageSource={require("../assets/images/windDirection1.png")}
                    footer={`Wind Speed: ${props.windSpeed} kph ${props.windDir}`}
                  />
                  <Indirow2
                    icoName={"water"}
                    headText={"Precipitation"}
                    line1={`${props.precip}mm`}
                    footer={`${props.precipText} % chances of rain `}
                  />
                </View>
                <View style={styles.indiRow}>
                  <Indirow
                    icoName={"thermometer"}
                    headText={"Feels Like"}
                    Line1={true}
                    Line2={true}
                    Linetext1={`${props.feelz}\u00B0`}
                    Linetext2={getRangeText(props.feelz, temperatureArray)}
                    specialComponent={<ProgressBar progress={props.feelz} />}
                  />
                  <Indirow
                    icoName={"air-filter"}
                    headText={"Humidity"}
                    Line1={true}
                    Line2={true}
                    Linetext1={props.humidity}
                    Linetext2={`DewPt ${props.humiditypt}`}
                    specialComponent={<ProgressBar progress={props.humidity} />}
                  />
                </View>
                <View style={styles.indiRow}></View>
              </PageScrollView>
            </ScrollView>
          </LinearGradient>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default BottomSheets;
