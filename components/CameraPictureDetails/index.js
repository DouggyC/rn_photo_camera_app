import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import * as MediaLibrary from "expo-media-library";

import { useNavigation } from "@react-navigation/native";

const CameraPictureDetails = ({ route }) => {
  const navigation = useNavigation();
  const { photoData } = route.params;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      await setTitle(photoData.filename);
    })();
  }, []);

  return (
    <>
      <View style={styles.titleContainer}>
        <View style={styles.hamburger}>
          <TouchableOpacity onPress={() => navigation.navigate("Layout")}>
            <FontAwesomeIcon icon={faBars} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Image Title</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Image
          style={styles.takenPhoto}
          resizeMode="contain"
          source={{ uri: photoData.uri }}
        />

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ marginHorizontal: 12 }}>
            <Text style={styles.textLabel}>Title:</Text>
            <TextInput
              value={title}
              placeholder="Text"
              onChangeText={txt => setTitle(txt)}
              style={styles.textArea}
            />
          </View>
          <View style={{ marginHorizontal: 12 }}>
            <Text style={styles.textLabel}>Description:</Text>
            <TextInput
              value={description}
              placeholder="Text"
              onChangeText={txt => setDescription(txt)}
              style={[styles.textArea, styles.txtAreaHeight]}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              await MediaLibrary.saveToLibraryAsync(photoData.uri);
              console.log(`
              INSERT INTO PHOTO_DB (id, filename, mediaType, URI, creationTime)
                  VALUES (917209, c54937d7-a1bf-4736-8995-33666905218b_2.jpg, photo, //__dir.static...,  1599423988000);`);
              navigation.navigate("Layout");
            }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  takenPhoto: {
    width: Dimensions.get("window").width,
    height: 220,
  },
  btn: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 15,
    marginVertical: 30,
    marginHorizontal: 12,
  },
  textLabel: {
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  textArea: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
  txtAreaHeight: {
    height: 130,
  },
});

export default CameraPictureDetails;
