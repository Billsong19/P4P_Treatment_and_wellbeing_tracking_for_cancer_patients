import * as React from "react";
import {
    Text,
    ScrollView,
    Pressable,
    Image,
    TouchableHighlight,
} from "react-native";
import styles from "../styles";

export const ConditionScreen = ({ navigation, route }) => {
    return (
        <ScrollView
            style={{
                height: "100%",
                backgroundColor: "rgba(255,255,255,1)",
                paddingBottom: 40,
            }}
        >
            <Text style={{ fontSize: 20, margin: 20 }}>
                {route.params.condition}
            </Text>
            <Image
                source={require("../public/bowel.jpg")}
                style={{ width: "80%", height: "20%", margin: "auto" }}
            />
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionButton, styles.blueSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 0,
                    })
                }
            >
                <Text style={styles.subHeader}>Overview and Diagnosis</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionButton, styles.tealSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 1,
                    })
                }
            >
                <Text style={styles.subHeader}>Chance of Recovery</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionButton, styles.greenSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 2,
                    })
                }
            >
                <Text style={styles.subHeader}>Course of Disease</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionSubButton, styles.greenSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 3,
                    })
                }
            >
                <Text>Early Stages</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionSubButton, styles.greenSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 4,
                    })
                }
            >
                <Text>Development and Complications</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionButton, styles.yellowSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 5,
                    })
                }
            >
                <Text style={styles.subHeader}>Treatment</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#EEE"}
                style={[styles.conditionButton, styles.orangeSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 6,
                    })
                }
            >
                <Text style={styles.subHeader}>
                    Risks and Long-term Implications
                </Text>
            </TouchableHighlight>
        </ScrollView>
    );
};
