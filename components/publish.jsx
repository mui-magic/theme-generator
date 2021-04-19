import React, { useState, useCallback } from 'react';
import {
    TextField,
    Typography,
    Card,
    Divider,
    CardMedia,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    LinearProgress
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, useMediaQuery } from '@material-ui/core';
import { getFontLinkList, getThemePreview } from './utils.js';
import reactCSS from 'reactcss';
import validateNPM from 'validate-npm-package-name';

const Publish = () => {

    const dispatch = useDispatch();
    const palette = useSelector(s => s.palette);
    const fontList = useSelector(getFontLinkList);
    const themePreview = useSelector(getThemePreview);
    const theme = useTheme();
    const [modalOpen, setModalOpen] = useState(false)
    const [themeName, setThemeName] = useState('')
    const [status, setStatus] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [tag, setTag] = useState('');
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    
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
            sliders: {
                width: 400,
                padding: 35,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            },
        },
    });

    const publish = useCallback(() => {
        let { validForNewPackages, warnings, errors } = validateNPM(themeName);
        if (!validForNewPackages || (['core','styles','system','types','utils'].indexOf(themeName) > -1)) {
            // invalid name
            console.log('INVALID')
            setIsInvalid(true);
            return;
        }

        setStatus('loading')
        setModalOpen(true);
        fetch('https://mui-magic-swq47x73ta-uc.a.run.app/publish', {
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
                setTag(data.packageTag);
                setStatus('success');
            })
            .catch((error) => {
                console.error('Error:', error);
                setStatus('error')
            });
    }, [themePreview, themeName]);

    return <div >
            <Typography variant="h1" gutterBottom>Publish</Typography>

            <Card style={styles.root}>
                <div style={styles.sliders}>
                    <Typography variant="h5" >Magicians never reveal their secrets!</Typography>
                    <Typography variant="subtitle1" gutterBottom component="span">But Moogicians do...</Typography>
                    <Divider style={{marginBottom: theme.spacing(1)}}/>
                <Typography variant="body1" component="div">Your personalized component library will be published to the NPM registry under the <code style={{
                    backgroundColor: 'floralwhite',
                    color: 'darkslategrey',
                    padding: '4px',
                    borderRadius: '5px',
                    display: 'inline-block',
                    lineHeight: 1
                }}>@mui-magic</code> scope. It's a clone of <code style={{
                    backgroundColor: 'floralwhite',
                    color: 'darkslategrey',
                    padding: '4px',
                    borderRadius: '5px',
                    display: 'inline-block',
                    lineHeight: 1
                }}>@material-ui/core@4.11.3</code>, so you get all the Material-UI bells and whistles without any of the styling headaches!</Typography>
                    
                </div>
                <CardMedia
                    style={styles.preview}
                >
                        <TextField error={isInvalid} helperText={isInvalid && 'Not a valid name'} value={themeName} onChange={(e)=>{setThemeName(e.target.value); if (isInvalid){setIsInvalid(false);}  }} fullWidth required id="theme-name" label="Theme Name" />
                        <Button onClick={() => publish()} fullWidth>Publish</Button>
                </CardMedia>
            </Card>
            <Dialog
                fullScreen={fullScreen}
                disableBackdropClick
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
            <DialogTitle id="responsive-dialog-title">{(status === 'loading') ? "Publishing..." : ( (status == 'error')? "Hmm...": "Published!")}</DialogTitle>
            <DialogContent style={{ minWidth: '600px' }}>
               
                { (status === 'loading') && (<>
                    <DialogContentText>
                        Reticulating Splines...
                    </DialogContentText>
                    <LinearProgress />
                </>)
                }
                {(status === 'success') && (<>
                    <DialogContentText>
                        1) Install your theme
                        <code style={{
                            backgroundColor: 'floralwhite',
                            color: 'darkslategrey',
                            padding: '8px',
                            borderRadius: '5px',
                            display: 'block',
                            lineHeight: 1.5,
                            fontWeight: 800,
                            fontSize: 16
                        }}>$ npm install @mui-magic/{themeName}@{tag}</code>
                    </DialogContentText>
                    <DialogContentText>
                        2) Add these fonts to your webpage
                        <code style={{
                            backgroundColor: 'floralwhite',
                            color: 'darkslategrey',
                            padding: '8px',
                            borderRadius: '5px',
                            display: 'block',
                            lineHeight: 1.5,
                            fontWeight: 800,
                            fontSize: 16
                        }}>{fontList.map(f => (
                            <div key={f}>
                                {f}
                            </div>
                        ))}</code>
                    </DialogContentText>
                    <DialogContentText>
                        3) Use your published theme as if it were @material-ui/core
                        <code style={{
                            backgroundColor: 'floralwhite',
                            color: 'darkslategrey',
                            padding: '8px',
                            borderRadius: '5px',
                            display: 'block',
                            lineHeight: 1.5,
                            fontWeight: 800,
                            fontSize: 16
                        }}>{`import { Button } from '@mui-magic/${themeName}'`}</code>
                    </DialogContentText>
                </>)
                }
                {(status === 'error') && (<>
                    <DialogContentText>
                        Something went wrong
                    </DialogContentText>
                </>)
                }
                
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setModalOpen(false)} variant="outlined" color="primary">
                        close
                    </Button>
                    
                </DialogActions>
            </Dialog>
        </div>

}

export default Publish;