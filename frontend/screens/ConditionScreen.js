import * as React from 'react';
import { Text, View, Pressable, Image } from "react-native";
import styles from '../styles';

export const ConditionScreen = ({ navigation, route }) => {
    return(
        <View style={{height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', paddingBottom: '40px'}}>
            <Text style={{fontSize: '20px', margin: '20px'}}>{route.params.condition}</Text>
            <Image source={require('../public/stomach.jpg')} style={{width: '80vw', height: '20vh', margin: 'auto'}}/>
            <Pressable
                style={[styles.conditionButton, styles.blueBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 0})
            }
            >
                <Text>Overview and Diagnosis</Text>
            </Pressable>
            <Pressable
                style={[styles.conditionButton, styles.tealBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 1})
            }
            >
                <Text>Chance of Recovery</Text>
            </Pressable>
            <Pressable
                style={[styles.conditionButton, styles.greenBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 2})
            }
            >
                <Text>Course of Disease</Text>
            </Pressable>
            <Pressable
                style={[styles.conditionSubButton, styles.greenBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 3})
            }
            >
                <Text>Early Stages</Text>
            </Pressable>
            <Pressable
                style={[styles.conditionSubButton, styles.greenBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 4})
            }
            >
                <Text>Development and Complications</Text>
            </Pressable>
            <Pressable
                style={[styles.conditionButton, styles.yellowBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 5})
            }
            >
                <Text>Treatment</Text>
            </Pressable>
            <Pressable
                style={[styles.conditionButton, styles.orangeBorder]}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 6})
            }
            >
                <Text>Risks and Long-term Implications</Text>
            </Pressable>
        </View>
    );
}