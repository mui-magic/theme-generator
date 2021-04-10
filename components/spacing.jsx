import React, { useState } from 'react';
import { Slider,
Typography,
Card,
CardMedia} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { getThemePreview } from './utils.js'
import reactCSS from 'reactcss';

const Spacing = () => {

    const dispatch = useDispatch();
    const spacing = useSelector(s=>s.spacing);
    const shape = useSelector(s=>s.shape);

    const setSpacing = (spacing) => {
        dispatch({
            type: 'SET_SPACING',
            spacing
        })
    }
    const setShape = (shape) => {
        dispatch({
            type: 'SET_SHAPE',
            shape
        })
    }
    const styles = reactCSS({
        'default': {
            root: {
                display: 'flex',
                marginBottom: 25,
                width: 673
            },
            slider: {
                display: 'flex',
                flexDirection: 'column',
                padding: 35,
                width: '100%'
            },
            preview: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 35,

            },

        },
    });
    const themePreview = useSelector(getThemePreview);
    const theme = React.useMemo(() => {
        return createMuiTheme(themePreview);
    }, [themePreview]);
    return <ThemeProvider theme={theme}>
        <div >
            <Typography variant="h1" gutterBottom>Shape</Typography>
            <Card style={styles.root}>
                <div style={styles.slider}>
                    <Typography variant="h5" gutterBottom>
                        Spacing Units
                    </Typography>
                    <Slider
                        value={spacing}
                        onChange={(e, v) => setSpacing(v)}
                        getAriaValueText={v => `${v}px`}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={[{ value: 1, label: '1px' }, { value: 16, label: '16px' }]}
                        min={1}
                        max={16}
                    />
                </div>
                <div style={styles.slider}>
                    <Typography variant="h5" gutterBottom>
                        Border Radius
                    </Typography>
                    <Slider
                        value={shape.borderRadius}
                        onChange={(e, v) => setShape({ borderRadius: v })}
                        getAriaValueText={v => `${v}px`}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks={[{ value: 0, label: '0px' }, { value: 20, label: '20px' }]}
                        min={0}
                        max={20}
                    />
                </div>
            </Card>            
        </div>
    </ThemeProvider>
}

export default Spacing;