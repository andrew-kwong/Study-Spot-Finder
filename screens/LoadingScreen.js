//StudySpot Splash Screen
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Alert } from 'react-native';
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {

    componentDidMount() {

        setTimeout(() => {
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? "App" : "Auth")
            })
        }, 2500)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/SSF.png')} />
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0e1e3"
    },

    logo: {
        width: 250,
        height: 200,
    }
});
