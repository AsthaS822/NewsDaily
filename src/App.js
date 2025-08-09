import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'

const App = () => {
  const [country, setCountry] = useState('us');

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  return (
    <>
      <Navbar onCountryChange={handleCountryChange} />
      <News country={country} />
    </>
  )
}

export default App