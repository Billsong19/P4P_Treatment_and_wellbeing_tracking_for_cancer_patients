import React from "react";
import { StyleSheet } from "react-native";

export const bmBlue = "#75A9D9";
export const bmTeal = "#75D9D3";
export const bmGreen = "#75D9A9";
export const bmYellow = "#F3E6A2"; //maybe replace, kinda ugly
export const bmOrange = "#FFA978";

const bmTealRGB = "117, 217, 211";

const styles = StyleSheet.create({
    page: {
        margin: 0,
        padding: "2%",
    },
    wideTile: {
        margin: "2%",
        marginTop: 0,
        padding: "2%",
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    wideButton: {
        padding: 15,
        borderRadius: 4,
    },
    halfButton: {
        color: "black",
        uppercase: false,
        padding: 5,
        width: "45%",
        marginRight: "5%",
        borderRadius: 4,
    },
    mainHeader: {
        fontWeight: "600",
        fontSize: 20,
    },
    subHeader: {
        fontWeight: "500",
        fontSize: 18,
    },
    subHeader2: {
        fontWeight: "500",
        fontSize: 16,
    },
    blueBackground: {
        backgroundColor: bmBlue,
    },
    tealBackground: {
        backgroundColor: bmTeal,
    },
    tealBackground50: {
        backgroundColor: `rgba(${bmTealRGB}, 0.5)`,
    },
    greenBackground: {
        backgroundColor: bmGreen,
    },
    yellowBackground: {
        backgroundColor: bmYellow,
    },
    orangeBackground: {
        backgroundColor: bmOrange,
    },
    libraryButton: {
        marginHorizontal: "2%",
        marginVertical: "1%",
        padding: "1%",
        height: 50,
        display: "flex",
        flexDirection: "row",
    },
    conditionButton: {
        marginVertical: "1%",
        padding: "4%",
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    conditionSubButton: {
        padding: "1%",
        backgroundColor: "rgba(255,255,255,0.8)",
        width: "80%",
        alignSelf: "flex-end",
    },
    reminderButton: {
        marginHorizontal: "1%",
        marginVertical: "1%",
        padding: "1%",
    },
    blueBorder: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: `${bmBlue}`,
    },
    tealBorder: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: `${bmTeal}`,
    },
    greenBorder: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: `${bmGreen}`,
    },
    yellowBorder: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: `${bmYellow}`,
    },
    orangeBorder: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: `${bmOrange}`,
    },
    blueDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${bmBlue}`,
    },
    tealDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${bmTeal}`,
    },
    greenDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${bmGreen}`,
    },
    yellowDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${bmYellow}`,
    },
    orangeDivier: {
        borderBottomWidth: 4,
        borderBottomColor: `${bmOrange}`,
    },
    blueSide: {
        borderRightWidth: 20,
        borderRightColor: `${bmBlue}`,
    },
    tealSide: {
        borderRightWidth: 20,
        borderRightColor: `${bmTeal}`,
    },
    greenSide: {
        borderRightWidth: 20,
        borderRightColor: `${bmGreen}`,
    },
    yellowSide: {
        borderRightWidth: 20,
        borderRightColor: `${bmYellow}`,
    },
    orangeSide: {
        borderRightWidth: 20,
        borderRightColor: `${bmOrange}`,
    },
    textEntry: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#888',
        marginVertical: 10,
        padding: 2,
        backgroundColor: "#FFF",
    },
    largeTextEntry: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#888',
        marginVertical: 10,
        height: 60,
        padding: 4,
        backgroundColor: "#FFF",
    },
    smallButton: {
        width: 30,
        height: 30,
        margin: "auto",
        borderRadius: 4,
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 4,
        margin: 5,
        display: "flex",
    },
    radioFill: {
        height: 16,
        width: 16,
        borderRadius: 12,
        margin: 5,
        display: "flex",
        backgroundColor: `${bmBlue}`,
        right: 3,
        bottom: 3,
    },
    emptyRadioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        alignSelf: 'center',
        display: "flex",
    },
    dailyReminder: {
        borderRadius: 5,
        backgroundColor: "#FFF",
        margin: "1%",
        padding: "1%",
    },
    datedReminder: {
        margin: "1%",
        padding: "1%",
    },
    modalBase: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#999',
        marginTop: "2%",
        marginHorizontal: "4%",
        backgroundColor: "#FFF",
        height: "95%",
        padding: "4%",
        zIndex: 9,
    },
    underModal: {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 8,
    },
    remindersCheck: {
        backgroundColor: "rgba(0,0,0,0)",
        marginEnd: 5,
        position: 'relative',
        bottom: 6,
    },
    searchBar: {
        margin: "1%",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DDD',
        flexDirection: "row",
        display: "flex",
    },
});

export default styles;
