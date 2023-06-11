import { StyleSheet, Text, View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const MyLoading = (props) => {
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
        visible={props.visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
        loop={true}
        source={require("../assets/loadercat.json")}
      >
        <>
          <Text
            style={{
              fontSize: 21,
              position: "absolute",
              top: 550,
              fontWeight: 600,
            }}
          >
            Repositioning satelites to your location...
          </Text>
        </>
      </AnimatedLoader>
    </View>
  );
};

export default MyLoading;
