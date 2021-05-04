import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { human } from 'react-native-typography'
import * as Linking from 'expo-linking';

import { Ionicons } from '@expo/vector-icons';

export default function LegalDisclosureScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} >
                    <Ionicons name={"menu"} size={32} color={"black"} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Help</Text>
                <View style={styles.signOut}>
                    <Button title='Profile' onPress={() => signout()} ></Button>
                </View>
                {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
            </View>
            <View style={styles.linkContainer}>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkRowLabel}>Frequently Asked Questions</Text>
                <Text style={styles.medicalDisclosureText}></Text>
                <Text style={styles.medicalDisclosureText}>How do I make a new account ?</Text>
                <Text style={styles.medicalDisclosureText}>Click on the Sign Up button and enter the details in the boxes given.</Text>
                <Text style={styles.medicalDisclosureText}></Text>
                <Text style={styles.medicalDisclosureText}>How do I talk to the chatbot?</Text>
                <Text style={styles.medicalDisclosureText}>Go to the Chat page using the 3 bars icon at the top left of the app.</Text>
                <Text style={styles.medicalDisclosureText}></Text>
                <Text style={styles.medicalDisclosureText}>The App is frozen, what should I do ?</Text>
                <Text style={styles.medicalDisclosureText}>Force close the application and restart it, sorry for the incovnenience.</Text>
                <Text style={styles.medicalDisclosureText}></Text>
                <Text style={styles.medicalDisclosureText}>If you have any more questions, feel free to conctact us at:</Text>
                <Text style={styles.medicalDisclosureText}>rkk5266@psu.edu</Text>


            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get("screen").height * 0.1,
        width: Dimensions.get("window").width,
        backgroundColor: "white"
    },
    pageTitle: {
        ...human.title3,
        ...Platform.select({
            ios: {
                marginLeft: 40,
            },
            android: {
                marginLeft: 90,
            },
            default: {
                marginLeft: 0,
            }
        })
        
    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    linkRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    linkRowLabel: {
        ...human.title3
    },
    medicalDisclosureContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    medicalDisclosureText: {
        textAlign: 'center',
        ...human.body,
        paddingTop: 10
    },
    signOut: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '15%'
    },
});