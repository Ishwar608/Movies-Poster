import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardSlider from './CardSlider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CardDidplay({ data ,sorted}) {


    return (
            <Stack
                direction="row"
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'
                backgroundColor='lightgray'
            >
                {
                    data.map((element, index) => {
                        return (
                            <Item
                                key={index}
                                sx={{ width: '47%', maxWidth: 300, m: 1, textAlign: 'left' }
                                }
                            >
                                <CardSlider images={element.Images} />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div" sx={{ m: 1 }}>
                                        <b>Title :-</b> {element.Title.toUpperCase()}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
                                        <b>Director :-</b> {element.Director}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
                                        <b>Writer :-</b> {element.Writer}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
                                        <b>Language :-</b> {element.Language}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
                                        <b>Year :-</b> {element.Year}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
                                        <b>Actors :-</b> {element.Actors}
                                    </Typography>
                                </CardContent>

                            </Item>
                        );
                    })
                }

            </Stack>
    )
}
