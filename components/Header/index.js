import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useNavigation } from "@react-navigation/native";

import CameraBtn from "../CameraBtn";

const Header = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Layout")}>
        <FontAwesomeIcon icon={faBars} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>Browse</Text>
      </View>
      <CameraBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: 'center'
  },
});

export default Header;
