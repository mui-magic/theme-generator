import React, { useState } from 'react';
import {
    Radio,
    RadioGroup,
    Card,
    CardMedia,
    FormLabel,
    FormControl,
    FormControlLabel,
    Button,
    Checkbox,
    IconButton,
    Fab,
    Typography,
    TextField,
    InputLabel,
    FormHelperText,
    Select,
    MenuItem,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import FolderIcon from '@material-ui/icons/Folder'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import reactCSS from 'reactcss';
import { useDispatch, useSelector } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { getThemePreview } from './utils.js'

const Components = () => {
    // ** BUTTONS
    // Button
        // variant - 'contained''outlined''text'
        // size - small, medium, large
        // color - 'primary''secondary'
        // disableRipple - bool
    // IconButton
        // size - small, medium (no large)
        // color - 'primary''secondary'
        // disableRipple - bool
    // Fab
        // size - small, medium, large
        // color - 'primary''secondary'
        // disableRipple - bool

    // ** INPUTS
    // InputBase
        // color - 'primary''secondary'
        // margin - 'dense''none'
    // InputLabel
        // color - 'primary''secondary'
        // margin - 'dense'
        // variant - 'filled''outlined''standard'
    // FilledInput
        // color
        // margin
    // OutlinedInput
        // color
        // margin
    // FormControl
        // color
        // margin
        // size 
        // variant
    // FormHelperText
        // margin
        // variant
    // TextField
        // color
        // margin
        // variant
        // size

    // ** TABLES AND LISTS
    // ListItem
        // dense
    // Table
        // size

    const dispatch = useDispatch();
    const themePreview = useSelector(getThemePreview);
    const theme = React.useMemo(() => {
            return createMuiTheme(themePreview);
    }, [themePreview]);

    const {
        buttonVariant,
        buttonColor,
        buttonSize,
        buttonRipple,
        inputVariant,
        inputColor,
        inputSize,
        tableIsDense
    } = useSelector(s=>s.meta)   
    const palette = useSelector(s=>s.palette)
    const setButtonVariant = (buttonVariant) => {
        dispatch({
            type: "SET_BUTTON_VARIANT",
            buttonVariant
        })
    }
    const setButtonColor = (buttonColor) => {
        dispatch({
            type: "SET_BUTTON_COLOR",
            buttonColor
        })
    }
    const setButtonSize = (buttonSize) => {
        dispatch({
            type: "SET_BUTTON_SIZE",
            buttonSize
        })
    }
    const setButtonRipple = (isRipple) => {
        dispatch({
            type: "SET_BUTTON_RIPPLE",
            isRipple
        })
    }
    const setInputVariant = (variant) => {
        dispatch({
            type: "SET_INPUT_VARIANT",
            variant
        })
    }
    const setInputColor = (color) => {
        dispatch({
            type: "SET_INPUT_COLOR",
            color
        })
    }
    const setInputSize = (size) => {
        dispatch({
            type: "SET_INPUT_SIZE",
            size
        })
    }
    const setTableDensity = (isDense) => {
        dispatch({
            type: "SET_TABLE_DENSITY",
            isDense
        })
    }

    

    const styles = reactCSS({
        'default': {
            root: {
                display: 'flex',
                marginBottom: 25,
                justifyContent: 'space-between',
                width: '100%'
            },
            controls: {
                padding: 35,
            },
            preview: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 35,
                backgroundColor: palette.type === "light" ? '#f1fafa' : '#17181a',
                alignItems: 'center'
            },

        },
    });
    return (<ThemeProvider theme={theme}>
        <div >
            <Typography variant="h1" gutterBottom>Components</Typography>
            <Card style={styles.root}>
                <div style={styles.controls}>
                    <Typography variant="h5" gutterBottom>
                        Buttons
                    </Typography>
                    <div style={{marginTop: 20}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Variant</FormLabel>
                            <RadioGroup aria-label="variant" name="variant1"
                                value={buttonVariant} 
                                onChange={(e)=>setButtonVariant(e.target.value)}
                            >
                                <FormControlLabel value="none" control={<Radio />} label="None" />
                                <FormControlLabel value="outlined" control={<Radio />} label="Outlined" />
                                <FormControlLabel value="contained" control={<Radio />} label="Contained" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Color</FormLabel>
                            <RadioGroup aria-label="color" name="color1"
                                value={buttonColor} 
                                onChange={(e)=>setButtonColor(e.target.value)}
                            >
                                <FormControlLabel value="none" control={<Radio />} label="None" />
                                <FormControlLabel value="primary" control={<Radio />} label="Primary" />
                                <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Size</FormLabel>
                            <RadioGroup aria-label="size" name="size1"
                                value={buttonSize} 
                                onChange={(e)=>setButtonSize(e.target.value)}
                            >
                                <FormControlLabel value="small" control={<Radio />} label="Small" />
                                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                <FormControlLabel value="large" control={<Radio />} label="Large" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Ripple</FormLabel>
                            <RadioGroup aria-label="ripple" name="ripple1"
                                value={buttonRipple} 
                                onChange={(e)=>setButtonRipple(e.target.value == "true")}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="On" />
                                <FormControlLabel value={false} control={<Radio />} label="Off" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <CardMedia
                    style={styles.preview}
                >
                    
                    <div>
                        <Button>Example</Button>
                    </div>
                    <div>
                        <IconButton>
                            <PhotoCamera />
                        </IconButton>
                    </div>
                    <div>
                        <Fab aria-label="add">
                            <AddIcon />
                        </Fab>
                    </div>
                    
                </CardMedia>
            </Card>
            <Card style={styles.root}>
                <div style={styles.controls}>
                    <Typography variant="h5" gutterBottom>
                        Inputs
                    </Typography>
                    <div style={{ marginTop: 20 }}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Variant</FormLabel>
                            <RadioGroup aria-label="variant" name="variant1"
                                value={inputVariant} 
                                onChange={(e)=>setInputVariant(e.target.value)}
                            >
                                <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                                <FormControlLabel value="filled" control={<Radio />} label="Filled" />
                                <FormControlLabel value="outlined" control={<Radio />} label="Outlined" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Color</FormLabel>
                            <RadioGroup aria-label="color" name="color1"
                                value={inputColor} 
                                onChange={(e)=>setInputColor(e.target.value)}
                            >
                                <FormControlLabel value="none" control={<Radio />} label="None" />
                                <FormControlLabel value="primary" control={<Radio />} label="Primary" />
                                <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Size</FormLabel>
                            <RadioGroup aria-label="size" name="size1"
                                value={inputSize} 
                                onChange={(e)=>setInputSize(e.target.value)}
                            >
                                <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                                <FormControlLabel value="dense" control={<Radio />} label="Dense" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <CardMedia
                    style={styles.preview}
                >
                    
                    <div>
                        <TextField label="Example"
                            defaultValue="Hello World"/>
                          
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel>Cow Stuff</InputLabel>
                            <Select
                                defaultValue="Bovine"
                                fullWidth
                            // onChange={e => setTypography({ ...typography, h1: { ...typography.h1, fontFamily: e.target.value } })}
                            >
                                <MenuItem value={'Bovine'}>Bovine</MenuItem>
                                <MenuItem value={'Heifer'}>Heifer</MenuItem>
                                <MenuItem value={'Steer'}>Steer</MenuItem>
                            </Select>
                            <FormHelperText>Some important helper text</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControlLabel
                            control={<Checkbox name="gilad" />}
                            label="Gilad Gray"
                        />
                    </div>
                    
                </CardMedia>
            </Card>
            <Card style={styles.root}>
                <div style={styles.controls}>
                    <Typography variant="h5" gutterBottom>
                        Lists and Tables
                    </Typography>
                    <div style={{ marginTop: 20 }}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Size</FormLabel>
                            <RadioGroup aria-label="size" name="size1"
                                value={tableIsDense} 
                                onChange={(e)=>setTableDensity(e.target.value=="true")}
                            >
                                <FormControlLabel value={false} control={<Radio />} label="Normal" />
                                <FormControlLabel value={true} control={<Radio />} label="Dense" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <CardMedia
                    style={styles.preview}
                >
                    
                    <div>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </List>

                    </div>
                    
                </CardMedia>
            </Card>
            
        </div>
    </ThemeProvider>
    );
}

export default Components;