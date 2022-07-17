import React from 'react';
import { StyleSheet } from 'react-native';

export const bmBlue = '#75A9D9'
export const bmTeal = '#75D9D3'
export const bmGreen = '#75D9A9'
export const bmYellow = '#F3E6A2' //maybe replace, kinda ugly
export const bmOrange = '#FFA978'

const styles = StyleSheet.create({
    wideTile: {
        margin: '3%',
        padding: '2%',
        borderRadius: 4,
    },
    wideButton: {
        backgroundColor: bmBlue,
        color: bmBlue,
        padding: '5px',
    },
    halfButton: {
        backgroundColor: bmYellow,
        color: 'black',
        uppercase: false,
        padding: '5px',
        width: '45%',
        marginRight: '5%',
    },
    blueBackground: {
        backgroundColor: bmBlue,
    },
    tealBackground: {
        backgroundColor: bmTeal,
    },
    greenBackground: {
        backgroundColor: bmGreen,
    },
    yellowBackground: {
        backgroundColor: bmYellow,
    },
    orangeBackground: {
        backgroundColor: bmOrange,
    },
    libraryButton: {
        backgroundColor: bmBlue,
        marginHorizontal: '3%',
        marginVertical: '1%'
    },
    conditionButton: {
        margin: '3%',
        padding: '2%',
        borderRadius: 4
    },
    blueBorder: {
        border: `2px solid ${bmBlue}`,
    },
    tealBorder: {
        border: `2px solid ${bmTeal}`,
    },
    greenBorder: {
        border: `2px solid ${bmGreen}`,
    },
    yellowBorder: {
        border: `2px solid ${bmYellow}`,
    },
    orangeBorder: {
        border: `2px solid ${bmOrange}`,
    },
    conditionButtonGreen: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmGreen}`,
        borderRadius: 4
    },
    conditionButtonYellow: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmYellow}`,
        borderRadius: 4
    },
    conditionButtonOrange: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmOrange}`,
        borderRadius: 4
    },
    likertButton: {
        height: '30px',
        width: '30px',
        margin: 'auto',
        borderRadius: '4px',
        backgroundColor: '#D9D9D9',
    },
    likert1: {
        border: `1px solid #FD7070`,
    },
    likert1s: {
        backgroundColor: '#FD7070'
    },
    likert2: {
        border: `1px solid ${bmOrange}`,
    },
    likert3: {
        border: `1px solid #FFD39F`,
    },
    likert3s: {
        backgroundColor: '#FFD39F'
    },
    likert4: {
        border: `1px solid ${bmYellow}`,
    },
    likert5: {
        border: `1px solid #D9F3A3`,
    },
    likert5s: {
        backgroundColor: '#D9F3A3',
    },
    likert6: {
        border: `1px solid ${bmGreen}`,
    },
    likert7: {
        border: `1px solid ${bmTeal}`,
    },
    largeTextEntry: {
        border: '1px solid #000',
        marginVertical: '10px',
        lineHeight: '2.5ex',
        height: '7.5ex',
    }
})

export default styles;