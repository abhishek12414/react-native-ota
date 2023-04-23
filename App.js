import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";

import AppUpdate from "./components/updateApp";

export default function App() {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [updateObj, setUpdateObj] = useState("");

  useEffect(() => {
    checkForUpdates();
  }, []);

  const checkForUpdates = async () => {
    try {
      const updateResponseObj = await Updates.checkForUpdateAsync();
      setUpdateObj(JSON.stringify(updateResponseObj));
      if (updateResponseObj.isAvailable) {
        setIsUpdateAvailable(true);
      }
    } catch (error) {
      // Handle the error
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Over the air update</Text>
      <Text style={styles.subTitle}>Flight 1</Text>

      {isUpdateAvailable && <AppUpdate updateObj={updateObj} />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    marginVertical: 12,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
