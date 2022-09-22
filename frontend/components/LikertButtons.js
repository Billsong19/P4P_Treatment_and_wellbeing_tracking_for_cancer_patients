import * as React from "react";
import { TouchableHighlight, Text, TextInput, View, ScrollView } from "react-native";
import { swBlue, swOrange, swYellow, swGreen, swTeal } from "../styles";

const styles = {
    likertButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#E9E9E9",
        justifyContent: "center",
    },
    likertText: {
        textAlign: "center",
        margin: "auto",
        fontSize: 16,
        fontWeight: "500"
    },
    likert1: {
        borderColor: "#FD7070",
    },
    likert1s: {
        backgroundColor: "#FD7070",
        borderWidth: 0,
    },
    likert2: {
        borderColor: swOrange,
    },
    likert2s: {
        backgroundColor: swOrange,
        borderWidth: 0,
    },
    likert3: {
        borderColor: "#F6BC77",
    },
    likert3s: {
        backgroundColor: "#F6BC77",
        borderWidth: 0,
    },
    likert4: {
        borderColor: swYellow,
    },
    likert4s: {
        backgroundColor: swYellow,
        borderWidth: 0,
    },
    likert5: {
        borderColor: "#D9F3A3",
    },
    likert5s: {
        backgroundColor: "#D9F3A3",
        borderWidth: 0,
    },
    likert6: {
        borderColor: swGreen,
    },
    likert6s: {
        backgroundColor: swGreen,
        borderWidth: 0,
    },
    likert7: {
        borderColor: swTeal,
    },
    likert7s: {
        backgroundColor: swTeal,
        borderWidth: 0,
    },
}

export default LikertButtons = (props) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
                alignItems: "flex-start",
                justifyContent: "space-evenly",
            }}
        >
            <View>
                <TouchableHighlight
                    style={
                        props.active == 1
                            ? [styles.likertButton, styles.likert1s, {alignSelf: "center"}]
                            : [styles.likertButton, styles.likert1, {alignSelf: "center"}]
                    }
                    onPress={() => props.setActive(1)}
                    underlayColor={"#FCC6C6"}
                >
                    <Text style={ styles.likertText }>1</Text>
                </TouchableHighlight>
                <Text style={{ textAlign: "center" }}>Terrible</Text>
            </View>
            <TouchableHighlight
                style={
                    props.active == 2
                        ? [styles.likertButton, styles.likert2s]
                        : [styles.likertButton, styles.likert2]
                }
                onPress={() => props.setActive(2)}
                underlayColor={"#FFDBC6"}
            >
                <Text style={ styles.likertText }>2</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={
                    props.active == 3
                        ? [styles.likertButton, styles.likert3s]
                        : [styles.likertButton, styles.likert3]
                }
                onPress={() => props.setActive(3)}
                underlayColor={"#FCDEBB"}
            >
                <Text style={ styles.likertText }>3</Text>
            </TouchableHighlight>
            <View>
                <TouchableHighlight
                    style={
                        props.active == 4
                            ? [styles.likertButton, styles.likert4s, {alignSelf: "center"}]
                            : [styles.likertButton, styles.likert4, {alignSelf: "center"}]
                    }
                    onPress={() => props.setActive(4)}
                    underlayColor={"#FCF5CF"}
                >
                    <Text style={ styles.likertText }>4</Text>
                </TouchableHighlight>
                <Text style={{ textAlign: "center" }}>Alright</Text>
            </View>
            <TouchableHighlight
                style={
                    props.active == 5
                        ? [styles.likertButton, styles.likert5s]
                        : [styles.likertButton, styles.likert5]
                }
                onPress={() => props.setActive(5)}
                underlayColor={"#EEFCD2"}
            >
                <Text style={ styles.likertText }>5</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={
                    props.active == 6
                        ? [styles.likertButton, styles.likert6s]
                        : [styles.likertButton, styles.likert6]
                }
                onPress={() => props.setActive(6)}
                underlayColor={"#AFF0D1"}
            >
                <Text style={ styles.likertText }>6</Text>
            </TouchableHighlight>
            <View>
                    <TouchableHighlight
                        style={
                            props.active == 7
                                ? [styles.likertButton, styles.likert7s, {alignSelf: "center"}]
                                : [styles.likertButton, styles.likert7, {alignSelf: "center"}]
                        }
                        onPress={() => props.setActive(7)}
                        underlayColor={"#BEF3F0"}
                    >
                        <Text style={ styles.likertText }>7</Text>
                    </TouchableHighlight>
                    <Text style={{ textAlign: "center" }}>Great</Text>
                </View>
            </View>
    )
}