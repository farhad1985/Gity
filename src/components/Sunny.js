import React from 'react';
import {StyleSheet, View} from 'react-native';

const Sunny = ({hasShadow, size = 52}) => {
    return(
        <View style = {{
            margin: 16,
            backgroundColor: 'rgba(254, 207, 56, 1)',
            height: size,
            width: size,
            borderRadius: size/2,
            shadowColor: 'orange',
            shadowOpacity: hasShadow ? 0.3 : 0 ,
            shadowRadius: hasShadow ? 5: 0,
            shadowOffset: {width: 1, height: 5}
        }} />
    )
}

export default Sunny