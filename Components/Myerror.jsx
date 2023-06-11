import { StyleSheet, Text, View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Myerror = () => {
  const styles = StyleSheet.create({
    lottie: {
      flex: 1,
      width: "auto",
      height: "auto",
    },
  });
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedLoader
        visible={true}
        overlayColor="black"
        animationStyle={styles.lottie}
        speed={1}
        loop={true}
        source={require("../assets/noconnect.json")}
      ></AnimatedLoader>
    </View>
  );
};

export default Myerror;
