import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Error from "./Error";
const Weather = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const onChangeSearch = (query) => setSearchQuery(query);
  const styles = StyleSheet.create({
    gradientBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      color: "#101010",
      marginTop: 60,
      fontWeight: "700",
    },
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      flexDirection: "row",
    },
    coverImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    metaInfo: {
      marginLeft: 10,
    },
    title: {
      fontSize: 18,
      width: 200,
      padding: 10,
    },
  });
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=59e580ae2ccf422c9fd55112230606&q=${searchQuery}`
    )
      .then((response) => response.json())
      .then((results) => {
        setData(results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [searchQuery]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Error errorText={"damn those solar flares"} />
      </View>
    );
  }
  return (
    <LinearGradient
      colors={["#2D2B59", "#322964", "#422B7A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBackground}
    >
      <Searchbar
        placeholder="Search for a city or state"
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={4}
        iconColor="white"
        inputStyle={{
          width: 326.36962890625,
          height: 22,
          fontSize: 17,
          fontWeight: "400",
          lineHeight: 22,
          letterSpacing: -0.40799999237060547,
          color: "white",
        }}
        mode="bar"
        style={{
          padding: 7,
          paddingLeft: 8,
          paddingRight: 8,
          backgroundColor: "#443987",
          color: "white",
          margin: 16,
          marginTop: 15,
          marginBottom: 10,

          borderRadius: 10,
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={{
              backgroundColor: "#443987",
              padding: 10,
              marginVertical: 5,
              borderRadius: 5,
            }}
            onPress={() =>
              navigation.navigate("MainScreen", {
                lats: item.lat,
                longs: item.lon,
              })
            }
          >
            <Text style={{ color: "white", fontSize: 16 }}>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </LinearGradient>
  );
};

export default Weather;
