import React from 'react';
import { StyleSheet } from 'react-native';

export const bmBlue = '#75A9D9'
export const bmTeal = '#75D9D3'
export const bmGreen = '#75D9A9'
export const bmYellow = '#F3E6A2' //maybe replace, kinda ugly
export const bmOrange = '#FFA978'

const bmTealRGB = '117, 217, 211'

const styles = StyleSheet.create({
    wideTile: {
        margin: '2%',
        marginTop: '0',
        padding: '2%',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    wideButton: {
        padding: '15px',
        borderRadius: 4,
    },
    halfButton: {
        color: 'black',
        uppercase: false,
        padding: '5px',
        width: '45%',
        marginRight: '5%',
        borderRadius: 4,
    },
    mainHeader: {
        fontWeight: '600',
        fontSize: '20px',
    },
    subHeader: {
        fontWeight: '500',
        fontSize: '18px',
    },
    blueBackground: {
        backgroundColor: bmBlue,
    },
    tealBackground: {
        backgroundColor: bmTeal,
    },
    tealBackground50: {
        backgroundColor: `rgba(${bmTealRGB}, 0.5)`,
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
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginHorizontal: '2%',
        marginVertical: '1%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
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
    reminderButton: {
        marginHorizontal: '1%',
        marginVertical: '1%',
        padding: '1%',
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
    blueDivider: {
        borderBottomWidth: `4px`,
        borderBottomColor: `${bmBlue}`,
    },
    tealDivider: {
        borderBottomWidth: `4px`,
        borderBottomColor: `${bmTeal}`,
    },
    greenDivider: {
        borderBottomWidth: `4px`,
        borderBottomColor: `${bmGreen}`,
    },
    yellowDivider: {
        borderBottomWidth: `4px`,
        borderBottomColor: `${bmYellow}`,
    },
    orangeDivier: {
        borderBottomWidth: `4px`,
        borderBottomColor: `${bmOrange}`,
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
    textEntry: {
        border: '1px solid #000',
        marginVertical: '10px',
        backgroundColor: '#FFF',
    },
    largeTextEntry: {
        border: '1px solid #000',
        marginVertical: '10px',
        lineHeight: '2.5ex',
        height: '7.5ex',
        backgroundColor: '#FFF',
    },
    smallButton: {
        width: '30px',
        height: '30px',
        margin: 'auto',
        borderRadius: 4,
    },
    dot: {
        height: '12px',
        width: '12px',
        borderRadius: '50%',
        margin: '5px',
        display: 'inline-block',
    },
    radioFill: {
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: `${bmBlue}`,
        right: '3px',
        bottom: '3px',
    },
    emptyRadioButton: {
        height: '24px',
        width: '24px',
        borderRadius: '50%',
        margin: 'auto',
        display: 'inline-block',
    },
    dailyReminder: {
        borderRadius: '5px',
        backgroundColor: '#FFF',
        margin: '1%',
        padding: '1%',
    },
    datedReminder: {
        margin: '1%',
        padding: '1%',
    },
    modalBase: {
        border: `1px solid #999`,
        marginTop: '10%',
        marginHorizontal: '4%',
        backgroundColor: '#FFF',
        height: '95%',
        padding: '4%',
        zIndex: '9',
    },
    underModal: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '8',
    },
    remindersCheck: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginEnd: '5px',
    }
})

export default styles;