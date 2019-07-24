import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Cloudy = ({ size = 52 }) => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'rgba(246, 246, 246, 0.2)',
                height: size / 2,
                width: size / 2,
                borderRadius: size / 4,
                marginLeft: -10
            }} />
            <View style={{
                backgroundColor: 'rgba(246, 246, 246, 0.7)',
                height: size / 1.8,
                width: size / 1.8,
                borderRadius: size / 4,
                marginTop: -20,
            }} />
        </View>
    )
}

const styles = {
    container: {
        marginVertical: 25,
        marginHorizontal: 16,
        shadowColor: 'grey',
        shadowOpacity: 0.4,
        shadowRadius: 1,
        shadowOffset: { width: 1, height: 1 }
    }
}

export default Cloudy