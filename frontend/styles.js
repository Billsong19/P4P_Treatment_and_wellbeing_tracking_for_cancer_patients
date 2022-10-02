import { StyleSheet } from "react-native";

export const swBlue = "#75A9D9";
export const swTeal = "#75D9D3";
export const swGreen = "#75D9A9";
export const swYellow = "#F3E6A2"; //maybe replace, kinda ugly
export const swOrange = "#FFA978";

const swBlueRGB = "37, 150, 190";
const swTealRGB = "117, 217, 211";

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
        backgroundColor: swBlue,
    },
    blueBackground50: {
        backgroundColor: `rgba(${swBlueRGB}, 0.25)`,
    },
    tealBackground: {
        backgroundColor: swTeal,
    },
    tealBackground50: {
        backgroundColor: `rgba(${swTealRGB}, 0.5)`,
    },
    greenBackground: {
        backgroundColor: swGreen,
    },
    yellowBackground: {
        backgroundColor: swYellow,
    },
    orangeBackground: {
        backgroundColor: swOrange,
    },
    greyBackGround: {
        backgroundColor: "#666",
    },
    lightGreyBackGround: {
        backgroundColor: "#999",
    },
    libraryButton: {
        padding: 20,
        height: 65,
        borderBottomWidth: 1,
        borderColor: "#DDD",

    },
    conditionButton: {
        marginVertical: "1%",
        padding: "4%",
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    conditionSubButton: {
        padding: "1%",
        marginVertical: "0.5%",
        backgroundColor: "rgba(255,255,255,0.8)",
        width: "90%",
        alignSelf: "flex-end",
    },
    reminderButton: {
        marginHorizontal: "1%",
        marginVertical: "1%",
        padding: "1%",
    },
    blueBorder: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${swBlue}`,
    },
    tealBorder: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${swTeal}`,
    },
    greenBorder: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${swGreen}`,
    },
    yellowBorder: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${swYellow}`,
    },
    orangeBorder: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: `${swOrange}`,
    },
    blueDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${swBlue}`,
    },
    tealDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${swTeal}`,
    },
    greenDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${swGreen}`,
    },
    yellowDivider: {
        borderBottomWidth: 4,
        borderBottomColor: `${swYellow}`,
    },
    orangeDivier: {
        borderBottomWidth: 4,
        borderBottomColor: `${swOrange}`,
    },
    blueSide: {
        borderRightWidth: 20,
        borderRightColor: `${swBlue}`,
    },
    tealSide: {
        borderRightWidth: 20,
        borderRightColor: `${swTeal}`,
    },
    greenSide: {
        borderRightWidth: 20,
        borderRightColor: `${swGreen}`,
    },
    yellowSide: {
        borderRightWidth: 20,
        borderRightColor: `${swYellow}`,
    },
    orangeSide: {
        borderRightWidth: 20,
        borderRightColor: `${swOrange}`,
    },
    textEntry: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#888",
        marginVertical: 10,
        padding: 2,
        backgroundColor: "#FFF",
    },
    largeTextEntry: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#888",
        marginVertical: 10,
        height: 60,
        padding: 4,
        backgroundColor: "#FFF",
    },
    smallButton: {
        width: 35,
        height: 35,
        alignSelf: "center",
        borderRadius: 17,
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
        backgroundColor: `${swBlue}`,
        right: 3,
        bottom: 3,
    },
    emptyRadioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        alignSelf: "center",
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
        borderStyle: "solid",
        borderColor: "#999",
        marginTop: "5%",
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
        position: "relative",
        bottom: 0,
        height: 25,
        width: 25
    },
    searchBar: {
        margin: "1%",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#DDD",
        flexDirection: "row",
        display: "flex",
    },
    dateButton: {
        padding: 8,
        margin: 5,
        alignSelf: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#DDD",
    },
    note: {
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#DDD",
        padding: 8,
        margin: "1%",
    },
    saveNoteButton: {
        borderRadius: 8,
        padding: 4,
    },
    pageNavButton: {
        height: "100%",
        position: "absolute",
        width: "10%",
        justifyContent: "center"
    },
    symptomEntry: {
        padding: 2,
        borderColor: "#999",
        borderRadius: 4,
        borderWidth: 1,
        height: 35,
        backgroundColor: "#FFF"
    },
    supportView: {
        padding: 4,
        margin: 4,
        flexDirection: "row",
    }
});

export default styles;
