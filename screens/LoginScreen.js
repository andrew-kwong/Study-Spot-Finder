//Study Spot Finder Splash Page

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import * as firebase from 'firebase';

const DismissKeyBoard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    static navigationOptions = {
        headerShown: false,
    }


    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };



    render() {
        return (
            <DismissKeyBoard>
                <View style={styles.container}>

                    <ImageBackground source={require('../images/bg2.png')} style={{ width: '100%', height: '100%' }}>


                        <View style={styles.errorMessage}>
                            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                        </View>

                        <Image style={styles.logo} source={require('../images/SSF.png')} />

                        <View style={styles.form} >
                            <View>
                                <Text style={styles.inputTitle}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                ></TextInput>
                            </View>


                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.inputTitle}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                ></TextInput>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ alignSelf: "center", marginTop: 32 }}
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{ color: "#414959", fontSize: 13 }}>
                                New to StudySpotFinder? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </DismissKeyBoard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        marginTop: 10,
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
        marginTop: 10,
        marginBottom: 20,
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

    backgroundImage: {
        flex: 1,
        resizeMode: "cover"
    },
    logo: {
        marginTop: 150,
        width: 200,
        height: 150,
        alignSelf: "center"
    }

});