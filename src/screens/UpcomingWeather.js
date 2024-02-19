import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
  {
    "dt_txt": "2022-08-30 17:00:00",
    "main": {
      "temp_min": 296.2,
      "temp_max": 296.31,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],
  },
  {
    "dt_txt": "2022-09-01 17:00:00",
    "main": {
      "temp_min": 23.2,
      "temp_max": 80.6,
    },
    "weather": [
      {
        "main": "Clouds",
      }
    ],
  },
  {
    "dt_txt": "2022-09-02 17:00:00",
    "main": {
      "temp_min": 33.3,
      "temp_max": 201.8,
    },
    "weather": [
      {
        "main": "Clear",
      }
    ],
  }
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => ( // Curly braces let you bring JavaScript logic and variables into JSX
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image} = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
