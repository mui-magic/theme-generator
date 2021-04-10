import React from 'react';
import { Card,
    Button,
    ThemeProvider,
    Typography,
    createMuiTheme,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Checkbox,
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { getThemePreview } from './utils.js'
const LivePreview = () => {
    
    const themePreview = useSelector(getThemePreview);
    const theme = React.useMemo(() => {
        return createMuiTheme(themePreview);
    }, [themePreview]);

    return <ThemeProvider theme={theme}>
        <Card style={{padding: theme.spacing(3)}}>
            <CardContent>
                <CardHeader title="Tip the Cow" subheader="Magic ain't easy!"/>
                <Divider style={{ marginBottom: theme.spacing(2)}}/>
                
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Amount</FormLabel>
                        <RadioGroup aria-label="amount" name="Amount" row
                        // value={inputColor}
                        // onChange={(e) => setInputColor(e.target.value)}
                        >
                            <FormControlLabel value="one" control={<Radio />} label="$1" />
                            <FormControlLabel value="five" control={<Radio />} label="$5" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Payment method</FormLabel>
                        <RadioGroup aria-label="method" name="Payment method" row
                        // value={inputColor}
                        // onChange={(e) => setInputColor(e.target.value)}
                        >
                            <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                            <FormControlLabel value="card" control={<Radio />} label="Credit or debit card" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Subscribe</FormLabel>
                        <RadioGroup aria-label="method" name="Payment method" row
                        // value={inputColor}
                        // onChange={(e) => setInputColor(e.target.value)}
                        >
                            <FormControlLabel value="paypal" control={<Checkbox />} label="Email me Moosletter™ updates" />
                            
                        </RadioGroup>
                    </FormControl>
                </div>
                <Divider style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }} />
                <TextField style={{ marginTop: theme.spacing(1) }} fullWidth required id="email" label="Email" />
                <TextField style={{ marginTop: theme.spacing(1) }} fullWidth required id="card-number" label="Card Number" />
                <div>
                    <TextField style={{ marginTop: theme.spacing(1) }} required id="expiration" label="Exp" />
                    <TextField style={{ marginTop: theme.spacing(1) }}required id="cvv" label="cvv" />
                </div>
            </CardContent>
            <Divider style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}/>
            <CardActions>
                <Button fullWidth>Submit</Button>
            </CardActions>
        </Card>
    </ThemeProvider>
}

export default LivePreview;