import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {lighten, darken} from '@material-ui/core/styles'
let store

const initialState = {
    name: '',
    overrides: {}, 
    palette: {
        advanced: false, 
        common: { black: '#000', white: '#fff' },
        type: 'light',
        primary: {
            light: '#7986cb',
            main: '#3f51b5',
            dark: '#303f9f',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#fff'
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff'
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
    },
    props: {},
    typography: {
        h1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.167,
            textTransform: 'none',
            advanced: false
        },
        h2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: '3.75rem',
            lineHeight: 1.2,
            textTransform: 'none',
            advanced: false
        },
        h3: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: 1.167,
            textTransform: 'none',
            advanced: false
        },
        h4: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.235,
            textTransform: 'none',
            advanced: false
        },
        h5: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: 1.334,
            textTransform: 'none',
            advanced: false
        },
        h6: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
            textTransform: 'none',
            advanced: false
        },
        subtitle1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.75,
            textTransform: 'none',
            advanced: false
        },
        subtitle2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            textTransform: 'none',
            advanced: false
        },
        body1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            textTransform: 'none',
            advanced: false
        },
        body2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            textTransform: 'none',
            advanced: false
        },
        button: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            textTransform: 'uppercase',
            advanced: false
        },
        caption: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            textTransform: 'none',
            advanced: false
        },
        overline: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2.66,
            textTransform: 'uppercase',
            advanced: false
        }
    },
    spacing: 8,
    shape: { 
        borderRadius: 4 
    },
    meta: {
        buttonVariant: 'none',
        buttonColor: 'none',
        buttonSize: 'medium',
        buttonRipple: true,
        inputVariant: 'standard',
        inputColor: 'none',
        inputSize: 'normal',
        tableIsDense: false
    }
}



const buildProps = ({
    buttonVariant,
    buttonColor,
    buttonSize,
    buttonRipple,
    inputVariant,
    inputColor,
    inputSize,
    tableIsDense
}) => {
    let props = {
        MuiButton: {},
        MuiButtonBase: {},
        MuiFilledInput: {},
        MuiFormControl: {},
        MuiFormHelperText: {},
        MuiIconButton: {},
        MuiInputBase: {},
        MuiInputLabel: {},
        MuiListItem: {},
        MuiOutlinedInput: {},
        MuiFab: {},
        MuiTable: {},
        MuiTextField: {},
        MuiToolbar: {},
        MuiSelect: {}
    };
    // ** BUTTON VARIANT
    if (buttonVariant !== 'none') {
        props.MuiButton.variant = buttonVariant;
    }
    // ** BUTTON COLOR
    if (buttonColor !== 'none') {
        props.MuiButton.color = buttonColor;
        props.MuiIconButton.color = buttonColor;
        props.MuiFab.color = buttonColor;
    }
    // ** BUTTON SIZE
    if (buttonSize !== 'medium') {
        props.MuiButton.size = buttonSize;
        if (buttonSize !== 'large') { props.MuiIconButton.size = buttonSize; }
        props.MuiFab.size = buttonSize;
    }
    // ** BUTTON RIPPLE
    if (!buttonRipple) {
        props.MuiButton.disableRipple = true;
        props.MuiFab.disableRipple = true;
        props.MuiIconButton = true;
        props.MuiButtonBase.disableRipple = true;
    }

    // ** INPUT VARIANT
    props.MuiInputLabel.variant = inputVariant;
    props.MuiFormControl.variant = inputVariant;
    props.MuiFormHelperText.variant = inputVariant;
    props.MuiTextField.variant = inputVariant;
    props.MuiSelect.variant = inputVariant;
    
    // ** INPUT COLOR
    if (inputColor !== 'none') {
        props.MuiInputBase.color = inputColor;
        props.MuiInputLabel.color = inputColor;
        props.MuiFilledInput.color = inputColor;
        props.MuiOutlinedInput.color = inputColor;
        props.MuiFormControl.color = inputColor;
        props.MuiTextField.color = inputColor;
    }

    // ** INPUT SIZE
    if (inputSize !== 'normal') {
        props.MuiInputBase.margin = 'dense';
        props.MuiInputLabel.margin = 'dense';
        props.MuiFilledInput.margin = 'dense';
        props.MuiOutlinedInput.margin = 'dense';
        props.MuiFormControl.margin = 'dense';
        props.MuiTextField.margin = 'dense';       
    }

    // ** TABLES AND LISTS DENSITY
    if (tableIsDense) {
        props.MuiTable = {
            size: 'small'
        }
        props.MuiListItem = {
            dense: true
        }
    }

    // fixing Typography breaking change: https://github.com/mui-org/material-ui/issues/15607
    props.MuiTypography = {
        display: 'block'
    }

    let finalProps = Object.entries(props).reduce((acc, [key, value]) => {
        if (Object.keys(value).length > 0) {
            return {
                ...acc,
                [key]: value
            }
        }
        return acc;
    }, {})
    
    return finalProps;
}

const buildOverrides = (meta) => {
    if (meta.buttonSize === "small") {
        return {
            MuiIconButton: {
                sizeSmall: {
                    // Adjust spacing to reach minimal touch target hitbox
                    marginLeft: 4,
                    marginRight: 4,
                    padding: 12,
                },
            },
        }
    }
    return {}
}

const reducer = (state = initialState, action) => {
    const {
        palette,
        typography
    } = state;
    let newMeta;
    let newProps;
    let newOverrides;
    switch (action.type) {
        case 'SET_COLOR':
            if (action.colorType === 'common' || state.palette.advanced) {
                return {
                    ...state,
                    palette: {
                        ...palette,
                        [action.colorType]: {
                            ...palette[action.colorType],
                            [action.variant]: action.color.hex
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    palette: {
                        ...palette,
                        [action.colorType]: {
                            ...palette[action.colorType],
                            main: action.color.hex,
                            light: lighten(action.color.hex, 0.2),
                            dark: darken(action.color.hex, 0.2),
                        }
                    }
                }
            }
            
        case 'SET_PALETTE_ADVANCED':
            return {
                ...state,
                palette: {
                    ...palette,
                    advanced: action.advanced
                }
            }
        case 'SET_PALETTE_TYPE':
            return {
                ...state,
                palette: {
                    ...palette,
                    type: action.theme
                }
            }
        case 'SET_SPACING':
            return {
                ...state,
                spacing: action.spacing
            }
        case 'SET_SHAPE':
            return {
                ...state,
                shape: action.shape
            }
        case 'SET_FONT_FAMILY':
            return {
                ...state,
                typography: {
                    ...typography,
                    [action.variant]: {
                        ...typography[action.variant],
                        fontFamily: action.fontFamily
                    }
                }
            }
        case 'SET_TEXT_TRANSFORM':
            return {
                ...state,
                typography: {
                    ...typography,
                    [action.variant]: {
                        ...typography[action.variant],
                        textTransform: action.textTransform
                    }
                }
            }
        case 'SET_FONT_WEIGHT':
            return {
                ...state,
                typography: {
                    ...typography,
                    [action.variant]: {
                        ...typography[action.variant],
                        fontWeight: action.fontWeight
                    }
                }
            }
        case 'SET_FONT_SIZE':
            return {
                ...state,
                typography: {
                    ...typography,
                    [action.variant]: {
                        ...typography[action.variant],
                        fontSize: action.fontSize
                    }
                }
            }
        case 'SET_LINE_HEIGHT':
            return {
                ...state,
                typography: {
                    ...typography,
                    [action.variant]: {
                        ...typography[action.variant],
                        lineHeight: action.lineHeight
                    }
                }
            }
        case 'SET_FONT_ADVANCED':
            return {
                ...state,
                typography: {
                    ...typography,
                    [action.variant]: {
                        ...typography[action.variant],
                        advanced: action.advanced
                    }
                }
            }
        case 'SET_BUTTON_VARIANT':
            newMeta = {
                ...state.meta,
                buttonVariant: action.buttonVariant
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_BUTTON_COLOR':
            newMeta = {
                ...state.meta,
                buttonColor: action.buttonColor
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_BUTTON_SIZE':
            newMeta = {
                ...state.meta,
                buttonSize: action.buttonSize
            }
            newProps = buildProps(newMeta);
            newOverrides = buildOverrides(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta,
                overrides: newOverrides
            }
        case 'SET_BUTTON_RIPPLE':
            newMeta = {
                ...state.meta,
                buttonRipple: action.isRipple
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_INPUT_VARIANT':
            newMeta = {
                ...state.meta,
                inputVariant: action.variant
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_INPUT_COLOR':
            newMeta = {
                ...state.meta,
                inputColor: action.color
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_INPUT_SIZE':
            newMeta = {
                ...state.meta,
                inputSize: action.size
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_TABLE_DENSITY':
            newMeta = {
                ...state.meta,
                tableIsDense: action.isDense
            }
            newProps = buildProps(newMeta);
            return {
                ...state,
                props: newProps,
                meta: newMeta
            }
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}