import React from 'react';
import LivePreview from './livePreview';
import Spacing from './spacing';
import Palette from './palette';
import Typography from './typography';
import Components from './components';
import reactCSS from 'reactcss';
import Publish from './publish';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';


import { useSelector } from 'react-redux'
import { getThemePreview } from './utils';

 
const Generator = () => {
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
    const themePreview = useSelector(getThemePreview);
    const theme = React.useMemo(() => {
        return createMuiTheme(themePreview);
    }, [themePreview]);
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
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
    </ThemeProvider>
}

export default Generator;