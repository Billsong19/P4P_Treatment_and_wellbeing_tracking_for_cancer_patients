import * as React from "react";
import { TouchableOpacity, Text, TextInput, View, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import LikertButtons from "../components/LikertButtons";
import SymptomEntry from "../components/SymptomEntry";
import styles, { swBlue } from "../styles";

export const WellbeingJournalScreen = ({ navigation }) => {
    const [phys, setPhys] = React.useState(-1);
    const [ment, setMental] = React.useState(-1);
    const [symptoms, setSymptoms] = React.useState([]);

    return (
        <ScrollView
            style={[styles.page, { backgroundColor: "#FFF" }]}
        >
            <View style={styles.blueDivider}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>
                    Wellbeing Journal
                </Text>
            </View>
            <Text style={[styles.subHeader2, { marginVertical: 10 }]}>
                How are you physically feeling today?
            </Text>
            <LikertButtons active={phys} setActive={setPhys}/>
            <View style={styles.tealDivider}>
                <SymptomEntry symptoms={symptoms} setSymptoms={setSymptoms}/>
            </View>
            <Text
                style={[styles.subHeader2, { marginBottom: 10, marginTop: 30 }]}
            >
                How are you mentally feeling today?
            </Text>
            <LikertButtons active={ment} setActive={setMental}/>
            <Text style={[styles.subHeader2, { marginVertical: 10 }]}>
                Anything else of note?
            </Text>
            <TextInput
                style={styles.largeTextEntry}
                placeholder="optional"
                multiline={true}
                textAlignVertical="top"
            />
            <TouchableOpacity
                style={
                    phys == -1 || ment == -1
                        ? [styles.wideButton, { backgroundColor: "#CCC" }]
                        : [styles.wideButton, styles.blueBackground]
                }
                onPress={() => navigation.navigate("Songward")}
                disabled={phys == -1 || ment == -1}
            >
                <Text
                    style={[
                        styles.subHeader,
                        {
                            alignSelf: "center",
                            color: phys == -1 || ment == -1 ? "#666" : "#fff",
                        },
                    ]}
                >
                    Confirm
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
