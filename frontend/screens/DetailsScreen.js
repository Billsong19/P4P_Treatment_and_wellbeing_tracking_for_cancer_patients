import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const DetailsScreen = ({ navigation , route}) => {
    return(
        <View>
            Details on {route.params.condition} {route.params.section}
            <Button
                title="Previous"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: `${route.params.section - 1}`})
            }
            />
            <Button
                title="Next"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: `${route.params.section + 1}`})
            }
            />
        </View>
    );
}