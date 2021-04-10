import React, { useState } from 'react';
import { Typography as MuiTypography,
    Button} from '@material-ui/core';
import reactCSS from 'reactcss';
import FontBlock from './fontBlock';
import { useDispatch, useSelector } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { getThemePreview } from './utils.js'


const Typography = () => {
    const styles = reactCSS({
        'default': {
            blockWrapper: {
                display: 'flex',
                minWidth: 400,
                maxWidth: 600,
            }
        }
    });
    const themePreview = useSelector(getThemePreview);
    const theme = React.useMemo(() => {
        return createMuiTheme(themePreview);
    }, [themePreview]);

    return <ThemeProvider theme={theme}>
        <div >
            <MuiTypography variant="h1" gutterBottom>Typography</MuiTypography>
            <FontBlock variant="h1">
                
                    <MuiTypography variant="h1">h1. <br />Heading</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="h2">
                
                    <MuiTypography variant="h2">h2. <br />Heading</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="h3">
                
                    <MuiTypography variant="h3">h3. <br />Heading</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="h4">
                
                    <MuiTypography variant="h4">h4. <br />Heading</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="h5">
                
                    <MuiTypography variant="h5">h5. <br />Heading</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="h6">
                
                    <MuiTypography variant="h6">h6. <br />Heading</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="subtitle1">
                
                    <MuiTypography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="subtitle2">
                
                    <MuiTypography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="body1">
                
                    <MuiTypography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="body2">
                
                    <MuiTypography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="button">
                
                    <Button type="primary" variant="contained">
                        button text
                    </Button>
                
            </FontBlock>
            <FontBlock variant="caption">
                
                    <MuiTypography variant="caption">caption text</MuiTypography>
                
            </FontBlock>
            <FontBlock variant="overline">
                
                    <MuiTypography variant="overline">overline text</MuiTypography>
                
            </FontBlock>
        </div>
    </ThemeProvider>
}

export default Typography;