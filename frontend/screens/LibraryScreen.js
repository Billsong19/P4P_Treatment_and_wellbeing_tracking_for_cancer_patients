import * as React from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    TextInput,
} from "react-native";
import styles from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import infoData from "../public/infoData";

const userCond = "Bowel Cancer"

export const LibraryScreen = ({ navigation }) => {
    const [search, setSearch] = React.useState("");

    // Identifies bookmarked condition and removes it so it doesn't show twice
    const altInfoData = [...infoData];
    const index = altInfoData.findIndex((data) => data.condition === userCond);
    let bookmarkedCond = null;
    if (index !== -1) {
        bookmarkedCond = altInfoData.splice(index, 1)[0];
    }

    const [filteredData, setFilteredData] = React.useState(altInfoData);

    React.useEffect(() => {
        if (search) {
            // on search return bookmarked condition back to regular list
            setFilteredData(
                infoData.filter((data) =>
                    data.condition.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setFilteredData(
                altInfoData.filter((data) =>
                    data.condition.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search]);

    return (
        <ScrollView
            style={{ backgroundColor: "#FFF", flex: 1}}
            contentContainerStyle={{ flexGrow: 1 }}
            alwaysBounceVertical={true}
        >
            <View style={styles.searchBar}>
                <Ionicons
                    name="search"
                    style={{ fontSize: 20, marginEnd: 10 }}
                />
                <TextInput
                    placeholder="Search..."
                    style={{ width: "85%" }}
                    value={search}
                    onChangeText={setSearch}
                ></TextInput>
                <Ionicons
                    id="removeSearch"
                    name="close"
                    color="#999"
                    onPress={() => setSearch("")}
                    size={24}
                    style={{
                        display: search.length > 0 ? "flex" : "none",
                    }}
                />
            </View>
            { (bookmarkedCond && !search) &&
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Condition", {
                            condition: bookmarkedCond.condition,
                        })
                    }
                    style={[
                        styles.wideTile,
                        styles.blueDivider,
                        { marginTop: "2%", alignSelf: "flex-start", width: "96%", maxHeight: 200 },
                    ]}
                >
                    <View style={{ width: "100%" }}>
                        <Image
                            source={bookmarkedCond.img}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                maxHeight: 160,
                            }}
                        />
                        <Text style={styles.subHeader}>{bookmarkedCond.condition}</Text>
                    </View>
                </TouchableOpacity>
            }
            {filteredData?.map((data, index) => {
                return (
                    <TouchableHighlight
                        key={index}
                        style={[styles.libraryButton]}
                        underlayColor={"#EEE"}
                        onPress={() =>
                            navigation.navigate("Condition", {
                                condition: data.condition,
                            })
                        }
                    >
                        <View style={{flexDirection: "row"}}>
                        <Text style={[styles.subHeader, {flex: 25}]}>
                            {data.condition}
                        </Text>
                        <Ionicons
                            name="chevron-forward"
                            style={{ fontSize: 20, marginEnd: 10, flex: 1, color: "#999" }}
                        />
                        </View>
                    </TouchableHighlight>
                );
            })}
        </ScrollView>
    );
};
