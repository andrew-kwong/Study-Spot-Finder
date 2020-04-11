import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Button,
    FlatList,
    SafeAreaView,
    Modal,
    TouchableHighlight,
    Dimensions
} from 'react-native';

export default class MyModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: props.modalVisible
        };
    };

    _setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => { this.props.onDismiss(); }}
                >
                    <View>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Table X {'\n'} Location{'\n'} Type {'\n'} Capacity {'\n'} Outlets </Text>


                            <TouchableHighlight
                                style={styles.modalButton}
                                onPress={() => { this.setModalVisible(!modalVisible); }}
                            >
                                <Text style={styles.textStyle}>Reserve</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.modalButton}
                                onPress={() => { this.setModalVisible(!modalVisible); }}
                            >
                                <Text style={styles.textStyle}>Release Spot</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>


            </View>

        );
    }
}


const styles = StyleSheet.create({

    row: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    button: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    input: {
        color: 'red',
    },

    modalButton: {
        marginTop: 20,
        marginHorizontal: 25,
        padding: 15,
        backgroundColor: "#667ABF",
        borderRadius: 20,
        height: 46,
        alignSelf: "center",
        justifyContent: "center"
    },

    button: {
        marginTop: 20,
        marginHorizontal: 100,
        padding: 15,
        backgroundColor: "#667ABF",
        borderRadius: 20,
        height: 46,
        alignItems: "center",
        justifyContent: "center"
    },

    font: {
        color: "white"
    },

    textArea: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center"
    },

    itemName: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
    },

    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000000',
    },

    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 200,
        backgroundColor: "#C4C4C4"
    },

    modalView: {
        margin: 20,
        backgroundColor: "#E9E9E9",
        borderRadius: 20,
        padding: 35,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "left",
        fontWeight: "bold"
    },

    itemStyle: {
        backgroundColor: 'rgba(196, 196, 196, 0.32)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: 170,
        flex: 1,
        margin: 10,
        //height: WIDTH/numColumns,
        borderRadius: 20
    },

    itemText: {
        color: '#000000',
        fontSize: 20,
    },

    titleItem: {
        color: '#000000',
        fontSize: 25,
        textAlign: 'center',
        margin: 18
    },

    itemBuilding: {
        color: '#000000',
        fontSize: 18,
    },


});

