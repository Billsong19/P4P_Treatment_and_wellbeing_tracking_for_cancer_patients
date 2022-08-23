import * as React from 'react';
import { TouchableOpacity, Image, Text, View, Pressable, ScrollView, TouchableHighlight } from "react-native";
import styles from '../styles';

export const LibraryScreen = ({navigation}) => {
    const DATA = [
        {
            type: "Stomach Cancer",
            img:  "stomach.jpg"
        },
        {
            type: "Liver Cancer",
            img:  "liver.jpg"
        },
        {
            type: "Prostate Cancer",
            img:  "prostate.jpg"
        },
        {
            type: "Breast Cancer",
            img:  "breast.jpg"
        },
        {
            type: "Leukemia",
            img:  "leukemia.jpg"
        },
        {
            type: "Skin Cancer",
            img:  "Melanoma.jpg"
        },
        {
            type: "Lung Cancer",
            img:  "lung.jpg"
        },
        {
            type: "Brain Tumor",
            img:  "brain.jpg"
        },
    ]

    return(
        <ScrollView style={{backgroundColor: "white"}}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Condition", {
                        condition: "Bowel Cancer",
                    })
                }
                style={[styles.wideTile, styles.blueDivider, {marginTop: '2%', alignSelf: 'flex-start'}]}
            >
                <View>
                    <Image
                        source={require("../public/bowel.jpg")}
                        resizeMode='cover'
                        style={{ width: "90vw", height: "25vh", display: 'block'}}
                    />
                    <Text>Bowel Cancer</Text>
                </View>
            </TouchableOpacity>
            {DATA.map((cancer, index) => {
                return <TouchableHighlight
                    key={index}
                    style={[styles.libraryButton]}
                    activeOpacity={0.9}
                    underlayColor={'#EEE'}
                    onPress={() =>
                        navigation.navigate('Condition', {condition: cancer.type})
                    }
                >
                    <Text style={[styles.subHeader, styles.libraryButton, {marginVertical: 'auto'}]}>{cancer.type}</Text>
                </TouchableHighlight>
            })}
            
        </ScrollView>
    );
}