import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const RemindersScreen = ({navigation}) => {
    return(
        <View>
            Reminders
            <Button
                title="Back to Home"
                onPress={() =>
                navigation.navigate('Home')
            }
            />
        </View>
    );
}