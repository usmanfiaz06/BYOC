export interface City {
  name: string;
  country: string;
  region: string;
  coords: [number, number]; // [lon, lat]
  note?: string;
}

export const cities: City[] = [
  { name: 'Islamabad', country: 'Pakistan', region: 'South Asia', coords: [73.05, 33.69], note: 'Where it started · 2020' },
  { name: 'Lahore', country: 'Pakistan', region: 'South Asia', coords: [74.35, 31.55] },
  { name: 'Karachi', country: 'Pakistan', region: 'South Asia', coords: [67.01, 24.86] },
  { name: 'Gilgit', country: 'Pakistan', region: 'South Asia', coords: [74.31, 35.92] },
  { name: 'Riyadh', country: 'Saudi Arabia', region: 'Middle East', coords: [46.68, 24.71] },
  { name: 'Dammam', country: 'Saudi Arabia', region: 'Middle East', coords: [50.1, 26.43] },
  { name: 'Dubai', country: 'UAE', region: 'Middle East', coords: [55.27, 25.2] },
  { name: 'Doha', country: 'Qatar', region: 'Middle East', coords: [51.53, 25.29] },
  { name: 'London', country: 'United Kingdom', region: 'Europe', coords: [-0.12, 51.51] },
  { name: 'Dublin', country: 'Ireland', region: 'Europe', coords: [-6.26, 53.35] },
  { name: 'Berlin', country: 'Germany', region: 'Europe', coords: [13.41, 52.52] },
  { name: 'Stockholm', country: 'Sweden', region: 'Europe', coords: [18.07, 59.33] },
  { name: 'San Francisco', country: 'United States', region: 'North America', coords: [-122.42, 37.77] },
  { name: 'Las Vegas', country: 'United States', region: 'North America', coords: [-115.14, 36.17] },
  { name: 'Dallas', country: 'United States', region: 'North America', coords: [-96.8, 32.78] },
  { name: 'Washington, D.C.', country: 'United States', region: 'North America', coords: [-77.04, 38.91] },
  { name: 'Northern Virginia', country: 'United States', region: 'North America', coords: [-77.3, 38.85] },
  { name: 'Toronto', country: 'Canada', region: 'North America', coords: [-79.38, 43.65] },
  { name: 'Kuala Lumpur', country: 'Malaysia', region: 'Southeast Asia', coords: [101.69, 3.14] },
  { name: 'Singapore', country: 'Singapore', region: 'Southeast Asia', coords: [103.85, 1.29] },
  { name: 'Jakarta', country: 'Indonesia', region: 'Southeast Asia', coords: [106.85, -6.21] },
  { name: 'Dhaka', country: 'Bangladesh', region: 'South Asia', coords: [90.41, 23.81] },
  { name: 'Dar es Salaam', country: 'Tanzania', region: 'Africa', coords: [39.27, -6.79] },
  { name: 'Tunis', country: 'Tunisia', region: 'Africa', coords: [10.18, 36.81] },
  { name: 'Melbourne', country: 'Australia', region: 'Oceania', coords: [144.96, -37.81] },
  { name: 'Perth', country: 'Australia', region: 'Oceania', coords: [115.86, -31.95] },
];

/** Headline numbers. Keep these in one place so every page agrees. */
export const stats = {
  gatherings: 212,
  members: 3200,
  countries: 21,
  since: 2020,
};
