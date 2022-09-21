import * as React from "react";
import { TouchableOpacity, Text, TextInput, View, ScrollView } from "react-native";
import { bmBlue, bmOrange, bmYellow, bmGreen, bmTeal } from "../styles";

const styles = {
    likertButton: {
        height: 30,
        width: 45,
        borderRadius: 4,
        backgroundColor: "#E9E9E9",
        justifyContent: "center",
    },
    likert1: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FD7070',
    },
    likert1s: {
        backgroundColor: "#FD7070",
    },
    likert2: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: bmOrange,
    },
    likert2s: {
        backgroundColor: bmOrange,
    },
    likert3: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFD39F',
    },
    likert3s: {
        backgroundColor: "#FFD39F",
    },
    likert4: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: bmYellow,
    },
    likert4s: {
        backgroundColor: bmYellow,
    },
    likert5: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D9F3A3',
    },
    likert5s: {
        backgroundColor: "#D9F3A3",
    },
    likert6: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: bmGreen,
    },
    likert6s: {
        backgroundColor: bmGreen,
    },
    likert7: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: bmTeal,
    },
    likert7s: {
        backgroundColor: bmTeal,
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
                justifyContent: "space-evenly"
            }}
        >
            <View>
                <TouchableOpacity
                    style={
                        props.active == 1
                            ? [styles.likertButton, styles.likert1s, {alignSelf: "center"}]
                            : [styles.likertButton, styles.likert1, {alignSelf: "center"}]
                    }
                    onPress={() => props.setActive(1)}
                >
                    <Text style={{ margin: "auto", textAlign: "center" }}>1</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: "center" }}>Terrible</Text>
            </View>
            <TouchableOpacity
                style={
                    props.active == 2
                        ? [styles.likertButton, styles.likert2s]
                        : [styles.likertButton, styles.likert2]
                }
                onPress={() => props.setActive(2)}
            >
                <Text style={{ margin: "auto", textAlign: "center" }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={
                    props.active == 3
                        ? [styles.likertButton, styles.likert3s]
                        : [styles.likertButton, styles.likert3]
                }
                onPress={() => props.setActive(3)}
            >
                <Text style={{ margin: "auto", textAlign: "center" }}>3</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity
                    style={
                        props.active == 4
                            ? [styles.likertButton, styles.likert4s, {alignSelf: "center"}]
                            : [styles.likertButton, styles.likert4, {alignSelf: "center"}]
                    }
                    onPress={() => props.setActive(4)}
                >
                    <Text style={{ margin: "auto", textAlign: "center" }}>4</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: "center" }}>Alright</Text>
            </View>
            <TouchableOpacity
                style={
                    props.active == 5
                        ? [styles.likertButton, styles.likert5s]
                        : [styles.likertButton, styles.likert5]
                }
                onPress={() => props.setActive(5)}
            >
                <Text style={{ margin: "auto", textAlign: "center" }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={
                    props.active == 6
                        ? [styles.likertButton, styles.likert6s]
                        : [styles.likertButton, styles.likert6]
                }
                onPress={() => props.setActive(6)}
            >
                <Text style={{ margin: "auto", textAlign: "center" }}>6</Text>
            </TouchableOpacity>
            <View>
                    <TouchableOpacity
                        style={
                            props.active == 7
                                ? [styles.likertButton, styles.likert7s, {alignSelf: "center"}]
                                : [styles.likertButton, styles.likert7, {alignSelf: "center"}]
                        }
                        onPress={() => props.setActive(7)}
                    >
                        <Text style={{ margin: "auto", textAlign: "center" }}>7</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>Great</Text>
                </View>
            </View>
    )
}