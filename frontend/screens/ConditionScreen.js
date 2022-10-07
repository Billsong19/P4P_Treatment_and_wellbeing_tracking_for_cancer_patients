import * as React from "react";
import {
    Text,
    ScrollView,
    View,
    Image,
    TouchableHighlight,
} from "react-native";
import styles from "../styles";
import infoData from "../public/infoData";

export const ConditionScreen = ({ navigation, route }) => {
    const img = infoData.find(data => data.condition === route.params.condition)?.img;

    return (
        <ScrollView
            style={{
                backgroundColor: "#FFF",
            }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            
            <Text style={{ fontSize: 20, margin: 20 }}>
                {route.params.condition}
            </Text>
            <View style={{maxHeight: 200}}>
                { img &&
                <Image
                    source={img}
                    resizeMode="cover"
                    style={{ width: "100%", maxHeight: 200 }}
                /> 
                }
            </View>
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
                style={[styles.conditionButton, styles.yellowSide]}
                onPress={() =>
                    navigation.navigate("Details", {
                        condition: `${route.params.condition}`,
                        section: 3,
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
                        section: 4,
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
