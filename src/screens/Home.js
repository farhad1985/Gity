import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import Weather from '../components/Weather';
import CardImage from '../components/CardImage';
import WeatherWeekly from '../components/WeatherWeekly';

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return (
            {
                headerLeft: (
                    <TouchableOpacity style={styles.barButton}>
                        <Image source={require('../assets/search.png')} style={styles.search} />
                    </TouchableOpacity>
                ),
                headerRight: (
                    <TouchableOpacity style={styles.barButton}>
                        <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
                    </TouchableOpacity>
                )
            }
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textLarge}>Gity Gard</Text>
                    <Text style={styles.textSmall}>Good morning, Monday 14 July</Text>
                </View>
                <View style={styles.weatheView}>
                    <Weather weatherType='Sunny' temp='31' />
                    <WeatherWeekly />
                </View>
                <View style={styles.topDestination}>
                    <Text style={styles.textLarge}>Top Destination</Text>
                    <ScrollView horizontal >
                        <CardImage name={require('../assets/back1.jpg')}
                            title='Lahijan'
                            desc='Iran, Guilan, Rasht' />
                        <CardImage name={require('../assets/back2.jpg')}
                            title='New york'
                            desc='US, New york' />
                        <CardImage name={require('../assets/back3.jpg')}
                            title='Lahijan'
                            desc='Iran, Guilan, Rasht' />

                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 32,
        paddingVertical: 24,
    },
    weatheView: {
        alignItems: 'center'
    },
    topDestination: {
        paddingHorizontal: 32,
        paddingVertical: 32,
    },
    barButton: {
        paddingHorizontal: 16
    },
    textLarge: {
        fontWeight: '600',
        fontSize: 23,
        fontFamily: 'Futura'
    },
    textSmall: {
        fontSize: 20,
        color: 'grey',
    },
    search: {
        width: 30,
        height: 30,
        tintColor: 'grey'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 10
    }

})