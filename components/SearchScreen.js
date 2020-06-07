import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
  ListView,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  Alert,
  Title,
} from "react-native";
import axios from 'axios';
import getImageForWeather from "../api/getImageForWeather";
import { fetchLocationId, fetchWeather } from "../api/api";
import SearchInput from './SearchInput';

export default class SearchScreen extends Component {
  constructor(){
    super()
    this.state = {
      info: {
        name:"loading",
        temp:"loading..",
        humidity:"",
        desc:"loading..",
        icon:"loading..",
        country:"loading",
      },
    };
  }

  changeLocation = (e) => {
    this.getWeather(e)
  }

  getWeather = (e) => {
    if(!e){
      this.state = {
        info:{
          name:'Dakar'
        }
      }
    } else {
      this.state = {
        info: {
          name: e
        }
      }
    }

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.info.name}&appid=5e49b81ebcd594016605bdcda2e43092`
      ).then(
        response => response.json()
      ).then(
        data => {
          this.setState({
            info:{
              name:data.name,
              temp:data.main.temp,
              humidity:data.main.humidity,
              desc:data.weather[0].description,
              icon:data.weather[0].icon,
              country:data.sys.country,
            },
            loading:true,
          })
          // console.log(this.state.info)
        }).catch(err => {
          Alert.alert("Erreur" + err.message + "Connexion failed!",[{text:"ok"}])
        })
  }
  componentDidMount() {
    this.getWeather();
  }
  
  render() {
    const { loading } = this.state
    setTimeout(() => this.setState({ loading: false }), 5000)
      return (
            <ImageBackground
              style={styles.bgImage}
              source={require("../assets/sleet.png")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            {!loading && (
                <View>
                  <View style={styles.container}>
                    <Text style={styles.climate}>{this.state.info.country}</Text>
                    <Text style={styles.text}>{this.state.info.name}</Text>
                    <Text style={styles.climate}>{this.state.info.temp}°C</Text>
                    <Text style={styles.climate}>{this.state.info.desc}</Text>
                    <Image style={{ width: 100, height: 100, alignContent:'center' }} source={{ uri:'http://openweathermap.org/img/wn/'+this.state.info.icon+".png"}} />
                    <Text style={styles.climate}>{this.state.info.humidity}</Text>
                  </View>
                </View>
            )}
            {loading && (
              
              <ActivityIndicator />
            )}
              <SearchInput onSubmit={this.changeLocation} />
          </ImageBackground>
          );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    fontWeight:'bold',
    fontSize:'40px',
  },
  button: {
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '40px',
  },
  climate:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  image: {
    width: 200,
    height: 200,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "skyblue",
  },
  layout: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  box: {
    padding: 25,
    backgroundColor: "steelblue",
    margin: 5,
  },
});
