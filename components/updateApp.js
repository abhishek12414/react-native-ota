import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import * as Updates from "expo-updates";
import ProgressBar from "react-native-progress/Bar";

const AppUpdate = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadUpdate = async () => {
    try {
      setIsDownloading(true);
      await Updates.fetchUpdateAsync();
      setIsDownloading(false);
      setIsDownloaded(true);
      Updates.reloadAsync();
    } catch (error) {
      // Handle the error
      console.log(error);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} style={styles.modal}>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.title}>New version available</Text>
          <Text style={styles.subTitle}>
            Looks like you have an older version of the app. Please update to
            get the latest features and best experience
          </Text>

          {!isDownloaded && (
            <Button title="Update Now" onPress={handleDownloadUpdate} />
          )}

          {isDownloading && (
            <View style={styles.reloadContainer}>
              <Text style={styles.title}>Downloading update</Text>
              <ProgressBar indeterminate width={200} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AppUpdate;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D2D2D",
  },
  container: {
    width: "80%",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    color: "#2D2D2D",
    fontWeight: "bold",
    marginVertical: 12,
  },
  subTitle: {
    color: "#2D2D2D",
    fontSize: 16,
    marginBottom: 18,
  },
  reloadContainer: {
    marginVertical: 12,
  },
});
