import React, { useState } from 'react'
import reactCSS from 'reactcss'
import {
    Card,
    FormControl,
    FormControlLabel,
    Checkbox,
    CardMedia,
    Typography,
    Select,
    MenuItem,
    Slider
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


const fontList = {
    Roboto: {
        name: 'Roboto',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`,
    },
    OpenSans: {
        name: 'Open Sans',
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap" />`,
    },
    Lato: {
        name: 'Lato',
        fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />`,
    },
    Oswald: {
        name: 'Oswald',
        fontFamily: '"Oswald", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap" />`,
    },
    SourceSansPro: {
        name: 'Source Sans Pro',
        fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,700&display=swap" />`,
    },
    Raleway: {
        name: 'Raleway',
        fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap" />`,
    },
    PTSans: {
        name: 'PT Sans',
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,500,700&display=swap" />`,
    },
    Lora: {
        name: 'Lora',
        fontFamily: '"Lora", serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:300,400,500,700&display=swap" />`,
    },
}

const FontBlock = ({
    children,
    variant
}) => {
    const dispatch = useDispatch();
    const typeface = useSelector(s=>s.typography[variant]);
    const palette = useSelector(s=>s.palette)
    const advanced = typeface.advanced;

    

    const setAdvanced = (isChecked) => {
        dispatch({
            type: 'SET_FONT_ADVANCED',
            advanced: isChecked,
            variant
        })
    }

    const setFontFamily = (fontFamily) => {
        dispatch({
            type: 'SET_FONT_FAMILY',
            fontFamily,
            variant
        })
    }

    const setTextTransform = (textTransform) => {
        dispatch({
            type: 'SET_TEXT_TRANSFORM',
            textTransform,
            variant
        })
    }

    const setFontWeight = (fontWeight) => {
        dispatch({
            type: 'SET_FONT_WEIGHT',
            fontWeight,
            variant
        })
    }

    const setFontSize = (fontSize) => {
        dispatch({
            type: 'SET_FONT_SIZE',
            fontSize,
            variant
        })
    }

    const setLineHeight = (lineHeight) => {
        dispatch({
            type: 'SET_LINE_HEIGHT',
            lineHeight,
            variant
        })
    }

    const styles = reactCSS({
        'default': {
            root: {
                display: 'flex',
                marginBottom: 25
            },
            preview: {
                width: 424,
                padding: 35,
                backgroundColor: palette.type === "light" ? '#f1fafa' : '#17181a'
            },
            dropdowns: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 0
            },
            sliders: {
                width: 250,
                padding: 35,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            },
            sliderLabelCombo: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                marginBottom: 20
            },
            firstDropdown: {
                marginRight: 10
            }
            
        },
    });

    return (

        <Card style={styles.root}>
            <div style={styles.sliders}>
                <div style={styles.dropdowns}>
                    <div style={styles.sliderLabelCombo}>
                        <Typography variant="overline" gutterBottom>
                            Font
                        </Typography>
                        <FormControl style={styles.firstDropdown}>
                            <Select
                            value={typeface.fontFamily}
                            onChange={e => setFontFamily( e.target.value )}
                            >
                                {
                                    Object.entries(fontList).map(([k, { fontFamily, name}]) => (
                                        <MenuItem value={fontFamily} key={k}>{name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div style={styles.sliderLabelCombo}>
                        <Typography variant="overline" gutterBottom>
                            Text Transform
                        </Typography>
                        <FormControl>
                            <Select
                            value={typeface.textTransform}
                            onChange={e => setTextTransform(e.target.value)}
                            >
                                <MenuItem value={'none'}>None</MenuItem>
                                <MenuItem value={'uppercase'}>Uppercase</MenuItem>
                                <MenuItem value={'lowercase'}>Lowercase</MenuItem>
                                <MenuItem value={'capitalize'}>Capitalize</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                
                
                {
                    advanced && (
                        <>
                            <Typography variant="overline" gutterBottom>
                                Font size
                            </Typography>
                            <Slider
                                value={+typeface.fontSize.slice(0, -3)}
                                onChange={(e, v) => setFontSize(v + 'rem')}
                                getAriaValueText={v => `${v}rem`}
                                valueLabelDisplay="auto"
                                step={0.125}
                                marks={[{ value: 0.5, label: '0.5rem' }, { value: 8, label: '8rem' }]}
                                min={0.5}
                                max={8}
                            />
                            <Typography variant="overline" gutterBottom>
                                Font weight
                            </Typography>
                            <Slider
                                value={typeface.fontWeight}
                                onChange={(e, v) => setFontWeight( v )}
                                getAriaValueText={v => `${v}`}
                                valueLabelDisplay="auto"
                                step={100}
                                marks={[{ value: 100, label: '100' }, { value: 900, label: '900' }]}
                                min={100}
                                max={900}
                            />
                            <Typography variant="overline" gutterBottom>
                                Line height
                            </Typography>
                            <Slider
                                value={typeface.lineHeight}
                                onChange={(e, v) => setLineHeight(v)}
                                getAriaValueText={v => `${v}`}
                                valueLabelDisplay="auto"
                                step={0.001}
                                marks={[{ value: 1, label: '1' }, { value: 3, label: '3' }]}
                                min={1}
                                max={3}
                            />
                        </>
                    )
                }
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={advanced}
                                onChange={(e) => setAdvanced(e.target.checked)}
                                name="advanced"
                                color="primary"
                            />
                        }
                        label="Advanced"
                    />
                </div>
            </div>
            <CardMedia
                style={styles.preview}
            >
                    {children}
            </CardMedia>
        </Card>

        
    )

}

export default FontBlock