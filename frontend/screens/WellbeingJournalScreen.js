import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const WellbeingJournalScreen = ({navigation}) => {
    return(
        <View>
            Wellbeing Journal
            <Button
                title="Go back"
                onPress={() =>
                navigation.navigate('Home')
            }
            />
        </View>
    );
}