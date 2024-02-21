import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import RowText from '../components/RowText';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView style={[wrapper,
      { backgroundColor: weatherType[weatherCondition].backgroundColor }
    ]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>Feels like {feels_like}</Text>

        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={`High: ${temp_max}`}
          messageTwoStyles={highLow}
          messageTwo={`Low: ${temp_min}`}
        />
      </View>

      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageOne={weather[0].description}
        messageTwoStyles={message}
        messageTwo={weatherType[weatherCondition].message}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    color: 'white',
    fontSize: 30
  },
  highLow: {
    color: 'white',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
    color: 'white'
  },
  message: {
    fontSize: 30,
    color: 'white'
  }
});

export default CurrentWeather;