import React, { useState, useCallback } from 'react';
import {
    TextField,
    Typography,
    Card,
    Divider,
    CardMedia,
    Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { getThemePreview } from './utils.js'
import reactCSS from 'reactcss';

const Publish = () => {

    const dispatch = useDispatch();
    const palette = useSelector(s => s.palette);
    const themePreview = useSelector(getThemePreview);
    const theme = React.useMemo(() => {
        return createMuiTheme(themePreview);
    }, [themePreview]);


    const styles = reactCSS({
        'default': {
            root: {
                display: 'flex',
                marginBottom: 225
            },
            preview: {
                width: 274,
                padding: 35,
                backgroundColor: palette.type === "light" ? '#f1fafa' : '#17181a',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
            },
            dropdowns: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 0
            },
            sliders: {
                width: 400,
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

    const [themeName, setThemeName] = useState('')


    const publish = useCallback(() => {
        dispatch({
            type: "PUBLISH_LOADING"
        })
        fetch('https://wootstrap-swq47x73ta-ue.a.run.app/publish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ themePreview, name: themeName }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                dispatch({
                    type: "PUBLISH_SUCCESS"
                })
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch({
                    type: "PUBLISH_ERROR"
                })
            });
    }, [themePreview, themeName]);
    return <ThemeProvider theme={theme}>
        <div >
            <Typography variant="h1" gutterBottom>Publish!</Typography>

            <Card style={styles.root}>
                <div style={styles.sliders}>
                    <Typography variant="h5" >Magicians never reveal their secrets!</Typography>
                    <Typography variant="subtitle1" gutterBottom component="span">But Moogicians do...</Typography>
                    <Divider style={{marginBottom: theme.spacing(1)}}/>
                    <Typography variant="body1" component="div">Your personalized component library will be published to the NPM registry under the <pre style={{ display: 'inline-block' }}>@mui-magic</pre> scope. It's a clone of <pre style={{ display: 'inline-block' }}>@material-ui/core@4.11.3</pre>, so you get all the Material-UI bells and whistles without any of the styling headaches!</Typography>
                    
                </div>
                <CardMedia
                    style={styles.preview}
                >
                        <TextField value={themeName} onChange={(e)=>setThemeName(e.target.value)} fullWidth required id="theme-name" label="Theme Name" />
                        <Button onClick={() => publish()} fullWidth>Publish</Button>
                </CardMedia>
            </Card>
        </div>
    </ThemeProvider>
}

export default Publish;