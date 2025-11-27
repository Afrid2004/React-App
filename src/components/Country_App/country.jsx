import React, { useState } from 'react'

const Country = (props) => {
  const { name, capital, area, flags, languages, region } = props.country;
  console.log(props.country);

  const handleRemove = (name) => {
    props.onRemoveCountry(name);
  }

  return (
    <div className='card' style={{ maxWidth: "400px" }}>
      <div className="country-img" style={{ aspectRatio: "3/2" }}>
        <img className='img-fluid w-100 h-100' src={flags.svg} alt={name.common} />
      </div>
      <div className="country-info mb-2">
        <h5>Name: {name.common}</h5>
        <p>Capital: {capital} </p>
        <p>Region: {region} </p>
        <p>Area: {area} </p>
        <p>Languages: {Object.values(languages).join(", ")} </p>
      </div>
      <button className='btn btn-danger' onClick={() => { handleRemove(name.common) }}>Remove Country</button>
    </div>
  )
}

export default Country;