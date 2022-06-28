import * as React from 'react';
import { Text, View, Pressable, Image } from "react-native";
import styles from '../styles';

export const ConditionScreen = ({ navigation, route }) => {
    return(
        <View>
            <Text>{route.params.condition}</Text>
            <Image source={require('../public/stomach.jpg')}/>
            <Pressable
                style={styles.conditionButtonBlue}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 0})
            }
            >
                <Text>Overview and Diagnosis</Text>
            </Pressable>
            <Pressable
                style={styles.conditionButtonTeal}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 1})
            }
            >
                <Text>Chance of Recovery</Text>
            </Pressable>
            <Pressable
                style={styles.conditionButtonGreen}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 2})
            }
            >
                <Text>Course of Disease</Text>
            </Pressable>
            <Pressable
                style={styles.conditionButtonGreen}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 3})
            }
            >
                <Text>Early Stages</Text>
            </Pressable>
            <Pressable
                style={styles.conditionButtonGreen}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 4})
            }
            >
                <Text>Development and Complications</Text>
            </Pressable>
            <Pressable
                style={styles.conditionButtonYellow}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 5})
            }
            >
                <Text>Treatment</Text>
            </Pressable>
            <Pressable
                style={styles.conditionButtonOrange}
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 6})
            }
            >
                <Text>Risks and Long-term Implications</Text>
            </Pressable>
        </View>
    );
}