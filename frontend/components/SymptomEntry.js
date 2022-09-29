import * as React from "react";
import { TouchableOpacity, Text, TextInput, View} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles, { swBlue } from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const yesterday = [["mild", "nausea"], ["mild", "headache"]];

/*
    SymptomEntry is a component for entering and displaying symptoms
    for use in the WellbeingJournalScreen. Its props allow data
    to be communicated back the the WellbeingJournalScreen
    props:
    active: current list of symptoms
    setActive: function to set the currentl list of symptoms
*/
export default SymptomEntry = ({symptoms, setSymptoms}) => {
    const [inputError, setInputError] = React.useState(false);
    const [inputSymptom, setInputSymptom] = React.useState("");
    const [inputSeverity, setSeverity] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const severities = [
        { label: "mild", value: "mild" },
        { label: "moderate", value: "moderate" },
        { label: "severe", value: "severe" },
    ];

    const addSymptom = () => {
        if (inputSymptom && inputSeverity) {
            setInputError(false)
            setSymptoms([
                ...symptoms,
                [inputSeverity, inputSymptom],
            ]);
            setInputSymptom("");
            setSeverity("");
        } else {
            setInputError(true);
        }
    }

    const removeSymptom = (symptom) => {
        var tempSymptoms = [...symptoms];
        var arrIndex =
            tempSymptoms.indexOf(symptom);
        if (arrIndex !== -1)
            tempSymptoms.splice(
                arrIndex,
                1
            );
        setSymptoms(tempSymptoms);
    }

    return (
        <View>
            <Text style={[styles.subHeader2, { marginVertical: 10 }]}>
                    Do you have any notable symptoms?
                </Text>
                <TouchableOpacity 
                    style={[styles.wideTile, styles.blueBorder]}
                    onPress={() => {
                        setSymptoms(yesterday);
                    }}>
                    <Text style={{ color: swBlue }}>
                        Same as yesterday: {yesterday.map((entry) => {return (entry[0] + " " + entry[1] + ", ")})}
                    </Text>
                </TouchableOpacity>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{
                        marginBottom: 10,
                        width: "45%",
                        position: "relative",
                        marginEnd: 10,
                        }}>
                        <Text style={ (inputError && !inputSymptom) ? {color: "#CF3028", height: 20} : {color: "#CF3028", width: 0, height: 20}}>
                            Symptom required
                        </Text>
                        <TextInput
                            id="symptomInput"
                            placeholder="symptom"
                            value={inputSymptom}
                            style={styles.symptomEntry}
                            onChangeText={setInputSymptom}
                        />
                    </View>
                    <View>
                        <Text style={ (inputError && !inputSeverity) ? {color: "#CF3028", height: 20} : {color: "#CF3028", width: 0, height: 20}}>
                            Severity required
                        </Text>
                        <Dropdown
                        style={[styles.symptomEntry, { marginEnd: 10, width: 150 }]}
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
                    </View>
                    <TouchableOpacity
                        style={ inputSymptom && inputSeverity ? 
                            [
                            styles.smallButton,
                            styles.tealBackground,
                            { 
                                marginRight: 18,
                                top: 4,
                                justifyContent: "center",
                            },
                            ] : [styles.smallButton,
                            { 
                                marginRight: 18,
                                backgroundColor: "#CCC",
                                top: 4,
                                justifyContent: "center",
                            }
                        ]}
                        onPress={addSymptom}
                    >
                        <Ionicons
                            name="add"
                            size={24}
                            style={{left: 6}}
                        />
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
                                            styles.orangeBackground,
                                            { marginRight: 18, marginStart: 18, height: 30, width: 30, borderRadius: 8, bottom: 2 },
                                        ]}
                                        onPress={() => removeSymptom(symptom)}
                                    >
                                        <Ionicons
                                            name="close"
                                            size={20}
                                            style={{left: 5, top: 4}}
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                    )}
                </View>
        </View>
    )
}