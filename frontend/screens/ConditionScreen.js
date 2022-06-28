import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const ConditionScreen = ({ navigation, route }) => {
    return(
        <View>
            {route.params.condition}
            <Button
                title="Overview and Diagnosis"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 0})
            }
            />
            <Button
                title="Chance of Recovery"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 1})
            }
            />
            <Button
                title="Course of Disease"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 2})
            }
            />
            <Button
                title="Early Stages"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 3})
            }
            />
            <Button
                title="Development and Complications"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 4})
            }
            />
            <Button
                title="Treatment"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 5})
            }
            />
            <Button
                title="Risks and Long-Term Implications"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: 6})
            }
            />
        </View>
    );
}