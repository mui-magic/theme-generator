import React from 'react';
import { Card,
    Button,
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
    RadioGroup,
    useTheme } from '@material-ui/core';
const LivePreview = () => {
    const theme = useTheme();
    return <Card style={{padding: theme.spacing(3)}}>
            <CardContent>
                <CardHeader title="Live Preview" />
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
                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Email me Moosletter™ updates" />
                            
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
                <Button fullWidth>Tip the Cow</Button>
            </CardActions>
        </Card>
}

export default LivePreview;