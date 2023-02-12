import React from 'react'
import { Autocomplete,  TextField } from '@mui/material'

export default function SearchField({setInput,data}) {
    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={data.map((option) => option.Title)}
            renderInput={(params) => (
                <TextField
                    sx={{ width: 600, mr: 1 }}
                    {...params}
                    label="Search input"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                    onChange={(e) => setInput(e.target.value)}
                />
            )}
        />
    )
}
