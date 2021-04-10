import React, { useState } from 'react'
import reactCSS from 'reactcss'
import {
    Card,
    CardMedia,
    Button
} from '@wootstrap/test2';
import { useDispatch, useSelector } from 'react-redux';


const fontList = {
    Roboto: {
        name: 'Roboto',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`,
    },
    OpenSans: {
        name: 'Open Sans',
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap" />`,
    },
    Lato: {
        name: 'Lato',
        fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />`,
    },
    Oswald: {
        name: 'Oswald',
        fontFamily: '"Oswald", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap" />`,
    },
    SourceSansPro: {
        name: 'Source Sans Pro',
        fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,700&display=swap" />`,
    },
    Raleway: {
        name: 'Raleway',
        fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap" />`,
    },
    PTSans: {
        name: 'PT Sans',
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,500,700&display=swap" />`,
    },
    Lora: {
        name: 'Lora',
        fontFamily: '"Lora", serif',
        link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:300,400,500,700&display=swap" />`,
    },
}

const Test = ({
    variant
}) => {



    const styles = reactCSS({
        'default': {
            root: {
                display: 'flex',
                marginBottom: 25
            },
            preview: {
                width: 424,
                padding: 35,
                backgroundColor: '#f1fafa'
            },
            dropdowns: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 0
            },
            sliders: {
                width: 250,
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

    return (

        <Card style={styles.root}>
            
            <CardMedia
                style={styles.preview}
            >
                <Button>Plz work</Button>
            </CardMedia>
        </Card>


    )

}

export default Test