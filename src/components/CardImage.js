import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

const CardImage = ({ name, title, desc }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={name}
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
            >
                <View style={styles.tagView}>
                    <Text style={styles.tag}>{desc}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    image: {
        width: 200,
        height: 280,
    },
    tagView: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        flex: 1,
        flexDirection: 'column-reverse',
    },
    title: {
        color: 'white',
        fontWeight: '800',
        fontSize: 20,
    },
    tag: {
        color: 'white',
        fontSize: 17,
    }
})

export default CardImage