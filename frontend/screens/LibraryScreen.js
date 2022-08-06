import * as React from 'react';
import { TouchableOpacity, Image, Text, View, Pressable, ScrollView } from "react-native";
import styles from '../styles';

export const LibraryScreen = ({navigation}) => {
    return(
        <ScrollView>
            Information Library
            <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Condition", {
                                condition: "Stomach Cancer",
                            })
                        }
                    >
                        <div>
                            <Image
                                source={require("../public/stomach.jpg")}
                                style={{ width: "200%", height: "500%" }}
                            />
                            <Text>Stomach Cancer</Text>
                        </div>
                    </TouchableOpacity>
            <Pressable
                style={styles.libraryButton}
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Stomach Cancer'})
            }
            >
                <Text>Stomach Cancer</Text>
            </Pressable>
            <Pressable
                style={styles.libraryButton}
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Colon Cancer'})
            }
            >
                <Text>Colon Cancer</Text>
            </Pressable>
            <Pressable
                style={styles.libraryButton}
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Breast Cancer'})
            }
            >
                <Text>Breast Cancer</Text>
            </Pressable>
            <Pressable
                style={styles.libraryButton}
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Prostate Cancer'})
            }
            >
                <Text>Prostate Cancer</Text>
            </Pressable>
            <Pressable
                style={styles.libraryButton}
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Lung Cancer'})
            }
            >
                <Text>Lung Cancer</Text>
            </Pressable>
            <Pressable
                onPress={() =>
                navigation.navigate('Home')
            }
            >
                <Text>Back to Home</Text>
            </Pressable>
        </ScrollView>
    );
}