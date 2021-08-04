import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, StyleSheet, Alert } from 'react-native'
import { getAsteroidInfo, getRandomAsteroidInfo } from "../api/AsteroidApi";
import CustomButton from '../components/CustomButton';
import Loader from '../components/Loader';

const HomeScreen = (props: any) => {
    
    const { navigation } = props;
    const [asteroidId, setAseroidId] = useState('');
    const [loading, setLoading] = useState(false);

    const getAsteroidDetails = async () => {
        setLoading(true)
        const asteroidInfo = await getAsteroidInfo(asteroidId)
        navigateToAsteroidInfo(asteroidInfo)
    }

    const getRandomAsteroidDetails = async () => {
        setLoading(true)
        const asteroidInfo = await getRandomAsteroidInfo()
        navigateToAsteroidInfo(asteroidInfo)
    }

    const navigateToAsteroidInfo = (asteroidInfo: any) => {
        setLoading(false)
        if (asteroidInfo != null) {
            navigation.navigate('AsteroidInfo', { asteroid: asteroidInfo })
        } else {
            Alert.alert('Error', 'Getting error while fetching the asteroid details')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={'Enter Asteroid ID'}
                value={asteroidId}
                onChangeText={inputName => { setAseroidId(inputName) }} />
            <View style={styles.btnContainer}>
                <CustomButton
                    title='Random Asteroid'
                    isDisabled={false}
                    onSubmit={getRandomAsteroidDetails} />

                <CustomButton
                    title='Submit'
                    isDisabled={!asteroidId}
                    onSubmit={getAsteroidDetails} />
            </View>
            <Loader isLoading={loading} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingStart: 8,
        paddingEnd: 8,
        marginBottom: 10,
        borderRadius: 5,
        height: 48,
        elevation: 2
    }
})

export default HomeScreen