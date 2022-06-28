import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const LibraryScreen = ({navigation}) => {
    return(
        <View>
            Information Library
            <Button
                title="Stomach Cancer"
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Stomach Cancer'})
            }
            />
            <Button
                title="Colon Cancer"
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Colon Cancer'})
            }
            />
            <Button
                title="Breast Cancer"
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Breast Cancer'})
            }
            />
            <Button
                title="Prostate Cancer"
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Prostate Cancer'})
            }
            />
            <Button
                title="Lung Cancer"
                onPress={() =>
                navigation.navigate('Condition', { condition: 'Lung Cancer'})
            }
            />
            <Button
                title="Back to Home"
                onPress={() =>
                navigation.navigate('Home')
            }
            />
        </View>
    );
}