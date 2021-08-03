import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import InfoText from './InfoText'

const WeatherDetails = ({weatherInfo}) => {
    const {temperature, wind_speed: windSpeed, precip, weather_icons: weatherIcons} = weatherInfo.current
    console.log(weatherIcons[0])
    return (
        <View>
            <InfoText label={"Temperature"} text={temperature}/>
            <InfoText label={"Wind Speed"} text={windSpeed}/>
            <InfoText label={"Precipitation"} text={precip}/>
            <Image style={styles.image} source={{uri: weatherIcons[0]}}/>
        </View>
    )
}

const styles = StyleSheet.create( {
    image : {
        height : 100,
        width : 100,
        margin : 5
    },
}
)

export default WeatherDetails