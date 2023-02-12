import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useMemo, useState } from 'react'


export default function SortingData({ selectData, setSelectData }) {
   
    return (
        <FormControl
            sx={{ width: 200 }}
        >
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectData}
                label="Filter"
                onChange={(e)=>setSelectData(e.target.value)}
            >
                <MenuItem value='Alphabetic'>Alphabetic</MenuItem>
                <MenuItem value='Year'>Year</MenuItem>
            </Select>
        </FormControl>
    )
}
 