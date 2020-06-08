import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class Title extends Component {
    render() {
        const { children } = this.props

        return (
            <View style={styles.header}>
                <Text style={styles.titre}>{children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        padding: 15,
    },
    titre: {
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
    },
})