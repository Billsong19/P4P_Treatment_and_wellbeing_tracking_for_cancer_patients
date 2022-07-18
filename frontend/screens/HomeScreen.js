import * as React from 'react';
import { TouchableOpacity, Image, Text, View, Button, Pressable } from "react-native";
import styles from '../styles';

export const HomeScreen = ({navigation}) => {
    return(
        <View>
            <View style={[styles.wideTile, styles.blueBorder]}>
                <Text>Welcome back %user%</Text>
                <Text style={{fontSize: '20px', marginVertical: '10px'}}>%current-treatment-period%</Text>
                <Pressable
                    style={[styles.wideButton, styles.blueBackground]}
                    onPress={() =>
                    navigation.navigate('Wellbeing Journal')
                }
                >
                    <Text style={{fontSize: '20px', marginHorizontal: 'auto'}}>How are you feeling today?</Text>
                </Pressable>
            </View>
            <View style={[styles.wideTile, styles.tealBorder]}>
                <Text style={{fontSize: '16px', marginVertical: '10px'}}>Upcoming Reminders</Text>
                <Pressable
                    style={[styles.wideButton, styles.tealBackground]}
                    onPress={() =>
                    navigation.navigate('Reminders')
                }
                >
                    <Text style={{fontSize: '20px', marginHorizontal: 'auto'}}>Reminders</Text>
                </Pressable>
            </View>
            <View style={[styles.wideTile, styles.greenBorder]}>
                <Text style={{fontSize: '16px', marginVertical: '10px'}}>Information Library</Text>
                <div style={{display: 'flex'}}>
                    <Pressable
                        style={[styles.halfButton, styles.greenBackground, {margin: '20px', width: '30%'}]}
                        onPress={() =>
                        navigation.navigate('Info Library')
                    }
                    >
                        <Text style={{fontSize: '16px', marginHorizontal: 'auto', marginVertical: '20px'}}>View All</Text>
                    </Pressable>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Condition', {condition: 'Stomach Cancer'})
                            }
                        >
                        <div>
                            <Image source={require('../public/stomach.jpg')} style={{width: '200%', height: '500%'}}/>
                            <Text>Stomach Cancer</Text>
                        </div>     
                    </TouchableOpacity>
                </div>
            </View>
            <View style={[styles.wideTile, styles.yellowBorder]}>
                <Text style={{fontSize: '16px', marginVertical: '10px'}}>Patient Support</Text>
                <div style={{display: 'flex'}}>
                <Pressable
                    style={[styles.halfButton, styles.yellowBackground]}
                    onPress={() =>
                    alert('Never give up :)')
                }
                >
                    <Text style={{fontSize: '20px', marginHorizontal: 'auto', textAlign: 'center'}}>Contact Treatment Staff</Text>
                </Pressable>
                <Pressable
                    style={[styles.halfButton, styles.yellowBackground]}
                    onPress={() =>
                    alert('I believe in you')
                }
                >
                    <Text style={{fontSize: '20px', marginHorizontal: 'auto', textAlign: 'center'}}>Patient assistance organisations</Text>
                </Pressable>
                </div>
            </View>
        </View>
    );
}