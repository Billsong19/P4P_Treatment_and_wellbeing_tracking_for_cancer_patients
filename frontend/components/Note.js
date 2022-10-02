import * as React from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    Alert,
} from "react-native";
import styles from "../styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";

/*
Note is a component used to represent a note within the NoteScreen.
It needs to be passed onEdit and onDelete functions to communicate
updates of individual notes back to the stored note data available
within NotePage.
*/
export default Note = ({ id, title, contents, onEdit, onDelete }) => {
    const [nTitle, setTitle] = React.useState(title);
    const [nContents, setContents] = React.useState(contents);
    const [isEdit, setIsEdit] = React.useState(false);

    const promptDelete = () => {
        Alert.alert("Delete Note", `Are you sure you want to delete your note: ${title}?`, [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => onDelete(id) }
          ])
    }

    const saveNote = () => {
        onEdit({ id: id, title: nTitle, contents: nContents })
    }

    React.useEffect(() => {
        if (nTitle !== title || nContents !== contents) {
            setIsEdit(true);
        } else {
            setIsEdit(false)
        }
    }, [nTitle, nContents])

    return (
        <View style={styles.note}>
            <View style={{flexDirection: "row"}}>
                <TextInput
                    style={[styles.subHeader, {flex: 15}]}
                    value={nTitle}
                    onChangeText={setTitle}
                    onEndEditing={saveNote}
                />
                { isEdit ? 
                    /*  
                        This button doesn't actually do anything, instead it acts as a
                        ground for users to press causing the lowering of the keyboard
                        and deselection of the text inputs, which triggers data saving
                    */
                    <TouchableOpacity
                        onPress={() => setIsEdit(false)}
                        style={[styles.greenBackground, styles.saveNoteButton]}
                        >
                        <Text>Save</Text>
                    </TouchableOpacity>
                    : <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => {
                        promptDelete();
                    }}
                    >
                        <Ionicons
                            name="close"
                            size={24}
                            color="#999"
                        />
                    </TouchableOpacity>
                }      
            </View>
            <TextInput
                style={{fontSize: 18}}
                multiline={true}
                value={nContents}
                onChangeText={setContents}
                onEndEditing={saveNote}
                />
        </View>
    );
};