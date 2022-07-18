import * as React from 'react';
import {  Animated, Pressable, Text, TextInput, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'
import styles, { bmBlue } from '../styles';

export const WellbeingJournalScreen = ({navigation}) => {
    const [phys, setPhys] = React.useState(-1);
    const [ment, setMental] = React.useState(-1);
    const [open, setOpen] = React.useState(false);
    const [inputSymptom, setInputSymptom] = React.useState("");
    const [inputSeverity, setSeverity] = React.useState(null)
    const severities = [{label: 'mild', value: 'mild'}, {label: 'moderate', value: 'moderate'}, {label: 'severe', value: 'severe'}]
    const [symptoms, setSymptoms] = React.useState([])

    return(
        <View style={[styles.wideTile, styles.blueBorder]}>
            <Text style={{fontSize: '20px', marginVertical: '10px'}}>Wellbeing Journal</Text>
            <Text style={{fontSize: '16px', marginBottom: '10px'}}>How are you physically feeling today?</Text>
            <div style={{display: 'flex'}}>
                <Pressable
                    style={phys==1 ? [styles.likertButton, styles.likert1s] : [styles.likertButton, styles.likert1]}
                    onPress={() => setPhys(1)}
                    >
                    <Text style={{margin: 'auto'}}>1</Text>
                </Pressable>
                <Pressable
                    style={phys==2 ? [styles.likertButton, styles.orangeBackground] : [styles.likertButton, styles.likert2]}
                    onPress={() => setPhys(2)}
                    >
                    <Text style={{margin: 'auto'}}>2</Text>
                </Pressable>
                <Pressable
                    style={phys==3 ? [styles.likertButton, styles.likert3s] : [styles.likertButton, styles.likert3]}
                    onPress={() => setPhys(3)}
                    >
                    <Text style={{margin: 'auto'}}>3</Text>
                </Pressable>
                <Pressable
                    style={phys==4 ? [styles.likertButton, styles.yellowBackground] : [styles.likertButton, styles.likert4]}
                    onPress={() => setPhys(4)}
                    >
                    <Text style={{margin: 'auto'}}>4</Text>
                </Pressable>
                <Pressable
                    style={phys==5 ? [styles.likertButton, styles.likert5s] : [styles.likertButton, styles.likert5]}
                    onPress={() => setPhys(5)}
                    >
                    <Text style={{margin: 'auto'}}>5</Text>
                </Pressable>
                <Pressable
                    style={phys==6 ? [styles.likertButton, styles.greenBackground] : [styles.likertButton, styles.likert6]}
                    onPress={() => setPhys(6)}
                    >
                    <Text style={{margin: 'auto'}}>6</Text>
                </Pressable>
                <Pressable
                    style={phys==7 ? [styles.likertButton, styles.tealBackground] : [styles.likertButton, styles.likert7]}
                    onPress={() => setPhys(7)}
                    >
                    <Text style={{margin: 'auto'}}>7</Text>
                </Pressable>
            </div>
            <div style={{display: 'flex', marginBottom: '5px'}}>
                <Text style={{marginLeft: '2.5%'}}>Terrible</Text>
                <Text style={{marginLeft: '32.5%'}}>Alright</Text>
                <Text style={{marginLeft: '35%'}}>Great</Text>
            </div>
            <Text>Do you have any notable symptoms?</Text>
            <Pressable
                style={[styles.wideTile, styles.blueBorder]}
            >
                <Text style={{color: bmBlue}}>Same as yesterday: mild nausea, mild headache</Text>
            </Pressable>
            <div style={{display: 'flex'}}>
                <TextInput
                    placeholder='symptom'
                    style={{marginBottom: '10px', width: '50%', position: 'relative', top: '2px'}}
                    onChangeText={setInputSymptom}/>
                <Dropdown
                style = {{marginEnd: '10px'}}
                value={inputSeverity}
                labelField="label"
                valueField="value"
                placeholder="Select a severity"
                data={severities}
                onFocus={() => setOpen(true)}
                onChange={item => {
                    setSeverity(item.value);
                    setOpen(false);
                }}
                />
                <Pressable
                    style={[styles.smallButton, styles.tealBackground, {marginRight: '18px'}]}
                    onPress={() => {
                        if (inputSymptom && inputSeverity) {
                            setSymptoms([...symptoms, [inputSeverity, inputSymptom]])
                            setInputSymptom("")
                            setSeverity("")
                        }
                    }}>
                    <Text style={{fontSize: '20px', marginHorizontal: 'auto'}}>+</Text>
                </Pressable>
            </div>
            {symptoms.map((symptom) => {
                <div style={{display: 'flex'}}>
                    <Pressable style={[styles.smallButton, styles.orangeBackground, {marginRight: '18px'}]}>
                        <Text style={{fontSize: '20px', marginHorizontal: 'auto'}}>-</Text>
                    </Pressable>
                </div>
            })
            }
            <Text style={{fontSize: '16px', marginBottom: '10px'}}>How are you mentally feeling today?</Text>
            <div style={{display: 'flex'}}>
                <Pressable
                    style={ment==1 ? [styles.likertButton, styles.likert1s] : [styles.likertButton, styles.likert1]}
                    onPress={() => setMental(1)}
                    >
                    <Text style={{margin: 'auto'}}>1</Text>
                </Pressable>
                <Pressable
                    style={ment==2 ? [styles.likertButton, styles.orangeBackground] : [styles.likertButton, styles.likert2]}
                    onPress={() => setMental(2)}
                    >
                    <Text style={{margin: 'auto'}}>2</Text>
                </Pressable>
                <Pressable
                    style={ment==3 ? [styles.likertButton, styles.likert3s] : [styles.likertButton, styles.likert3]}
                    onPress={() => setMental(3)}
                    >
                    <Text style={{margin: 'auto'}}>3</Text>
                </Pressable>
                <Pressable
                    style={ment==4 ? [styles.likertButton, styles.yellowBackground] : [styles.likertButton, styles.likert4]}
                    onPress={() => setMental(4)}
                    >
                    <Text style={{margin: 'auto'}}>4</Text>
                </Pressable>
                <Pressable
                    style={ment==5 ? [styles.likertButton, styles.likert5s] : [styles.likertButton, styles.likert5]}
                    onPress={() => setMental(5)}
                    >
                    <Text style={{margin: 'auto'}}>5</Text>
                </Pressable>
                <Pressable
                    style={ment==6 ? [styles.likertButton, styles.greenBackground] : [styles.likertButton, styles.likert6]}
                    onPress={() => setMental(6)}
                    >
                    <Text style={{margin: 'auto'}}>6</Text>
                </Pressable>
                <Pressable
                    style={ment==7 ? [styles.likertButton, styles.tealBackground] : [styles.likertButton, styles.likert7]}
                    onPress={() => setMental(7)}
                    >
                    <Text style={{margin: 'auto'}}>7</Text>
                </Pressable>
            </div>
            <div style={{display: 'flex', marginBottom: '5px'}}>
                <Text style={{marginLeft: '2.5%'}}>Terrible</Text>
                <Text style={{marginLeft: '32.5%'}}>Alright</Text>
                <Text style={{marginLeft: '35%'}}>Great</Text>
            </div>
            <Text>Anything else of note?</Text>
            <TextInput 
            style={styles.largeTextEntry}
            placeholder='optional'
            multiline='true'
            />
            <Pressable
                style={[styles.wideButton, styles.blueBackground]}
                onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{fontSize: '16px', marginHorizontal: 'auto'}}>Confirm</Text>
                </Pressable>
        </View>
    );
}