import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const ViewImageScreen = ({ route }) => {
  const { imageDetails } = route.params;
  const { id, filename, mediaType, creationTime } = imageDetails;

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.titleContainer}>
        <View style={styles.hamburger}>
          <TouchableOpacity onPress={() => navigation.navigate("Layout")}>
            <FontAwesomeIcon icon={faBars} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Take Photo</Text>
      </View>

      <View style={styles.imgTxtContainer}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{ uri: imageDetails.uri }}
        />
        <ScrollView>
          <Text style={styles.textContainer}>
            id: {id} - filename: {filename} - mediaType: {mediaType} -
            creationTime: {creationTime}
            adipisicing elit. Recusandae pariatur voluptatum inventore,
            obcaecati nemo velit labore cumque odio! Officiis nemo qui
            praesentium quisquam optio aut quae explicabo commodi suscipit
            itaque? Enim odio rerum libero veritatis nam doloribus
            exercitationem illum aliquid voluptates voluptatem perspiciatis
            dolores ab optio quasi at ad, eius excepturi obcaecati debitis
            earum. Excepturi quos pariatur nihil quisquam illum. Totam
            voluptatum minima, eveniet dignissimos itaque exercitationem
            expedita maxime? Itaque non ut rem ipsum accusamus quaerat tempore
            cum ea blanditiis. Provident culpa delectus similique velit impedit!
            Minima maxime iure voluptates? Maxime quam porro perspiciatis
            ratione tempore modi omnis pariatur corrupti fugiat iusto unde quis
            quaerat asperiores nisi non dolore est aut, explicabo, sed tenetur!
            Minima eveniet dignissimos alias temporibus debitis. Inventore
            consectetur laboriosam in, eligendi, eveniet quibusdam voluptate
            exercitationem quasi error itaque praesentium non nisi, voluptatum
            suscipit assumenda necessitatibus numquam pariatur delectus!
            Reprehenderit, iste sit fuga harum distinctio officia doloremque? In
            praesentium eligendi ipsam dolorum velit accusantium dignissimos,
            autem quasi atque debitis ex maiores deserunt modi, nihil quia ut.
            At fuga ab facilis tempore quae eius iusto debitis vitae
            repudiandae? Totam repellendus recusandae magni officiis inventore
            eius soluta iusto nam magnam? Necessitatibus tenetur ea voluptates
            aliquam fugit. Odit fuga necessitatibus, officiis consectetur error
            voluptatum accusamus enim optio. Sint, quos debitis! Adipisci non
            modi quas, earum laudantium error numquam distinctio eaque optio
            neque hic saepe molestias dignissimos labore aperiam ratione
            quisquam. Recusandae accusantium ipsum nobis illo voluptatibus
            necessitatibus, laudantium fugit facere? Ea a totam, harum dolorem
            nobis, vel consectetur dolores ipsa exercitationem, error dicta esse
            laboriosam. Deserunt animi rerum obcaecati. Aperiam, distinctio. Id
            autem dolore rem qui dolorem fugiat, nobis iste. Iusto consectetur
            doloribus obcaecati iure ipsa itaque sed incidunt sint veniam est
            amet provident deserunt, sit porro similique alias! Ipsam
            reiciendis, harum sit ex quo commodi nobis animi vitae soluta!
            Sequi, aliquam dignissimos fuga voluptate modi soluta reiciendis
            enim inventore asperiores rerum amet mollitia, excepturi distinctio
            ipsa omnis sunt repudiandae illum veniam dolor tempore fugiat
            magnam. Enim minima labore aperiam. Nemo, iste sed? Dicta vitae ab
            incidunt officia, cupiditate sequi quis consectetur atque tempora
            totam, eveniet nobis sed iste aut adipisci nihil. Totam quis
            aliquam, ea architecto in error vero. Nulla quibusdam mollitia cum
            maiores libero, natus aliquam vitae obcaecati, laudantium, ad
            tenetur eius odio nihil accusantium ducimus unde temporibus ex quae!
            Labore enim tempore error magnam id corrupti? Ducimus? Voluptates
            adipisci quibusdam eos perspiciatis ab obcaecati. Debitis magnam
            autem vitae distinctio eius perferendis, consequatur qui eum
            corporis doloremque voluptatum ducimus quia quidem cum nam veritatis
            deleniti ipsam modi. Nobis! Accusantium, asperiores. Architecto illo
            facere asperiores impedit rem, harum temporibus cupiditate
            voluptatibus eaque, minima excepturi rerum vel nihil veritatis
            magni, fugit libero ipsum facilis eos suscipit. Obcaecati voluptates
            numquam in. Earum rem eius odit, molestias assumenda consequatur
            repudiandae omnis tempore doloremque eum quaerat explicabo rerum.
            Accusamus, atque, voluptatibus debitis mollitia, omnis odit
            asperiores ratione possimus tenetur amet doloribus. Facere, eum. Non
            culpa quis quaerat dolores officiis iste voluptatum perspiciatis
            quia laboriosam. Repudiandae nesciunt repellendus deleniti porro
            sequi reiciendis veritatis aspernatur nemo aut, debitis illum
            deserunt exercitationem atque rem. Accusantium, ratione. Saepe quod
            dolores temporibus suscipit ducimus sequi, dolorem quidem vero totam
            amet. Sed corrupti repudiandae illo incidunt recusandae magnam,
            tenetur quisquam omnis quas neque modi quia in non dolores ex. Illum
            autem corporis, distinctio quia voluptate necessitatibus voluptates,
            in quisquam consequatur quo reprehenderit deleniti nam vitae
            consectetur, nesciunt iste? Quasi, velit perspiciatis? Nihil, dicta
            aliquam explicabo quidem molestias dolores doloremque? Quibusdam,
            cupiditate aut et tempore illo officia eveniet accusantium
            distinctio quas saepe inventore mollitia molestiae rerum, eos eum
            culpa? Qui dicta dignissimos officia ratione dolorem quasi quibusdam
            quis labore soluta?
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  hamburger: {
    position: "absolute",
    left: 10,
  },
  title: {
    fontWeight: "bold",
  },
  textContainer: {
    paddingVertical: 15,
    textAlign: "center",
    marginHorizontal: 15,
  },
  imgTxtContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "auto",
    height: Dimensions.get("window").height / 1.8,
    aspectRatio: 19.5 / 9,
  },
});

export default ViewImageScreen;
