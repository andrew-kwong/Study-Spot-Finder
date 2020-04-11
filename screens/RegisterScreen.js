//Study Spot Finder Splash Page

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground,  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import * as firebase from 'firebase'; 

const DismissKeyBoard = ({children}) => (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
); 

export default class RegisterScreen extends React.Component
{
    state = {
        name: "",
        email: "",
        phoneNumber: "",
        uniName:"", 
        uniID:"", 
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        const { email, password, phoneNumber, uniName, uniID, } = this.state;

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name 
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };
    
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                >
            <ScrollView>
            <DismissKeyBoard>
                <View style={styles.container}>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.form}>

                        <View>
                            <Text style={styles.inputTitle}>Full Name</Text>
                            <TextInput
                                style={styles.inputButton}
                                autoCapitalize="none"
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.inputTitle}>School Email Address</Text>
                            <TextInput
                                style={styles.inputButton}
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>
                    
                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.inputTitle}>Phone Number</Text>
                            <TextInput
                                keyboardType = "number-pad"
                                style={styles.inputButton}
                                autoCapitalize="none"
                                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                                value={this.state.phoneNumber}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.inputTitle}>University Name</Text>
                            <TextInput
                                style={styles.inputButton}
                                autoCapitalize="none"
                                onChangeText={uniName => this.setState({ uniName })}
                                value={this.state.uniName}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.inputTitle}>University ID</Text>
                            <TextInput
                                style={styles.inputButton}
                                autoCapitalize="none"
                                onChangeText={uniID => this.setState({ uniID })}
                                value={this.state.uniID}
                            ></TextInput>
                        </View>
    

                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput
                                style={styles.inputButton}
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Up!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ alignSelf: "center", marginTop: 32 }}
                        onPress={() => this.props.navigation.navigate("Register")}
                    >
            
                    </TouchableOpacity>
                </View>
            
            </DismissKeyBoard>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 30,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "black",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 100, 	
        padding: 15,	
        backgroundColor: "#E9446A",	
        borderRadius: 20,	
        height: 46, 
        alignItems: "center",
        justifyContent: "center"
    }, 

    button2: {
        marginHorizontal: 100, 	
        padding: 15,	
        backgroundColor: "#E9446A",	
        borderRadius: 20,	
        height: 45, 
        alignItems: "center",
        justifyContent: "center"
    }, 

    inputButton: {
        height: 40, 
        width: "95%", 
        borderColor: "gray", 
        borderRadius: 20,
        borderWidth: 2, 
        marginTop: 10, 
        marginBottom: 10,
        fontSize: 18
    }

    
});