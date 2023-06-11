import { useQuery } from "@tanstack/react-query";
import Error from "./Components/Error";
const myBaseUrl =
  "http://api.weatherapi.com/v1/forecast.json?key=59e580ae2ccf422c9fd55112230606";

const myFetchFunction = async (key, latitude, longitude) => {
  try {
    const res = await fetch(
      `${myBaseUrl}&q=${latitude},${longitude}&aqi=yes&days=7`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const UseData = (key, latitude, longitude) => {
  const { isLoading, isError, data } = useQuery(
    [key, latitude, longitude],
    () => myFetchFunction(key, latitude, longitude),
    {
      cacheTime: 3600000,
    }
  );
  return { isLoading, isError, data };
};
