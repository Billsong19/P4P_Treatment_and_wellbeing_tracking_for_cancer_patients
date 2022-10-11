import * as React from "react";
import { TouchableOpacity, Text, TextInput, View, ScrollView, Alert } from "react-native";
import LikertButtons from "../components/LikertButtons";
import SymptomEntry from "../components/SymptomEntry";
import { AddJournalEntry } from "../songwardAPI";
import { getUserContext } from "../userContext.js";
import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";

const getLocalEntries = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@journal");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };
  
  const storeLocalEntry = async (value) => {
    try {
      const data = { last_updated: dayjs(), entries: value }
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("@journal", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

export const WellbeingJournalScreen = ({ navigation }) => {
    const [phys, setPhys] = React.useState(-1);
    const [ment, setMental] = React.useState(-1);
    const [isError, setError] = React.useState(false);
    const [symptoms, setSymptoms] = React.useState([]);
    const [additional, setAdditional] = React.useState("");

    const context = getUserContext();
    const user = context.user;

    const completeJournalEntry = () => {
        if (phys == -1 || ment == -1) {
            setError(true);
        } else {
            const journalData = {
                date: new Date(),
                phys_wlbing_rating: phys,
                ment_wlbing_rating: ment,
                symptoms: symptoms,
                additional: additional,
            };
            try {
                AddJournalEntry(user._id, journalData);
                getLocalEntries().then(async (data) => {
                    let tempEntries = data ? data.entries : []
                    await storeLocalEntry(tempEntries);
                })
            } catch (error) {
                getLocalEntries().then(async (data) => {
                    let tempEntries = data ? data.entries : []
                    tempEntries.push(journalData);
                    await storeLocalEntry(tempEntries);
                })
                Alert.alert("No connection", "Failed to connect to the server, your entry has been stored and will be sent to the server upon re-opening the app with a connection.");
            } finally {
                context.completeJournal();
                navigation.navigate("Songward");
            }
        }
    }

    return (
        <ScrollView
            style={[styles.page, { backgroundColor: "#FFF" }]}
        >
            <View style={styles.blueDivider}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}>
                    Wellbeing Journal
                </Text>
            </View> 
            <View style={
                (isError && phys === -1)
                ? [styles.smallShadow, {margin: 4, padding: 4, borderRadius: 8, borderWidth: 1, borderColor: "#CF3028", elevation: 4, marginTop: 30 }]
                : [styles.smallShadow, {margin: 4, padding: 4, borderRadius: 8, elevation: 4, marginTop: 30 }]}>
                <Text style={[styles.subHeader2, { margin: 5 }]}>
                    How are you physically feeling today?
                </Text>
                <LikertButtons active={phys} setActive={setPhys}/>
                { (isError && phys === -1) && 
                <Text
                    style={{color: "#CF3028", paddingStart: 10, paddingBottom: 5}}>
                    Selection required
                </Text>
                }
            </View>
            <View style={styles.tealDivider}>
                <SymptomEntry symptoms={symptoms} setSymptoms={setSymptoms}/>
            </View>
            <View style={
                (isError && ment === -1)
                ? [styles.smallShadow, {margin: 4, padding: 4, borderRadius: 8, borderWidth: 1, borderColor: "#CF3028", elevation: 4, marginTop: 30 }]
                : [styles.smallShadow, {margin: 4, padding: 4, borderRadius: 8, elevation: 4, marginTop: 30 }]}>
                <Text
                    style={[styles.subHeader2, { margin: 5}]}
                >
                    How are you mentally feeling today?
                </Text>
                <LikertButtons active={ment} setActive={setMental}/>
                { (isError && ment === -1) && 
                <Text
                    style={{color: "#CF3028", paddingStart: 10, paddingBottom: 5}}>
                    Selection required
                </Text>
                }
            </View>
            <Text style={[styles.subHeader2, { marginVertical: 10 }]}>
                Anything else of note?
            </Text>
            <TextInput
                style={styles.largeTextEntry}
                placeholder="optional"
                value={additional}
                onChangeText={setAdditional}
                multiline={true}
                textAlignVertical="top"
            />
            <TouchableOpacity
                style={
                    phys == -1 || ment == -1
                        ? [styles.wideButton, { backgroundColor: "#CCC", marginBottom: 20 }]
                        : [styles.wideButton, styles.blueBackground, { marginBottom: 20 }]
                }
                onPress={() => completeJournalEntry()}
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
