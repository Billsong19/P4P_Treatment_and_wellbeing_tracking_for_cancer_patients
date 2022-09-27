import * as React from "react";
import { Text, ScrollView, View, TouchableHighlight } from "react-native";
import styles, { swBlue, swTeal, swGreen, swYellow, swOrange } from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import infoData from "../public/infoData";

const MAX_PAGES = 6;

export const DetailsScreen = ({ navigation, route }) => {
    const [pageNo, setPageNo] = React.useState(route.params.section);

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

    const contents = infoData.find(data => data.condition === route.params.condition);

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
                {contents.details[pageNo].map((section, index) => {
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
