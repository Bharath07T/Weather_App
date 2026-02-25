import axios from 'axios';

const API1 = "https://indianapi.in/weather-api/india/cities";
const APIKEY = "sk-live-f8JhSqcmEFZdI9AoHJdTUohGODaqTCiRlcU6Xbv1";

const API2 = "https://indianapi.in/weather-api/india/weather";
const API3 = "https://indianapi.in/weather-api/global/current";
const API4 = "https://indianapi.in/weather-api/global/weather";
const API5 = "https://indianapi.in/weather-api/global/forecast";
const API6 = "https://indianapi.in/weather-api/india/weather_by_id";

const headers = {
  headers: {
    Authorization: `Bearer ${APIKEY}`,
  },
};

export const getWeatherData = () => {
  return axios.get(API1, headers);
};

export const getIndianWeatherByCity = (city) => {
  return axios.get(`${API2}?city=${city}`, headers);
};

export const getGlobalCurrentWeather = (city) => {
  return axios.get(`${API3}?city=${city}`, headers);
};

export const getCurrentWeatherAndForecast = (city) => {
  return axios.get(`${API4}?city=${city}`, headers);
};

export const getWeatherForecastGlobally = (city) => {
  return axios.get(`${API5}?city=${city}`, headers);
};

export const getIndianCityWeatherByID = (id) => {
  return axios.get(`${API6}?id=${id}`, headers);
};