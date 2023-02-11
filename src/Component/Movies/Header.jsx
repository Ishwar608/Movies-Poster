import React, { useState } from 'react';
import { myApiData } from '../Data Base/DataBase';
import CardDidplay from './CardDidplay'
import CardSlider from './CardSlider';
export default function Header() {
  const [data, setData] = useState([...myApiData]);
  return (
    <>
      <CardDidplay data={data}/>
    </>
  )
}
