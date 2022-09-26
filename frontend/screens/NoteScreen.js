import * as React from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    Pressable,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    TextInput,
    Alert,
} from "react-native";
import styles from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "@mui/system";
import { FlatList } from "react-native-gesture-handler";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Note from "../components/Note";

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("@notes");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("@notes", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

export const NoteScreen = ({ navigation }) => {
    const [notes, setNotes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const renderNote = ({ item }) => {
        return (
        <Note
            id={item.id}
            title={item.title}
            contents={item.contents}
            onEdit={saveNote}
            onDelete={deleteNote}
        />
        )
    }

    const addNewNote = () => {
        let tempNotes = (notes === null) ? [] : [...notes];
        tempNotes.push({
            id: uuidv4(),
            title: "New Note",
            contents: "",
        });
        setNotes(tempNotes);
        const saveData = async (data) => {
            storeData(data);
          };
        saveData(tempNotes);
    }

    const saveNote = (saveNote) => {
        let tempNotes = (notes == null) ? [] : [...notes];
        const index = notes.findIndex((note) => note.id === saveNote.id);
        try {
            tempNotes[index] = {
                id: saveNote.id,
                title: saveNote.title,
                contents: saveNote.contents,
            };
            setNotes(tempNotes);
            const saveData = async (data) => {
                storeData(data);
            };
            saveData(tempNotes);
        } catch (e) {
            Alert.alert("An error occured while saving the note", e)
        }   
    }

    const deleteNote = (delId) => {
        let tempNotes = (notes == null) ? [] : [...notes];
        let index = tempNotes.findIndex(
          (note) => note.id === delId
        );
        if (index !== -1) tempNotes.splice(index, 1);
        setNotes(tempNotes);
        const saveData = async (data) => {
          storeData(data);
        };
        saveData(tempNotes);
      }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    addNewNote();
                }}
                disabled={loading}
            >
                <Ionicons
                    name="add"
                    size={36}
                />
            </TouchableOpacity>
          ),
        });
      }, [navigation, loading, notes]);

    React.useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            setNotes(await getData());
        };
        fetchData().then(() => setLoading(false));
    }, [navigation]);

    return (
        <View>
            <FlatList
            data={notes}
            renderItem={renderNote}
            keyExtractor={(note) => note.id}
            />
            {loading ? <Text style={{alignSelf: "center", margin: 20}}>loading...</Text> : null}
        </View>
        
    );
};
