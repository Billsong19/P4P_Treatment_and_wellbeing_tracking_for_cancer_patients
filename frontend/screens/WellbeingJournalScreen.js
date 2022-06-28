import * as React from 'react';
import {  Pressable, Text, TextInput, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../styles';

export const WellbeingJournalScreen = ({navigation}) => {
    const [phys, setPhys] = React.useState(-1);
    const [ment, setMental] = React.useState(-1);

    return(
        <View style={styles.homeJournalView}>
            <Text>Wellbeing Journal</Text>
            <Text>How are you physically feeling today?</Text>
            <div style={{display: 'flex'}}>
                <Pressable
                    style={styles.likert1}
                    onPress={() => setPhys(1)}
                    >
                    <Text>1</Text>
                </Pressable>
                <Pressable
                    style={styles.likert2}
                    onPress={() => setPhys(2)}
                    >
                    <Text>2</Text>
                </Pressable>
                <Pressable
                    style={styles.likert3}
                    onPress={() => setPhys(3)}
                    >
                    <Text>3</Text>
                </Pressable>
                <Pressable
                    style={styles.likert1}
                    onPress={() => setPhys(4)}
                    >
                    <Text>4</Text>
                </Pressable>
                <Pressable
                    style={styles.likert5}
                    onPress={() => setPhys(5)}
                    >
                    <Text>5</Text>
                </Pressable>
                <Pressable
                    style={styles.likert6}
                    onPress={() => setPhys(6)}
                    >
                    <Text>6</Text>
                </Pressable>
                <Pressable
                    style={styles.likert7}
                    onPress={() => setPhys(7)}
                    >
                    <Text>7</Text>
                </Pressable>
            </div>
            {phys}
            <Text>Do you have any notable symptoms?</Text>
            <Pressable
                style={styles.homeJournalView}
            >
                <Text>Same as yesterday: mild nausea, slight headache</Text>
            </Pressable>
            <TextInput placeholder='symptom' />
            <Text>How are you mentally feeling today?</Text>
            <div style={{display: 'flex'}}>
                <Pressable
                    style={styles.likert1}
                    onPress={() => setMental(1)}
                    >
                    <Text>1</Text>
                </Pressable>
                <Pressable
                    style={styles.likert2}
                    onPress={() => setMental(2)}
                    >
                    <Text>2</Text>
                </Pressable>
                <Pressable
                    style={styles.likert3}
                    onPress={() => setMental(3)}
                    >
                    <Text>3</Text>
                </Pressable>
                <Pressable
                    style={styles.likert1}
                    onPress={() => setMental(4)}
                    >
                    <Text>4</Text>
                </Pressable>
                <Pressable
                    style={styles.likert5}
                    onPress={() => setMental(5)}
                    >
                    <Text>5</Text>
                </Pressable>
                <Pressable
                    style={styles.likert6}
                    onPress={() => setMental(6)}
                    >
                    <Text>6</Text>
                </Pressable>
                <Pressable
                    style={styles.likert7}
                    onPress={() => setMental(7)}
                    >
                    <Text>7</Text>
                </Pressable>
            </div>
            {ment}
            <Text>Anything else of note?</Text>
            <TextInput placeholder='optional'/>
            <Pressable
                style={styles.journalButton}
                onPress={() => navigation.navigate('Home')}
                >
                    <Text>Confirm</Text>
                </Pressable>
        </View>
    );
}