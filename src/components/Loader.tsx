import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loader = ({isLoading}: any) => {
    return isLoading ? (
        <View style={styles.container}>
            <ActivityIndicator color="#380ce6" size="large" />
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        alignItems: 'center',
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffffdb',
        zIndex: 10,
    },
    logo: {
        height: 85,
        width: 80,
    },
});

export default Loader