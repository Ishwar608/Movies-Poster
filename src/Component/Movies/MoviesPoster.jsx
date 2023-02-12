import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import CardSlider from './CardSlider';

export default function MoviesPoster({data}) {
    const [poster,setPoster] = useState([]);

    useEffect(()=>{
        let newData = data.map((value)=>{
            return value.Poster;
        })
        setPoster(newData);
    },[])

// console.log(data);
  return (
    <Box sx={{width : '100%'}}>
          <CardSlider images={poster}/>
    </Box>
  )
}
