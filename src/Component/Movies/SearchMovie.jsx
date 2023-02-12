import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useMemo, useState } from 'react'
import CardDidplay from './CardDidplay';
import SearchField from './SearchField';
import SortingData from './SortingData';

export default function SearchMovie({ data ,setData}) {
    const [srcData, setSearch] = useState('');
    const [input, setInput] = useState('');
    const [selectData, setSelectData] = useState('');
    

    const movie = useMemo(() => {
        if (!srcData) return data
        return [...data].filter((ele, index) => {
            return (ele.Title.toLowerCase().includes(input))
        })
    }, [srcData, data])

    const searchData = () => {
        setSearch(input);
    }


    const sortingList = useMemo(() => {
        if(!selectData) return data

        let newData = data.sort((a, b) => {
            if (selectData === "Alphabetic") {
                return (a.Title.localeCompare(b.Title))
            }
            else if (selectData === "Year") {
                return a.Year - b.Year

            }
        })
        return newData;
    }, [selectData, data])
    
    // console.log(sortingList);

    return (
        <>
            <Stack
                direction='row'
                margin='15px'
                justifyContent='space-evenly'
            >
                <SearchField setInput={setInput} data = {data}/>
                <Button variant="contained" onClick={searchData}>Search</Button>
                <SortingData selectData={selectData} setSelectData={setSelectData} />
            </Stack>

            <CardDidplay data={movie} sorted={sortingList}/>
        </>
    )
}
