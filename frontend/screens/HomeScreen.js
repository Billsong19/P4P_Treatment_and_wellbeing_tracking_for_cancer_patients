import * as React from 'react';
import { TouchableOpacity, Image, Text, View, Button, Pressable } from "react-native";
import styles from '../styles';

export const HomeScreen = ({navigation}) => {
    return(
        <View>
            <View style={[styles.wideTile, styles.blueBorder]}>
                <Text>Welcome back %user%</Text>
                <Text>%current-treatment-period%</Text>
                <Pressable
                    style={[styles.wideButton, styles.blueBackground]}
                    onPress={() =>
                    navigation.navigate('Wellbeing Journal')
                }
                >
                    <Text>How are you feeling today?</Text>
                </Pressable>
            </View>
            <View style={[styles.wideTile, styles.tealBorder]}>
                <Text>Upcoming Reminders</Text>
                <Button
                title="Upcoming Reminders"
                onPress={() =>
                navigation.navigate('Reminders')
            }
            />
            </View>
            <View style={[styles.wideTile, styles.greenBorder]}>
                <Text>Information Library</Text>
                <div style={{display: 'flex'}}>
                    <Pressable
                        style={[styles.halfButton, styles.greenBackground]}
                        onPress={() =>
                        navigation.navigate('Info Library')
                    }
                    >
                        <Text>View All</Text>
                    </Pressable>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Condition', {condition: 'Stomach Cancer'})
                            }
                        >
                        <div>
                            <Image
                            source={require('../public/stomach.jpg')}
                            />
                            <Text>Stomach Cancer</Text>
                        </div>     
                    </TouchableOpacity>
                </div>
            </View>
            <View style={[styles.wideTile, styles.yellowBorder]}>
                <Text>Patient Support</Text>
                <div style={{display: 'flex'}}>
                <Pressable
                    style={[styles.halfButton, styles.yellowBackground]}
                    onPress={() =>
                    alert('Never give up :)')
                }
                >
                    <Text>Contact Treatment Staff</Text>
                </Pressable>
                <Pressable
                    style={[styles.halfButton, styles.yellowBackground]}
                    onPress={() =>
                    alert('I believe in you')
                }
                >
                    <Text>Patient assistance organisations</Text>
                </Pressable>
                </div>
            </View>
        </View>
    );
}