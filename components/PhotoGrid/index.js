import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

import * as MediaLibrary from "expo-media-library";

import { useNavigation } from "@react-navigation/native";

const PhotoGrid = () => {
  const [imgURIs, setImgURIs] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      let media = await MediaLibrary.getAssetsAsync({ mediaType: ["photo"], sortBy: ['creationTime'] });
      // let mediaArr = await media.assets.map(img => ({
      //   id: img.id,
      //   uri: img.uri,
      // }));
      setImgURIs(media.assets);
      setHasPermission(status === "granted");
    })();
  }, []);

  if (imgURIs.length < 1 && hasPermission === null) {
    return <View />;
  }

  if (imgURIs.length > 1) {
    return (
      <FlatList
        data={imgURIs}
        keyExtractor={img => img.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("View Image Screen", { imageDetails: item });
            }}
          >
            <Image
              style={styles.thumbnail}
              source={{ uri: item.uri }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    );
  }
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 1,
    width: 100,
    height: Dimensions.get("window").width / 2,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },
  thumbnail: {
    height: Dimensions.get("window").width / 2,
  },
});

export default PhotoGrid;
