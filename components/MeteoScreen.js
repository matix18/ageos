import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
  ListView,
  ActivityIndicator,
} from "react-native";
import axios from 'axios';
import api from '../api/api.js';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
const extractKey = ({ id }) => id

export default class Meteo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          location: "Dakar",
          climat: "Snow",
          temperature: 4,
          loading: false,
          height: new Animated.Value(100),
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          report: null,
        };
    }

    // ANIMATION
    startAnimation = () => {
        const { height } = this.state
        // Reset the value if needed
        height.setValue(100)
        // Start a spring animation
        Animated.spring(height, { toValue: 300, friction: 0.8 }).start()
    }

    componentDidMount() {
        this.startAnimation()
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const { height } = this.state;
        if(this.state.report === null){
            return (
            <ScrollView style={styles.container}>
                <ActivityIndicator color={styles.color} size="large" />
            </ScrollView>
            );
        }else{
            return (
              <ScrollView style={styles.container}>
                <ListView
                  style={styles.row}
                  dataSource={ds.cloneWithRows(this.state.report)}
                  renderRow={(row) => (
                    <Text>
                      {row.temp}
                      {/* console.log({row.temp}) */}
                    </Text>
                  )}
                />
              </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    button: {
        backgroundColor: 'steeblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
    }, 
    image: {
        width: 200,
        height: 200,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
        marginBottom: '2px',
    },
    layout: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    box: {
        padding: 25,
        backgroundColor: 'steelblue',
        margin: 5,
    },
})
