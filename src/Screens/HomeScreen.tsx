/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  LogBox,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  /////////debouncing //////////
  const dispatch = useDispatch();
  function debounce(cb, delay = 1000) {
    let timeOut;
    return (...args) => {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
  const changeDebounce = debounce(text => {
    dispatch({type: 'userData', payload: text});
  }, 1000);

  /////////////months above/////////

  const dat = useSelector(state => state.ForecastReducer.weatherData);
  const [expand, setExpand] = useState(false);
  const data = [
    {time: 12, deg: `${dat.forecast.forecastday[0].hour[0].temp_c}`},
    {time: 1, deg: `${dat.forecast.forecastday[0].hour[1].temp_c}`},
    {time: 2, deg: `${dat.forecast.forecastday[0].hour[2].temp_c}`},
    {time: 3, deg: `${dat.forecast.forecastday[0].hour[3].temp_c}`},
    {time: 4, deg: `${dat.forecast.forecastday[0].hour[4].temp_c}`},
    {time: 5, deg: `${dat.forecast.forecastday[0].hour[5].temp_c}`},
    {time: 6, deg: `${dat.forecast.forecastday[0].hour[6].temp_c}`},
  ];
  const [cityInfo, setCityInfo] = useState([
    {title: 'Sunrise', data: dat.forecast.forecastday[0].astro.sunrise},
    {title: 'Wind', data: `${dat?.current.wind_kph} km/h`},
    {title: 'Precipitation', data: `${dat?.current.precip_mm} mm`},
    {title: 'Sunset', data: dat.forecast.forecastday[0].astro.sunset},
    {title: 'Pressure', data: `${dat?.current.pressure_mb} mb`},
    {title: 'Humidity', data: `${dat?.current.humidity} %`},
  ]);

  // forecast report data

  const sixDayReport = dat.forecast.forecastday.map(item => {
    return {
      day: days[new Date(item.date).getDay()],
      logo: item.day.condition.icon,
      deg: item.day.avgtemp_c,
      tempDecrease: item.day.mintemp_c,
      tempIncrease: item.day.maxtemp_c,
    };
  });

  // useEffect(() => {
  //   LogBox.ignoreLogs(['VirtualizedLists should never be ']);
  // }, []);
  return (
    <LinearGradient
      colors={['#4287A9', '#659DB9', '#1787BF', '#19445A']}
      style={styles.container}>
      <View style={styles.inputDiv}>
        <TextInput
          placeholder="Search City"
          placeholderTextColor="#FFFFFF90"
          style={styles.input}
          onChangeText={val => changeDebounce(val)}
        />
        <Pressable>
          <Image
            source={require('../../assets/HomeScreen/celsius.png')}
            style={styles.celcius}
          />
        </Pressable>
      </View>
      <View style={styles.cityLabel}>
        {expand ? (
          <Pressable onPress={() => setExpand(false)}>
            <Image
              style={{...styles.chevronDown, width: 30, height: 30}}
              source={require('../../assets/HomeScreen/down-arrow.png')}
            />
          </Pressable>
        ) : (
          <Text style={styles.cityDate}>
            {new Date(dat.forecast.forecastday[0].date).toLocaleDateString(
              'en-us',
              {weekday: 'long', month: 'long', day: 'numeric'},
            )}
          </Text>
        )}
        <Text style={styles.cityName}>{dat?.location.name}</Text>
        <Text style={styles.country}>{dat?.location.country}</Text>
      </View>
      {!expand && (
        <View>
          <View style={styles.cityClimate}>
            <View style={styles.firstContainer}>
              <Text style={styles.cityTemp}>{dat?.current.temp_c}&deg;</Text>
              <Text style={styles.tempFeel}>
                {`Feels like ${dat.current.feelslike_c}`}&deg;
              </Text>
              <View style={styles.tempContainer}>
                <View style={styles.tempUpDown}>
                  <Image
                    source={require('../../assets/HomeScreen/down-arrow.png')}
                    style={styles.chevronDown}
                  />
                  <Text style={styles.cityHighLow}>
                    {`${dat.forecast.forecastday[0].hour[0].windchill_c}`}&deg;
                  </Text>
                </View>
                <View style={styles.tempUpDown}>
                  <Image
                    source={require('../../assets/HomeScreen/down-arrow.png')}
                    style={styles.chevronUp}
                  />
                  <Text style={styles.cityHighLow}>
                    {`${dat.forecast.forecastday[0].hour[0].heatindex_c}`}&deg;
                  </Text>
                </View>
              </View>
            </View>
            <Image
              source={{uri: `http:${dat?.current.condition.icon}`}}
              style={styles.cloud}
            />
          </View>
          <Text style={styles.cloudy}>{dat?.current.condition.text}</Text>
        </View>
      )}
      <View style={styles.renderContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({item}) => (
            <View style={styles.renderItems}>
              <Text style={styles.renderTime}>{item.time} AM</Text>
              <Text style={styles.renderDeg}>{item.deg}&deg;</Text>
            </View>
          )}
        />
      </View>

      {/* Forecast report */}

      {expand && (
        <View style={styles.weekReportContainer}>
          <FlatList
            data={sixDayReport}
            renderItem={({item}) => (
              <View style={styles.weekReportMap}>
                <Text style={styles.weekReportDay}>{item.day}</Text>
                <View
                  style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                  <Image
                    source={{uri: `http:${item.logo}`}}
                    style={styles.weekReportlogo}
                  />
                  <Text style={styles.weekReportdeg}>{item.deg}&deg;</Text>
                  <View style={styles.tempContainer}>
                    <View style={styles.tempUpDown}>
                      <Image
                        source={require('../../assets/HomeScreen/down-arrow.png')}
                        style={styles.chevronDown}
                      />
                      <Text style={styles.cityHighLow}>
                        {item.tempDecrease}&deg;
                      </Text>
                    </View>
                    <View style={styles.tempUpDown}>
                      <Image
                        source={require('../../assets/HomeScreen/down-arrow.png')}
                        style={styles.chevronUp}
                      />
                      <Text style={styles.cityHighLow}>
                        {item.tempIncrease}&deg;
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
      <View style={styles.mapContainer}>
        {cityInfo.map(item => (
          <View key={item.title} style={styles.envData}>
            <Text style={styles.mapTitle}>{item.title}</Text>
            <Text style={styles.mapData}>{item.data}</Text>
          </View>
        ))}
      </View>
      {!expand && (
        <Pressable onPress={() => setExpand(true)}>
          <Image
            style={styles.expand}
            source={require('../../assets/HomeScreen/down-arrow.png')}
          />
        </Pressable>
      )}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#00CED180',
    borderRadius: 20,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    fontSize: 16,
  },
  celcius: {
    height: 25,
    width: 25,
    tintColor: '#FFFFFF',
  },
  inputDiv: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10,
  },
  cityLabel: {
    alignItems: 'center',
  },
  cityDate: {
    fontSize: 16,
    color: '#FFFFFF90',
  },
  cityName: {
    fontSize: 26,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  country: {
    color: '#FFFFFF90',
  },
  chevronDown: {
    height: 15,
    width: 15,
    tintColor: '#FFFFFF70',
  },
  chevronUp: {
    height: 15,
    width: 15,
    transform: [{rotate: '180deg'}],
    tintColor: '#FFFFFF70',
  },
  cloud: {
    width: 120,
    height: 120,
  },
  cityClimate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginVertical: 20,
  },
  cityTemp: {
    fontSize: 70,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  tempFeel: {
    marginVertical: 10,
    color: '#FFFFFF80',
  },
  cityHighLow: {
    color: '#FFFFFF90',
    fontSize: 16,
    fontWeight: '600',
  },
  tempUpDown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  firstContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudy: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
    alignSelf: 'center',
  },

  /////render items data///////////
  renderContainer: {
    height: 90,
    borderTopWidth: 1,
    borderColor: '#FFFFFF50',
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  renderItems: {
    flex: 1,
    height: 80,
    width: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  renderTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF40',
  },
  renderDeg: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF90',
  },

  /////map data/////////
  mapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  envData: {
    width: 100,
    height: 80,
    justifyContent: 'space-evenly',
  },
  mapTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF60',
  },
  mapData: {
    fontSize: 20,
    color: '#FFFFFF90',
    fontWeight: '700',
  },
  expand: {
    height: 30,
    width: 30,
    transform: [{rotate: '180deg'}],
    tintColor: '#FFFFFF70',
    marginTop: 20,
  },

  //////expanded ////////
  weekReportContainer: {
    width: '100%',
    height: 200,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF50',
  },
  weekReportMap: {
    flexDirection: 'row',
    marginBottom: 30,
    marginHorizontal: 10,
  },
  weekReportlogo: {
    height: 25,
    width: 30,
  },
  weekReportDay: {
    width: 100,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  weekReportdeg: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingLeft: 30,
  },
});
