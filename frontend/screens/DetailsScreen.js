import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";


export const DetailsScreen = ({ navigation , route}) => {

    let page = "";
    switch(route.params.section) {
        case 0:
            page = "Overview and Diagnosis";
            break;
        case 1:
            page = "Chance of Recovery";
            break;
        case 2:
            page = "Course of Disease";
            break;
        case 3:
            page = "Early Stages";
            break;
        case 4:
            page = "Development and Complications";
            break;
        case 5:
            page = "Treatments";
            break;
        case 6:
            page = "Risks and long-term implications";
            break;
        default:
            page = "Error"
            break;
    }

    return(
        <View>
            <Text>{route.params.condition}</Text>
            <Text>{page}</Text>
            <Text>{route.params.section}</Text>
            <Button
                title="Previous"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: `${--route.params.section}`})
            }
            />
            <Button
                title="Next"
                onPress={() =>
                navigation.navigate('Details', { condition: `${route.params.condition}`, section: `${++route.params.section}`})
            }
            />
        </View>
    );
}