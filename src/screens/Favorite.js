import React from 'react';
import {View, Text, Button} from 'react-native';

export default class FavoriteScreen extends React.Component {
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Favorite</Text>
                <Button title='GoTo Detail...' onPress={() => this.props.navigation.push('Detail')} />
            </View>
        )
    }
}