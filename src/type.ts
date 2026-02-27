export interface WeatherData {
  current: {
    temp: number;
    humidity: number;
    windSpeed: number;
    description: string;
    icon: string;
    feelsLike: number;
    pressure: number;
    uvIndex: number;
    visibility: number;
  };
  forecast: Array<{
    date: string;
    temp: number;
    description: string;
    icon: string;
  }>;
  hourly: Array<{
    time: string;
    temp: number;
  }>;
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
  };
}

export const DEFAULT_CITIES = [
  { name: "Lagos", country: "NG", lat: 6.5244, lon: 3.3792 },
  { name: "Abuja", country: "NG", lat: 9.0579, lon: 7.4951 },
  { name: "Port Harcourt", country: "NG", lat: 4.8156, lon: 7.0498 },
  { name: "New York", country: "US", lat: 40.7128, lon: -74.006 },
  { name: "London", country: "GB", lat: 51.5074, lon: -0.1278 },
  { name: "Tokyo", country: "JP", lat: 35.6762, lon: 139.6503 },
];
