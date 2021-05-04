//Ritvik Kumar K
//login page


import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Dimensions, Alert } from 'react-native';
import { human, material } from 'react-native-typography';
import firestore from '../Config/FirebaseConfig';
import firebase from 'firebase';

export default function LoginScreen(props) {
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessageLogin, setErrorMessageLogin] = useState('');
    const [loginPage, setLoginPage] = useState(true);


    let signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
            if (response.user) {
                const user = firebase.auth().currentUser;
                var userDocRef = firestore.doc('users/' + user.uid);

                userDocRef.set({
                    name: signUpName
                });
                props.updateStatus(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    let login = async () => {
        try {
!
            await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    props.updateStatus(true)
                }
                if (!user) {
                    props.updateStatus(false)
                }
            })
            console.log("Login pressed")
        } catch (err) {

            console.log(err);
        }
    }

    if (loginPage) {
        return (
            <SafeAreaView style={styles.container}>

                <Text style={styles.titleText}>Gluclose</Text>
                <Text style={styles.titleText2}>Your personal diabetes chat assistant</Text>
                

                <Text style={styles.subtitleText}>Log In</Text>

                <View>
                    <TextInput
                        style={[styles.input, { marginTop: 50 }]}
                        value={loginEmail}
                        onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        value={loginPassword}
                        secureTextEntry={true}
                        onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
                        placeholder="Password"
                    />
                </View>

                <View style={styles.loginButton}>
                    <Button
                        title='Login'
                        onPress={() => login()}
                    />
                </View>

                <View style={styles.toggleLoginContainer}>
                    <Text style={styles.loginLineStyle}>Don't have an account?         </Text>
                    <Button title="Sign Up" onPress={() => setLoginPage(false)} ></Button>
                </View>


            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.container}>

                <Text style={styles.titleText}>Gluclose</Text>
                <Text style={styles.titleText2}>Your personal diabetes chat assistant</Text>

                <Text style={styles.subtitleText}>Sign Up</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        value={signUpName}
                        onChangeText={(signUpName) => setSignUpName(signUpName)}
                        placeholder="Name"
                    />
                    <TextInput
                        style={styles.input}
                        value={signUpEmail}
                        onChangeText={(signUpEmail) => setSignUpEmail(signUpEmail)}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        value={signUpPassword}
                        secureTextEntry={true}
                        onChangeText={(signUpPassword) => setSignUpPassword(signUpPassword)}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.loginButton}>
                    <Button
                        title="Sign Up"
                        onPress={() => signUp()}
                        color='#24a0ed'
                    />
                </View>
                <View style={styles.toggleLoginContainer}>
                    <Text style={styles.loginLineStyle}>Already have an account?    </Text>
                    <Button title="Login" onPress={() => setLoginPage(true)} ></Button>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        width: Dimensions.get('screen').width * 0.9,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#e6ffff',
        padding: 5,
        borderRadius: 5,
        borderWidth: 0.6,
        borderColor: 'black'
    },
    button: {
        marginBottom: 50
    },
    titleText: {
        fontSize: 86,
        marginVertical: 10
    },

    titleText2: {
        fontSize: 18,
        marginVertical: 0,
        paddingTop: -20,
        marginTop: -60
    },

    subtitleText: {
        ...human.largeTitle,
        marginVertical: 10
    },
    toggleLoginContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginLineStyle: {
        textAlign: 'center',
        ...human.body,
    },
    loginButton: {
        borderRadius: 10,
        backgroundColor: '#24a0ed',
        paddingVertical: 5,
        paddingHorizontal: 20
    }
});