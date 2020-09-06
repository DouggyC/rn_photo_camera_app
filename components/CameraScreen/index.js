import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import * as MediaLibrary from "expo-media-library";

import { useNavigation } from "@react-navigation/native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faCamera } from "@fortawesome/free-solid-svg-icons";

import { Camera } from "expo-camera";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let options = {
    quality: 0,
    exif: false
  };

  return (
    <Camera style={styles.cameraLayout} ref={ref => setCameraRef(ref)}>
      <View style={styles.titleContainer}>
        <View style={styles.hamburger}>
          <TouchableOpacity onPress={() => navigation.navigate("Layout")}>
            <FontAwesomeIcon icon={faBars} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Take Photo</Text>
      </View>

      <View style={{ backgroundColor: "transparent" }} />

      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={async () => {
            if (cameraRef) {
              let { uri } = await cameraRef.takePictureAsync(options);
              const asset = await MediaLibrary.createAssetAsync(uri);
              console.log('ASSET CREATE')
              navigation.push("Camera Picture Details", { photoData: asset });
            }
          }}
        >
          <View style={styles.circle}>
            <FontAwesomeIcon icon={faCamera} />
          </View>
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    backgroundColor: "#c2c2c2",
    justifyContent: "center",
    alignItems: "center",
  },
  hamburger: {
    position: "absolute",
    left: 10,
  },
  cameraLayout: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  circle: {
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
  },
  btnContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#c2c2c2",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraScreen;
