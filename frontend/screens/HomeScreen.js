import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Button
                title="How are you feeling today?"
                onPress={() =>
                navigation.navigate('Wellbeing Journal')
            }
            />
            <Button
                title="Upcoming Reminders"
                onPress={() =>
                navigation.navigate('Reminders')
            }
            />
            <Button
                title="View All"
                onPress={() =>
                navigation.navigate('Info Library')
            }
            />
            <Button
                title="Flagged Condition"
                onPress={() =>
                navigation.navigate('Condition', {condition: 'Stomach Cancer'})
            }
            />
            <Button
                title="Support"
                onPress={() =>
                alert('Never give up :)')
            }
            />
        </View>
    );
}