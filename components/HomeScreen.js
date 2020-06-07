import React from 'react';
import { StyleSheet, Text, View, Animated, Image, Button, ImageBackground } from 'react-native';

export default class Home extends React.Component {
   
    state = { height: new Animated.Value(100) }
    startAnimation = () => {
        const { height } = this.state

        // Reset the value if needed
        height.setValue(1000)

        // Start a spring animation
        Animated.spring(height, { toValue: 100, friction: 0.8 }).start()
    }
    componentDidMount() {
        this.startAnimation()
    }

    render(){
        return (
          <ImageBackground
            style={styles.bgImage}
            source={require("../assets/light-cloud.png")}
          >
            <View onLoad={this.startAnimation}>
              <Text style={styles.titre}>
                Agence Gabonaise d’Études et d’Observations Spatiales
              </Text>
            </View>
          </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    bgImage: {
        padding: '100%',
        justifyContent: 'center',
    },
    titre: {
        fontSize: '25px',
        fontWeight: 'bold',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'red',
        padding: '10%',
    }
})