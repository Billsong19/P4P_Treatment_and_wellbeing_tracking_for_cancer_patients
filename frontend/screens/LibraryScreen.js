import * as React from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    Pressable,
    ScrollView,
} from "react-native";
import styles from "../styles";

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

    return (
        <ScrollView>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Condition", {
                        condition: "Stomach Cancer",
                    })
                }
            >
                <View>
                    {/* <Image
                        source={require("../public/bowel.jpg")}
                        style={{ width: "100%", height: "100%" }}
                    /> */}
                    <Text>Stomach Cancer</Text>
                </View>
            </TouchableOpacity>
            {DATA.map((cancer, index) => {
                return (
                    <Pressable
                        key={index}
                        style={styles.libraryButton}
                        onPress={() =>
                            navigation.navigate("Condition", {
                                condition: cancer.type,
                            })
                        }
                    >
                        <Text style={[styles.subHeader, { margin: "auto" }]}>
                            {cancer.type}
                        </Text>
                        <Image
                            source={require(`../public/${cancer.img}`)}
                            style={{
                                width: "50%",
                                height: "100%",
                                marginLeft: "auto",
                            }}
                        />
                    </Pressable>
                );
            })}
        </ScrollView>
    );
};
