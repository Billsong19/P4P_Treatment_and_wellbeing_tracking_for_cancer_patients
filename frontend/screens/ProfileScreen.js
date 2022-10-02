import * as React from "react";
import {
    Pressable,
    Text,
    View,
    ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
            { title: "General Practitioner", name: "Dr. Angus Smith", phone: "123-456-7890", email: "aSmith@email.co.nz" },
            { title: "Cancer Specialist", name: "Dr. Erica Lin", phone: "123-456-7890", email: "eLin@email.co.nz" },
            { title: "Clinician", name: "Dr. Zonal Ali", phone: "123-456-7890", email: "zAli@email.co.nz" },
            { title: "Nurse", name: "Norman Ware", phone: "123-456-7890", email: "nWare@email.co.nz" },
        ],
    };
    return (
        <ScrollView style={{backgroundColor: "#FFF"}}>
            <View
                style={[
                    styles.wideTile,
                    styles.blueDivider,
                    styles.smallShadow,
                    { flexDirection: "row",
                    marginTop: 5 },
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
                            color: "#FFF"
                        }}
                    >
                        View wellbeing journal
                    </Text>
                </Pressable>
            </View>

            <View style={[styles.wideTile, styles.tealDivider, styles.smallShadow]}>
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
                    style={[styles.conditionButton, styles.tealSide, styles.tealBorder]}
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
                    style={[styles.conditionButton, styles.greenSide, styles.greenBorder]}
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

            <View style={[styles.wideTile, styles.greenDivider, styles.smallShadow]}>
                <Text style={styles.mainHeader}>Treatment Staff</Text>
                {DATA.treatment_staff.map((staff_member, index) => {
                    return (
                        <TouchableOpacity
                            style={[styles.greenDivider, styles.smallShadow, {marginTop: 5, padding: 5}]}
                            onPress={() => navigation.navigate("Contact Healthcare Provider")}
                            key={index}
                        >
                            <Text>{staff_member.title}</Text>
                            <Text style={styles.subHeader}>{staff_member.name}</Text>
                            <Text
                                style={{ color: "blue" }}
                            >
                                {staff_member.phone}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    );
};
