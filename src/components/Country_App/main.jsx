import React, { useEffect, useState } from 'react';
import Countries from './countries';
import Search from './search';

const url = 'https://restcountries.com/v3.1/region/asia';
const loadingMessage = "Data is loading...";

const CountryApp = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchCountries = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data. Try again later.');
      }
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCountries(url);
  }, []);

  const handleRemoveCountry = (country) => {
    const filteredCountries = countries.filter((data) => {
      return data.name.common !== country;
    });
    setFilteredCountries(filteredCountries);
  }

  const handleSearch = (value) => {
    const convertLower = value.toLowerCase();
    const searchedCountry = countries.filter((data) => {
      const countryName = data.name.common.toLowerCase();
      return countryName.startsWith(convertLower);
    });
    setFilteredCountries(searchedCountry);
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      {countries && <Countries onRemoveCountry={handleRemoveCountry} countries={filteredCountries} />}
      <p>{loading && loadingMessage}</p>
      <p>{error && error}</p>

    </div>
  )
}

export default CountryApp