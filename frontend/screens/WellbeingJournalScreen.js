import * as React from "react";
import { TouchableOpacity, Text, TextInput, View, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import LikertButtons from "../components/LikertButtons";
import styles, { swBlue } from "../styles";

export const WellbeingJournalScreen = ({ navigation }) => {
    const [phys, setPhys] = React.useState(-1);
    const [ment, setMental] = React.useState(-1);
    const [open, setOpen] = React.useState(false);
    const [inputSymptom, setInputSymptom] = React.useState("");
    const [inputSeverity, setSeverity] = React.useState(null);
    const severities = [
        { label: "mild", value: "mild" },
        { label: "moderate", value: "moderate" },
        { label: "severe", value: "severe" },
    ];
    const [symptoms, setSymptoms] = React.useState([]);

    return (
        <ScrollView
            style={[styles.page, { backgroundColor: "rgba(255,255,255,0.8)" }]}
        >
            <View style={styles.blueDivider}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>
                    Wellbeing Journal
                </Text>
            </View>
            <View style={styles.tealDivider}>
                <Text style={[styles.subHeader2, { marginVertical: 10 }]}>
                    How are you physically feeling today?
                </Text>
                <LikertButtons active={phys} setActive={setPhys}/>
                <Text style={[styles.subHeader2, { marginVertical: 10 }]}>
                    Do you have any notable symptoms?
                </Text>
                <TouchableOpacity 
                    style={[styles.wideTile, styles.blueBorder]}
                    onPress={() => {
                        setSymptoms([["mild", "nausea"], ["mild", "headache"]])
                    }}>
                    <Text style={{ color: swBlue }}>
                        Same as yesterday: mild nausea, mild headache
                    </Text>
                </TouchableOpacity>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TextInput
                        id="symptomInput"
                        placeholder="symptom"
                        value={inputSymptom}
                        style={{
                            marginBottom: 10,
                            width: "50%",
                            position: "relative",
                            top: 2,
                        }}
                        onChangeText={setInputSymptom}
                    />
                    <Dropdown
                        style={{ marginEnd: 10, width: 150 }}
                        value={inputSeverity}
                        labelField="label"
                        valueField="value"
                        placeholder="Select a severity"
                        data={severities}
                        onFocus={() => setOpen(true)}
                        onChange={(item) => {
                            setSeverity(item.value);
                            setOpen(false);
                        }}
                    />
                    <TouchableOpacity
                        style={[
                            styles.smallButton,
                            styles.tealBackground,
                            { marginRight: 18 },
                        ]}
                        onPress={() => {
                            if (inputSymptom && inputSeverity) {
                                setSymptoms([
                                    ...symptoms,
                                    [inputSeverity, inputSymptom],
                                ]);
                                setInputSymptom("");
                                setSeverity("");
                            }
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 20, marginTop: 10 }}>
                    {symptoms.length < 1 ? (
                        <Text>None</Text>
                    ) : (
                        symptoms.map((symptom, index) => {
                            return (
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginVertical: 5,
                                        alignSelf: "flex-end"
                                    }}
                                    key={index}
                                >
                                    <Text style={{fontSize: 16}}>
                                        {symptom[0]} {symptom[1]}
                                    </Text>
                                    <TouchableOpacity
                                        style={[
                                            styles.smallButton,
                                            styles.orangeBackground,
                                            { marginRight: 18, marginStart: 18 },
                                        ]}
                                        onPress={() => {
                                            var tempSymptoms = [...symptoms]; // who doesn't love needing to manually force re-renders?
                                            var arrIndex =
                                                tempSymptoms.indexOf(symptom);
                                            if (arrIndex !== -1)
                                                tempSymptoms.splice(
                                                    arrIndex,
                                                    1
                                                );
                                            setSymptoms(tempSymptoms);
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                alignSelf: "center",
                                            }}
                                        >
                                            -
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                    )}
                </View>
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
                onPress={() => navigation.navigate("B M Health")}
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
