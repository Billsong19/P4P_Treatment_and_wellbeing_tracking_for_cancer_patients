import * as React from "react";
import {
    Pressable,
    Text,
    View,
    ScrollView,
} from "react-native";
import styles from "../styles";

export const ProfileScreen = ({ navigation }) => {
    const DATA = {
        name: "John Doe",
        age: "61",
        cancer_type: "Breast Cancer",
        diagnosis_date: "01/01/2020",
        stage: "Stage 3",
        last_stage_update: "01/01/2020",
        treatment_period: "Early-middle",
        treatment_staff: [
            { title: "GP", phone: "123-456-7890", name: "Dennis Rodman" },
            { title: "Nurse", phone: "123-456-7890", name: "Phil Jackson" },
        ],
    };
    return (
        <ScrollView>
            <View
                style={[
                    styles.wideTile,
                    styles.blueDivider,
                    { flexDirection: "row" },
                ]}
            >
                <View style={{ flex: 1, padding: 10 }}>
                    <Text style={{ fontSize: 20 }}>{DATA.name}</Text>
                    <Text>{DATA.age}</Text>
                </View>
                <Pressable
                    style={[
                        styles.halfButton,
                        styles.blueBackground,
                        { alignSelf: "flex-end" },
                    ]}
                    onPress={() => navigation.navigate("Wellbeing Journal")}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            marginHorizontal: "auto",
                            textAlign: "center",
                        }}
                    >
                        View wellbeing journal
                    </Text>
                </Pressable>
            </View>

            <View style={[styles.wideTile, styles.tealDivider]}>
                <Text style={styles.mainHeader}>Condition Information</Text>
                <View style={{ flexDirection: "row", margin: 6 }}>
                    <Text style={styles.subHeader}>{DATA.cancer_type} </Text>
                    <Text style={{ marginLeft: "auto" }}>
                        Diagnosed: {DATA.diagnosis_date}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", margin: 6 }}>
                    <Text style={styles.subHeader}>{DATA.stage} </Text>
                    <Text style={{ marginLeft: "auto" }}>
                        as of: {DATA.last_stage_update}
                    </Text>
                </View>

                <View style={{ margin: 6 }}>
                    <Text style={styles.subHeader}>
                        {DATA.treatment_period} treatment period
                    </Text>
                </View>
                <Pressable
                    style={[styles.conditionButton, styles.tealSide]}
                    onPress={() =>
                        navigation.navigate("Details", {
                            condition: `${DATA.cancer_type}`,
                            section: 1,
                        })
                    }
                >
                    <Text>Chance of Recovery</Text>
                </Pressable>
                <Pressable
                    style={[styles.conditionButton, styles.greenSide]}
                    onPress={() =>
                        navigation.navigate("Details", {
                            condition: `${DATA.cancer_type}`,
                            section: 2,
                        })
                    }
                >
                    <Text>Course of Disease</Text>
                </Pressable>
            </View>

            <View style={[styles.wideTile, styles.greenDivider]}>
                <Text style={styles.mainHeader}>Treatment Staff</Text>
                {DATA.treatment_staff.map((staff_member, index) => {
                    return (
                        <View
                            style={[
                                styles.yellowDivider,
                                { paddingVertical: 5 },
                            ]}
                            key={index}
                        >
                            <Text>{staff_member.title}</Text>
                            <Text>{staff_member.name}</Text>
                            <Text
                                style={{ color: "blue" }}
                                onPress={() => {
                                    Linking.openURL(
                                        `tel:${staff_member.phone}`
                                    );
                                }}
                            >
                                {staff_member.phone}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
};
