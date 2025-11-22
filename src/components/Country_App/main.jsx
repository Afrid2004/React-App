import React, { useEffect, useState } from 'react'

const CountryApp = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  const fetchCountry = async () => {
    setLoading(true);
    try {
      setLoading(false);
      setError(null)
      const fetchUrl = await fetch('https://restcountries.com/v3.1/region/asia');
      const result = await fetchUrl.json();
      if (!result.ok) {
        throw Error('Failed to fetch countries!');
      }
      setCountry(result);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCountry();
  }, [])

  return (
    <div>
      <div className="country-header">
        <h2>All Countries</h2>
      </div>
      <div>
        <p>{loading && "Data is loading..."}</p>
        <p>{error && error.message}</p>
      </div>
    </div>
  )
}

export default CountryApp