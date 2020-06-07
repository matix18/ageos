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
} from "react-native";

export default class SearchInput extends Component {
  constructor() {
    super()
    this.state = {
      text : ''
    }
  }

  handleText = (e) => {
    this.setState({
      text: e
    })
  }

  handleSubmit = () => {
    if (!this.state.text) return;
    this.props.onSubmit(this.state.text)
    this.setState({
      text : ''
    })  
  }

  render() {
      const { handleText } = this.props;
      const { text } = this.state;
      const { handleSubmit } = this.props;
      return (
        <View>
          <TextInput
            style={styles.search}
            placeholder="rechercher une ville"
            onChangeText={this.handleText} // si le text change et que le fils gère ses données, pas le parent
            onSubmitEditing={this.handleSubmit} // lorsqu'on tape sur le bouton Entrée
            value={text}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#fff",
    width: "450px",
    height: "30px",
    textTransform: "uppercase",
    textAlign: "center",
    margin: "auto",
    marginBottom: "-10%",
    borderRadius: '50px',
  },
});
