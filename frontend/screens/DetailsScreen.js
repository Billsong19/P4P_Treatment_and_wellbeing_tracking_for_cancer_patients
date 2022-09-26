import { stepLabelClasses } from "@mui/material";
import * as React from "react";
import { Text, ScrollView, Button, View, TouchableHighlight } from "react-native";
import styles, { swBlue, swTeal, swGreen, swYellow, swOrange } from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const MAX_PAGES = 6;

export const DetailsScreen = ({ navigation, route }) => {
    const [pageNo, setPageNo] = React.useState(route.params.section);
    let contents = [];
    contents = [
        ...contents,
        [{
            header: "Overview",
            content: "Stomach cancer, also known as gastric cancer, is a cancer that develops from the lining of the stomach. Most of the time, stomach cancer develops in stages over years.",
        },
        {
            header: "Diagnosis",
            content: "Early symptoms may include heartburn, upper abdominal pain, nausea, and loss of appetite. Diagnosis usually involves one or more of the proceedures: Gastroscopic exam is the diagnostic method of choice. This involves insertion of a fibre optic camera into the stomach to visualise it. Upper GI series invloves swallowing liquids which show up during an X-ray. CT scans.",
        },
        {
            header: "Potential Causes",
            content: "The most common cause is infection by the bacterium Helicobacter pylori, which accounts for more than 60% of cases. Smoking, dietary factors such as pickled vegetables and obesity are other risk factors. About 10% of cases run in families, and between 1% and 3% of cases are due to genetic syndromes inherited from a person's parents such as hereditary diffuse gastric cancer.",
        }],
        [{
            header: "Chance of Recovery",
            content: "Chance of recovery body"
        }],
        [{
            header: "Course of Disease",
            content: "Course of disease body"
        }],
        [{
            header: "Early stages",
            content: "Early stages body"
        }],
        [{
            header: "Development and complciations",
            content: "D A C body"
        }],
        [{
            header: "Treatments",
            content: "Treatments body"
        }],
        [{
            header: "Risks and long-term implications",
            content: "RALTI body"
        }],
        
    ];

    let page = "";
    let pageColor = swBlue;
    switch (pageNo) {
        case 0:
            page = "Overview and Diagnosis";
            pageColor = swBlue;
            break;
        case 1:
            page = "Chance of Recovery";
            pageColor = swTeal;
            break;
        case 2:
            page = "Course of Disease";
            pageColor = swGreen;
            break;
        case 3:
            page = "Early Stages";
            pageColor = swGreen;
            break;
        case 4:
            page = "Development and Complications";
            pageColor = swGreen;
            break;
        case 5:
            page = "Treatments";
            pageColor = swYellow;
            break;
        case 6:
            page = "Risks and long-term implications";
            pageColor = swOrange;
            break;
        default:
            page = "Error";
            break;
    }

    return (
        <View style={{height: "100%"}}>  
            <ScrollView>
                <View style={{backgroundColor: pageColor}}>
                    <View style={{margin: 20}}>
                        <Text style={styles.mainHeader}>
                            {route.params.condition}
                        </Text>
                        <Text
                            style={styles.subHeader}
                        >
                            {page}
                        </Text>
                    </View>
                </View>
                {contents[pageNo].map((section, index) => {
                    return (
                        <View
                            key={index}
                            style={{ margin: 10 }}
                        >
                            <Text style={styles.subHeader}>{section.header}</Text>
                            <Text style={{fontSize: 18}}>{section.content}</Text>
                            <View
                                style={{
                                    width: "92%",
                                    borderBottomColor: "#999",
                                    borderBottomWidth: 1,
                                    marginTop: 20
                                }}
                            />
                        </View>
                    );
                })}
                <View style={{backgroundColor: pageColor, height: 20, width: "100%"}}/>
            </ScrollView>
            <TouchableHighlight
                style={[styles.pageNavButton, {left: 0}]}
                underlayColor={"rgba(0,0,0,0.1)"}
                disabled={pageNo <= 0}
                onPress={
                    () => setPageNo(pageNo - 1)
                    // navigation.navigate('Details', { condition: `${route.params.condition}`, section: `${--route.params.section}`})
                }
            >
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color={ pageNo <= 0 ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.5)" }
                />
            </TouchableHighlight>
            <TouchableHighlight
                style={[styles.pageNavButton, {right: 0}]}
                underlayColor={"rgba(0,0,0,0.1)"}
                disabled={pageNo >= MAX_PAGES}
                onPress={() => setPageNo(pageNo + 1)}
            >
                <Ionicons
                    style={{alignSelf: "flex-end"}}
                    name="chevron-forward"
                    size={24}
                    color={ pageNo >= MAX_PAGES ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.5)" }
                />
            </TouchableHighlight>
        </View>
    );
};
