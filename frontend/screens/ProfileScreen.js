import * as React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export const ProfileScreen = ({navigation}) => {
    return(
        <View>
            Profile
            <Button
                title="Back to Home"
                onPress={() =>
                navigation.navigate('Home')
            }
            />
        </View>
    );
}