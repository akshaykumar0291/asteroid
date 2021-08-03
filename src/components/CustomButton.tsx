import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CustomButton = ({ title, isDisabled, onSubmit }: any) => {

    return (
        <TouchableOpacity
            disabled={isDisabled}
            onPress={onSubmit}
            style={isDisabled ? styles.inactiveButton : styles.activeButton}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: "orange",
        borderRadius: 5,
        padding: 10,
        elevation: 1,
        marginTop: 5,
        width: "48%",
        height: 48,
        justifyContent: 'center'
    },
    inactiveButton: {
        backgroundColor: "grey",
        borderRadius: 5,
        padding: 10,
        elevation: 1,
        marginTop: 5,
        width: "48%",
        height: 48,
        justifyContent: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default CustomButton