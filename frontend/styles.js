import React from 'react';
import { StyleSheet } from 'react-native';

export const bmBlue = '#75A9D9'
export const bmTeal = '#75D9D3'
export const bmGreen = '#75D9A9'
export const bmYellow = '#E0F09E' //maybe replace, kinda ugly
export const bmOrange = '#FFA978'

const styles = StyleSheet.create({
    homeJournalView: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmBlue}`,
        borderRadius: 4
    },
    homeReminderView: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmTeal}`,
        borderRadius: 4
    },
    homeLibraryView: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmGreen}`,
        borderRadius: 4
    },
    homeSupportView: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmYellow}`,
        borderRadius: 4
    },
    journalButton: {
        backgroundColor: bmBlue,
        color: bmBlue,
        padding: '5px',
    },
    libraryAllButton: {
        backgroundColor: bmGreen,
        color: 'white',
        uppercase: false,
        padding: '5px',
        width: '40%',
        marginEnd: '5%'
    },
    supportButton: {
        backgroundColor: bmYellow,
        color: 'black',
        uppercase: false,
        padding: '5px',
        width: '45%',
        marginRight: '5%',
    },
    libraryButton: {
        backgroundColor: bmBlue,
        marginHorizontal: '3%',
        marginVertical: '1%'
    },
    conditionButtonBlue: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmBlue}`,
        borderRadius: 4
    },
    conditionButtonTeal: {
        margin: '3%',
        padding: '2%',
        border: `2px solid ${bmTeal}`,
        borderRadius: 4
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
    likert1: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid #FD3D3D`,
    },
    likert2: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid #FFA978`,
    },
    likert3: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid ${bmOrange}`,
    },
    likert4: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid #F8F49D`,
    },
    likert5: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid ${bmYellow}`,
    },
    likert6: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid ${bmTeal}`,
    },
    likert7: {
        height: '30px',
        width: '30px',
        margin: '2%',
        borderRadius: '2px',
        border: `1px solid ${bmGreen}`,
    },
})

export default styles;