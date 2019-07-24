import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Sunny from './Sunny';
import Cloudy from './Cloudy';

import WeatherData from '../mocks/WeatherData';

const WeatherWeekly = () => {
    const datasource = WeatherData
    return (
        <View style={style.container}>{
            datasource.weeksly.map((item) => {
                if (item.status === 'sunny') {
                    return (
                        <View>
                            <Cloudy hasShadow={false} size={30} />
                            <Text style={style.text}>{item.temp}°</Text>
                        </View>
                    )
                } else {
                    return (
                        <View>
                            <Sunny hasShadow={false} size={30} />
                            <Text style={style.text}>29°</Text>
                        </View>
                    )
                }
            })
        }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        textAlign: 'center'
    }
})

export default WeatherWeekly