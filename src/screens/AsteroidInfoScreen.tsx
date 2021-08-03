import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

const AsteroidInfoScreen = (props: any) => {
    const { route } = props

    const { name, nasa_jpl_url: nasaJplUrl, is_potentially_hazardous_asteroid: isHazardous } = route.params.asteroid

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleTxt}>Asteroid Informations</Text>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitleTxt}>Name</Text>
                <Text style={styles.itemDescTxt}>{name}</Text>
                <View style={styles.divider} />
                <Text style={styles.itemTitleTxt}>Nasa JPL URL</Text>
                <Text style={styles.itemDescTxt}>{nasaJplUrl}</Text>
                <View style={styles.divider} />
                <Text style={styles.itemTitleTxt}>Is Hazardous</Text>
                <Text style={styles.itemDescTxt}>{isHazardous ? "Yes" : "No"}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    titleTxt: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16
    },
    itemContainer: {
        elevation: 4,
        borderRadius: 4,
        padding: 16,
        backgroundColor: '#FFFFFF'
    },
    itemTitleTxt: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4
    },
    itemDescTxt: {
        alignSelf: 'center',
        fontSize: 16
    },
    divider: {
        backgroundColor: '#ECECEC',
        height: 1,
        marginVertical: 16
    }
})

export default AsteroidInfoScreen