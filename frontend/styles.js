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
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    wideButton: {
        backgroundColor: bmBlue,
        color: bmBlue,
        padding: '15px',
        borderRadius: 4,
    },
    halfButton: {
        backgroundColor: bmYellow,
        color: 'black',
        uppercase: false,
        padding: '5px',
        width: '45%',
        marginRight: '5%',
        borderRadius: 4,
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
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    conditionSubButton: {
        margin: '2%',
        padding: '1%',
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '80%',
        alignSelf: 'flex-end',
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
        backgroundColor: '#FFF'
    },
    smallButton: {
        width: '30px',
        height: '30px',
        margin: 'auto',
        borderRadius: 4
    }
})

export default styles;