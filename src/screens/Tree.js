import React from 'react';
import {View, Text, Button} from 'react-native';

export default class TreeScreen extends React.Component {

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Tree</Text>
                <Button title='GoTo Detail...' onPress={() => {this.props.navigation.push('Detail', {
                    customerName: 'farhad'
                })
                console.log(this.props)}} />
            </View>
        )
    }
}