import React, { useState, useCallback, useEffect } from 'react';
import LivePreview from './livePreview';
import Spacing from './spacing';
import Palette from './palette';
import Typography from './typography';
import Components from './components';
import reactCSS from 'reactcss';
import Publish from './publish';
import { Card, Typography as MuiTypography } from '@material-ui/core';


import { useSelector } from 'react-redux'
import { getThemePreview } from './utils';

 
const Generator = () => {

    let [loading, setLoading] = useState(false);
    let [isSuccess, setIsSuccess] = useState(false);
    let [isError, setIsError] = useState(false);

    let [themeName, setThemeName] = useState('');
    let [theme, setTheme] = useState({
        overrides: {}, // if I find a reason to override CSS. border thickness maybe?
        palette: {
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
        props: {
            MuiButton: {
                variant: 'outlined'
            }
        },
        typography: {
            htmlFontSize: 16,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 300,
                fontSize: '6rem',
                lineHeight: 1.167,
                letterSpacing: '-0.01562em'
            },
            h2: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 300,
                fontSize: '3.75rem',
                lineHeight: 1.2,
                letterSpacing: '-0.00833em'
            },
            h3: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '3rem',
                lineHeight: 1.167,
                letterSpacing: '0em'
            },
            h4: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '2.125rem',
                lineHeight: 1.235,
                letterSpacing: '0.00735em'
            },
            h5: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '1.5rem',
                lineHeight: 1.334,
                letterSpacing: '0em'
            },
            h6: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 500,
                fontSize: '1.25rem',
                lineHeight: 1.6,
                letterSpacing: '0.0075em'
            },
            subtitle1: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.75,
                letterSpacing: '0.00938em'
            },
            subtitle2: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                lineHeight: 1.57,
                letterSpacing: '0.00714em'
            },
            body1: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.5,
                letterSpacing: '0.00938em'
            },
            body2: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: 1.43,
                letterSpacing: '0.01071em'
            },
            button: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                lineHeight: 1.75,
                letterSpacing: '0.02857em',
                textTransform: 'uppercase'
            },
            caption: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: 1.66,
                letterSpacing: '0.03333em'
            },
            overline: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: 2.66,
                letterSpacing: '0.08333em',
                textTransform: 'uppercase'
            }
        },
        spacing: 8,
        shape: { borderRadius: 4 },
    });

    const styles = reactCSS({
        'default': {
            generatorRoot: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: 35
            },
            generatorSection: {
                paddingTop: '280px'
            },
            livePreview: {
                paddingTop: '280px'
            }
        }
    })

    return <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <div style={styles.generatorRoot}>

            <div style={styles.generatorSection}>
                <Palette />
            </div>
            <div style={styles.generatorSection}>
                <Spacing />
            </div>
            <div style={styles.generatorSection}>
                <Components />
            </div>
            <div style={styles.generatorSection}>
                <Typography />
            </div>
            <div style={styles.generatorSection}>
                <Publish />
            </div>
          
        </div>
        <div style={styles.livePreview}>
            <div style={{ display: 'block', position: 'sticky', top: '20px', marginLeft: '50px' }}>
                <LivePreview />
            </div>
        </div>
    </div>
    
    
    
}

export default Generator;