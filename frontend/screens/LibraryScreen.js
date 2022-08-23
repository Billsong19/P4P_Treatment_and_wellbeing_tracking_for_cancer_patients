import * as React from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import styles from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { style } from "@mui/system";

export const LibraryScreen = ({ navigation }) => {
  const DATA = [
    {
      type: "Stomach Cancer",
      img: "stomach.jpg",
    },
    {
      type: "Liver Cancer",
      img: "liver.jpg",
    },
    {
      type: "Prostate Cancer",
      img: "prostate.jpg",
    },
    {
      type: "Breast Cancer",
      img: "breast.jpg",
    },
    {
      type: "Leukemia",
      img: "leukemia.jpg",
    },
    {
      type: "Skin Cancer",
      img: "Melanoma.jpg",
    },
    {
      type: "Lung Cancer",
      img: "lung.jpg",
    },
    {
      type: "Brain Tumor",
      img: "brain.jpg",
    },
  ];
  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(DATA);

  React.useEffect(() => {
    setFilteredData(
      DATA.filter((data) =>
        data.type.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.searchBar}>
        <Ionicons name="search" style={{ fontSize: 20, marginEnd: 10 }} />
        <TextInput
          placeholder="Search..."
          style={{ width: "85%" }}
          value={search}
          onChangeText={setSearch}
        ></TextInput>
        <Ionicons
          id="removeSearch"
          name="close"
          color="#999"
          onPress={() => setSearch("")}
          style={{
            display: search.length > 0 ? "flex" : "none",
            fontSize: 20,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Condition", {
            condition: "Bowel Cancer",
          })
        }
        style={[
          styles.wideTile,
          styles.blueDivider,
          {
            marginTop: "2%",
            alignSelf: "flex-start",
            width: "96%",
            maxHeight: 200,
          },
        ]}
      >
        <View style={{ width: "100%" }}>
          <Image
            source={require("../public/bowel.jpg")}
            resizeMode="cover"
            style={{
              width: "100%",
              maxHeight: 160,
            }}
          />
          <Text style={{ fontSize: 18 }}>Bowel Cancer</Text>
        </View>
      </TouchableOpacity>
      {filteredData.map((cancer, index) => {
        return (
          <TouchableHighlight
            key={index}
            style={[styles.libraryButton]}
            underlayColor={"#EEE"}
            onPress={() =>
              navigation.navigate("Condition", {
                condition: cancer.type,
              })
            }
          >
            <Text style={[styles.subHeader]}>{cancer.type}</Text>
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
};
