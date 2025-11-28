import React from 'react';
import { v4 as uuid } from 'uuid';
import Country from './country';

const Countries = (props) => {
  const handleRemoveCountry = (value) => {
    props.onRemoveCountry(value);
  }
  return (
    <div className='all-card'>
      {props.countries.slice(0, 4).map((country) => {
        const newCountry = { id: uuid(), country };
        return <Country onRemoveCountry={handleRemoveCountry} key={newCountry.id} {...newCountry} />
      })}
    </div>
  )
}

export default Countries