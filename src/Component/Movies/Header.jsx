import React, { useState } from 'react';
import { myApiData } from '../Data Base/DataBase';
import CardDidplay from './CardDidplay'
import MoviesPoster from './MoviesPoster';
import SearchMovie from './SearchMovie';

export default function Header() {
  const [data, setData] = useState([...myApiData]);
  return (
    <>
      <MoviesPoster data={data} />
      <SearchMovie data={data} setData = {setData}/>
    </>
  )
}
