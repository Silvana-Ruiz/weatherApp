import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import RowText from '../components/RowText';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={'High: 8'}
          messageTwoStyles={highLow}
          messageTwo={'Low: 6'}
        />
      </View>

      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageOne={'It\'s sunny'}
        messageTwoStyles={message}
        messageTwo={'It\'s perfect t-shirt weather'}
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
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
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
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;