import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import styles from "../styles";

export const ProfileScreen = ({ navigation }) => {
    const DATA = {
        name: "John Doe",
        cancer_type: "Breast",
        diagnosis_date: "01/01/2020",
        stage: "Stage 3",
        last_stage_update: "01/01/2020",
        treatment_staff: [
            { title: "GP", phone: "123-456-7890", name: "Dennis Rodman" },
            { title: "Nurse", phone: "123-456-7890", name: "Phil Jackson" },
        ],
    };
    return (
        <View>
            <View style={[styles.wideTile, styles.blueBorder]}>
                <Text style={{ fontSize: 20 }}>{DATA.name}</Text>
            </View>

            <View style={[styles.wideTile, styles.blueBorder]}>
                <Text style={{ fontWeight: "bold" }}>
                    Condition Information
                </Text>
                <Text>
                    {DATA.cancer_type} Cancer: Diagnosed {DATA.diagnosis_date}
                </Text>
                <Text>
                    {DATA.stage} as of {DATA.last_stage_update}
                </Text>
            </View>

            <View style={[styles.wideTile, styles.blueBorder]}>
                <Text style={{ fontWeight: "bold" }}>Treatment Staff</Text>
                {DATA.treatment_staff.map((item) => {
                    return (
                        <View style={{ paddingBottom: 10 }}>
                            <Text>{item.title}</Text>
                            <Text
                                style={{ color: "blue" }}
                                onPress={() => {
                                    Linking.openURL(`tel:${item.phone}`);
                                }}
                            >
                                {item.phone}
                            </Text>
                            <Text>{item.name}</Text>
                        </View>
                    );
                })}
            </View>

            <Button
                title="Back to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};
