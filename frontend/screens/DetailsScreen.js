import * as React from "react";
import { Text, ScrollView, Button, View } from "react-native";
import styles, { bmBlue, bmTeal, bmGreen, bmYellow, bmOrange } from "../styles";

const MAX_PAGES = 6;

export const DetailsScreen = ({ navigation, route }) => {
    const [pageNo, setPageNo] = React.useState(route.params.section);
    let contents = [];
    contents = [
        ...contents,
        [
            "Overview",
            "Stomach cancer, also known as gastric cancer, is a cancer that develops from the lining of the stomach. Most of the time, stomach cancer develops in stages over years.",
        ],
        [
            "Diagnosis",
            "Early symptoms may include heartburn, upper abdominal pain, nausea, and loss of appetite. Diagnosis usually involves one or more of the proceedures: Gastroscopic exam is the diagnostic method of choice. This involves insertion of a fibre optic camera into the stomach to visualise it. Upper GI series invloves swallowing liquids which show up during an X-ray. CT scans.",
        ],
        [
            "Potential Causes",
            "The most common cause is infection by the bacterium Helicobacter pylori, which accounts for more than 60% of cases. Smoking, dietary factors such as pickled vegetables and obesity are other risk factors. About 10% of cases run in families, and between 1% and 3% of cases are due to genetic syndromes inherited from a person's parents such as hereditary diffuse gastric cancer.",
        ],
    ];

    let page = "";
    let pageColor = bmBlue;
    switch (pageNo) {
        case 0:
            page = "Overview and Diagnosis";
            pageColor = bmBlue;
            break;
        case 1:
            page = "Chance of Recovery";
            pageColor = bmTeal;
            break;
        case 2:
            page = "Course of Disease";
            pageColor = bmGreen;
            break;
        case 3:
            page = "Early Stages";
            pageColor = bmGreen;
            break;
        case 4:
            page = "Development and Complications";
            pageColor = bmGreen;
            break;
        case 5:
            page = "Treatments";
            pageColor = bmYellow;
            break;
        case 6:
            page = "Risks and long-term implications";
            pageColor = bmOrange;
            break;
        default:
            page = "Error";
            break;
    }

    return (
        <ScrollView
            style={{
                backgroundColor: pageColor,
                height: "100%",
                width: "100%",
            }}
        >
            <Text style={{ fontSize: 20, marginHorizontal: 20, marginTop: 20 }}>
                {route.params.condition}
            </Text>
            <Text
                style={{ fontSize: 20, marginHorizontal: 20, marginBottom: 20 }}
            >
                {page}
            </Text>
            <View
                style={{
                    backgroundColor: "#FFF",
                    marginLeft: "1%",
                    width: "98%",
                }}
            >
                {contents.map((section, index) => {
                    return (
                        <View
                            key={index}
                            style={{ margin: 10, marginBottom: 20 }}
                        >
                            <Text>{section[0]}</Text>
                            <View
                                style={{
                                    width: "92%",
                                    borderBottomColor: "pageColor",
                                    borderBottomWidth: 1,
                                }}
                            />
                            <Text>{section[1]}</Text>
                            <View
                                style={{
                                    width: "50%",
                                    minHeight: 10,
                                    backgroundColor: pageColor,
                                    marginLeft: 0,
                                }}
                            >
                            </View>
                        </View>
                    );
                })}
            </View>
            <Text>{pageNo}</Text>
            <Button
                title="Previous"
                disabled={pageNo <= 0}
                onPress={
                    () => setPageNo(pageNo - 1)
                    // navigation.navigate('Details', { condition: `${route.params.condition}`, section: `${--route.params.section}`})
                }
            />
            <Button
                title="Next"
                disabled={pageNo >= MAX_PAGES}
                onPress={() => setPageNo(pageNo + 1)}
            />
        </ScrollView>
    );
};
