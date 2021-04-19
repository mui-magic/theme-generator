import React, { useEffect } from 'react';
import reactCSS from 'reactcss';
import { useDispatch, useSelector } from 'react-redux'
import { Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    Card,
    CardMedia
} from '@material-ui/core';
import  ColorPicker from './colorPicker';
const Palette = () => {

    const dispatch = useDispatch(); 
    const palette = useSelector(s=>s.palette);
    
    const setColor = (type, variant, color) => {
        dispatch({
            type: 'SET_COLOR',
            colorType: type,
            variant,
            color
        })
    }

    const setAdvanced = (advanced) => {
        dispatch({
            type: 'SET_PALETTE_ADVANCED',
            advanced
        })
    }
    
    const setPaletteTheme = (theme) => {
        dispatch({
            type: 'SET_PALETTE_TYPE',
            theme
        })
    }

    const styles = reactCSS({
        'default': {
            colorColumn: { 
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                margin: 5
            },
            root: {
                display: 'flex',
                marginBottom: 25,
            },
            controls: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 35,
                paddingRight: 0
            },
            preview: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 35,
                paddingTop: 25,
                paddingLeft: 11,
                paddingRight: 11,
                backgroundColor: palette.type==="light" ? '#f1fafa' : '#17181a'
            },
        }
    });
    
    return (
        <div >
            <Typography variant="h1" gutterBottom>Palette</Typography>
            <Card style={styles.root}>
                <div style={styles.controls}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Theme</FormLabel>
                        <RadioGroup aria-label="gender" name="theme" value={palette.type} onChange={(e) => setPaletteTheme(e.target.value)}>
                            <FormControlLabel value="light" control={<Radio />} label="Light" />
                            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                        </RadioGroup>
                    </FormControl>
                    <FormControlLabel
                        style={{ alignSelf: 'flex-end' }}
                        control={
                            <Checkbox
                                checked={palette.advanced}
                                onChange={(e) => setAdvanced(e.target.checked)}
                                name="advanced"
                                color="primary"
                            />
                        }
                        label="Advanced"
                    />
                </div>
                <CardMedia
                    style={styles.preview}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline">Primary</Typography>
                            {
                                palette.advanced ? (<>
                                    <ColorPicker labelColor={palette.primary.contrastText} label='main' color={palette.primary.main} onColorChange={(c) => setColor('primary', 'main', c)} />
                                    <ColorPicker labelColor={palette.primary.contrastText} label='light' color={palette.primary.light} onColorChange={(c) => setColor('primary', 'light', c)} />
                                    <ColorPicker labelColor={palette.primary.contrastText} label='dark' color={palette.primary.dark} onColorChange={(c) => setColor('primary', 'dark', c)} />
                                    <ColorPicker mainColor={palette.primary.main} labelColor={palette.primary.contrastText} label='text' color={palette.primary.contrastText} onColorChange={(c) => setColor('primary', 'contrastText', c)} />
                                </>) : (
                                    <ColorPicker color={palette.primary.main} onColorChange={(c) => setColor('primary', 'main', c)} fullHeight />
                                )
                            }
                        </div>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline" style={{letterSpacing: 1}}>Secondary</Typography>
                            {
                                palette.advanced ? (<>
                                    <ColorPicker labelColor={palette.secondary.contrastText} label='main' color={palette.secondary.main} onColorChange={(c) => setColor('secondary', 'main', c)} />
                                    <ColorPicker labelColor={palette.secondary.contrastText} label='light' color={palette.secondary.light} onColorChange={(c) => setColor('secondary', 'light', c)} />
                                    <ColorPicker labelColor={palette.secondary.contrastText} label='dark' color={palette.secondary.dark} onColorChange={(c) => setColor('secondary', 'dark', c)} />
                                    <ColorPicker mainColor={palette.secondary.main} labelColor={palette.secondary.contrastText} label='text' color={palette.secondary.contrastText} onColorChange={(c) => setColor('secondary', 'contrastText', c)} />
                                </>) : (
                                    <ColorPicker color={palette.secondary.main} onColorChange={(c) => setColor('secondary', 'main', c)} fullHeight />
                                )
                            }
                            </div>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline">Error</Typography>
                            {
                                palette.advanced ? (<>
                                    <ColorPicker labelColor={palette.error.contrastText} label='main' color={palette.error.main} onColorChange={(c) => setColor('error', 'main', c)} />
                                    <ColorPicker labelColor={palette.error.contrastText} label='light' color={palette.error.light} onColorChange={(c) => setColor('error', 'light', c)} />
                                    <ColorPicker labelColor={palette.error.contrastText} label='dark' color={palette.error.dark} onColorChange={(c) => setColor('error', 'dark', c)} />
                                    <ColorPicker mainColor={palette.error.main} labelColor={palette.error.contrastText} label='text' color={palette.error.contrastText} onColorChange={(c) => setColor('error', 'contrastText', c)} />
                                </>) : (
                                    <ColorPicker color={palette.error.main} onColorChange={(c) => setColor('error', 'main', c)} fullHeight />
                                )
                            }
                            </div>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline">Warning</Typography>
                            {
                                palette.advanced ? (<>
                                    <ColorPicker labelColor={palette.warning.contrastText} label='main' color={palette.warning.main} onColorChange={(c) => setColor('warning', 'main', c)} />
                                    <ColorPicker labelColor={palette.warning.contrastText} label='light' color={palette.warning.light} onColorChange={(c) => setColor('warning', 'light', c)} />
                                    <ColorPicker labelColor={palette.warning.contrastText} label='dark' color={palette.warning.dark} onColorChange={(c) => setColor('warning', 'dark', c)} />
                                    <ColorPicker mainColor={palette.warning.main} labelColor={palette.warning.contrastText} label='text' color={palette.warning.contrastText} onColorChange={(c) => setColor('warning', 'contrastText', c)} />
                                </>) : (
                                    <ColorPicker color={palette.warning.main} onColorChange={(c) => setColor('warning', 'main', c)} fullHeight />
                                )
                            }
                            </div>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline">Info</Typography>
                            {
                                palette.advanced ? (<>
                                    <ColorPicker labelColor={palette.info.contrastText} label='main' color={palette.info.main} onColorChange={(c) => setColor('info', 'main', c)} />
                                    <ColorPicker labelColor={palette.info.contrastText} label='light' color={palette.info.light} onColorChange={(c) => setColor('info', 'light', c)} />
                                    <ColorPicker labelColor={palette.info.contrastText} label='dark' color={palette.info.dark} onColorChange={(c) => setColor('info', 'dark', c)} />
                                    <ColorPicker mainColor={palette.info.main} labelColor={palette.info.contrastText} label='text' color={palette.info.contrastText} onColorChange={(c) => setColor('info', 'contrastText', c)} />
                                </>) : (
                                    <ColorPicker color={palette.info.main} onColorChange={(c) => setColor('info', 'main', c)} fullHeight />
                                )
                            }
                        </div>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline">Success</Typography>
                            {
                                palette.advanced ? (<>
                                    <ColorPicker labelColor={palette.success.contrastText} label='main' color={palette.success.main} onColorChange={(c) => setColor('success', 'main', c)} />
                                    <ColorPicker labelColor={palette.success.contrastText} label='light' color={palette.success.light} onColorChange={(c) => setColor('success', 'light', c)} />
                                    <ColorPicker labelColor={palette.success.contrastText} label='dark' color={palette.success.dark} onColorChange={(c) => setColor('success', 'dark', c)} />
                                    <ColorPicker mainColor={palette.success.main} labelColor={palette.success.contrastText} label='text' color={palette.success.contrastText} onColorChange={(c) => setColor('success', 'contrastText', c)} />
                                </>) : (
                                    <ColorPicker color={palette.success.main} onColorChange={(c) => setColor('success', 'main', c)} fullHeight />
                                )
                            }
                        </div>
                        <div style={styles.colorColumn}>
                            <Typography variant="overline">Common</Typography>
                            <ColorPicker color={palette.common.black} onColorChange={(c) => setColor('common', 'black', c)} halfHeight />
                            <ColorPicker color={palette.common.white} onColorChange={(c) => setColor('common', 'white', c)} halfHeight />
                        </div>
                    </div>

                </CardMedia>
            </Card>
        </div>
)
}

export default Palette;