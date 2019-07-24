import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Sunny from './Sunny'

const Weather = ({ weatherType, temp }) => {
    if (weatherType === 'Sunny') {
        return <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Sunny hasShadow />
            <Text style={styles.temp}>{temp}°</Text>
        </View>
    }
    return <View style={{ backgroundColor: 'red', height: 40 }} />
}

const WeatherType = {
    sunny: 'Sunny',
    cloudy: 'Cloudy',
    rainy: 'Rainy'
}

const styles = StyleSheet.create({
    temp: {
        fontSize: 32,
        fontWeight: '400',
        marginLeft: 16,
        marginBottom: 8,
        fontFamily: 'Futura',
    }
})

export default Weather