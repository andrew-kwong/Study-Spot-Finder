//Study Spot Finder User Menu

import React, { useState } from 'react';
import { addStudySpot, getStudySpots, updateStudySpotStatus, updateStudySpotKeyCode } from '../api/api'
import { ListItem, Divider } from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid'
import * as firebase from 'firebase';
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

import MyModal from './MyModal'

const items = [
  { name: 'StudySpo', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
  { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },

];
const numColumns = 2
const WIDTH = Dimensions.get('window').width

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      data: [],
    };

  }

  colors = ['red', 'black', 'blue', 'green', 'orange', 'yellow', 'purple', 'white', 'brown']


  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  state = {
    studySpotList: [],
    currentSpotItem: null,
  }

  static navigationOptions = {
    header: false,
  };

  //Generate a 4 digit number 
  randomGenerateCode() {
    var result = 1 + Math.floor(Math.random() * 4);
    var result2 = 1 + Math.floor(Math.random() * 4);
    var result3 = 1 + Math.floor(Math.random() * 4);
    var result4 = 1 + Math.floor(Math.random() * 4);

    const finResult = parseInt(`${result}${result2}${result3}${result4}`);

    updateStudySpotKeyCode(finResult);
  }

  signOutUser = () => {
    firebase.auth().signOut();
  }


  onStudySpotAdded = (studySpot) => {
    console.log("Study Spot Device Added!");
    console.log(studySpot);
    this.setState(prevState => ({
      studySpotList: [...prevState.studySpotList, studySpot]
    }));
  }

  // callback to let us know when we receive the study spot list 
  onStudySpotsReceived = (studySpotList) => {
    console.log(studySpotList);
    this.setState(prevState => ({
      studySpotList: prevState.studySpotList = studySpotList
    }));
  }

  componentDidMount() {
    getStudySpots(this.onStudySpotsReceived);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.textArea}>Reserve a Study Spot</Text>

          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </TouchableHighlight>


          <FlatList
            data={this.state.studySpotList}
            onPress={() => { this.setModalVisible(!modalVisible); }}
            /*ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }}/>}*/
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <View style={styles.itemStyle} onStartShouldSetResponder={() => { updateStudySpotStatus() }}>
                  <Text style={styles.itemText}>{item.Name}</Text>
                  <Text style={styles.itemBuilding}>{item.BuildingName}</Text>
                  <Text style={styles.itemFloor}>{item.Floor}</Text>
                </View>
              );
            }
            }
          />

          <MyModal 
          modalVisible={this.state.isModalVisible} 
          selectedItem={this.state.selectedItem}
          onDismiss={this._hideModal}
          />  

          <TouchableOpacity style={styles.button} onPress={this.randomGenerateCode}>
            <Text style={styles.font}>Generate Code! </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
            <Text style={styles.font}>Logout</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
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

  card: {

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

