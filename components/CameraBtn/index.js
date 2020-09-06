import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const CameraBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.iconCenter}
      onPress={() => navigation.navigate("Camera Screen")}
    >
      <View style={styles.circle}>
        <FontAwesomeIcon icon={faCamera} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 50,
    borderWidth: 1,
    padding: 8,
  },
  iconCenter: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default CameraBtn;
