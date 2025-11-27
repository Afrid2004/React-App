import React, { useEffect, useState } from 'react';


const Search = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
  }

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div className='d-flex justify-content-end'>
      <form onSubmit={handleSubmit} className='d-flex mb-3 w-100' style={{ maxWidth: "400px" }}>
        <input onChange={handleChange} type="text" name='name' id='name' placeholder='Search Country' className='form-control' required />
        <button type='submit' className='btn btn-info'>Search</button>
      </form>
    </div>
  )
}

export default Search;