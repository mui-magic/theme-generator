import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

const ColorPicker = ({
    color,
    onColorChange,
    fullHeight = false,
    halfHeight = false,
    label = '',
    labelColor,
    mainColor
}) => {

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const isDarkMode = useSelector(s=>s.palette.type==="dark");
    const styles = reactCSS({
        'default': {
            color: {
                width: '46px',
                height: fullHeight ? '181px' : (halfHeight ? '83px' : '34px') ,
                borderRadius: '2px',
                background: mainColor || color,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: labelColor
            },
            swatch: {
                padding: '5px',
                marginBottom: '5px',
                background: isDarkMode ? '#424242' : '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });

    return (
        <div>
            <div style={styles.swatch} onClick={() => setDisplayColorPicker(!displayColorPicker)}>
                <div style={styles.color} >
                    <Typography variant="overline" style={{fontSize: 10}}>{label}</Typography>
                </div>
            </div>
            { displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setDisplayColorPicker(false)} />
                <SketchPicker color={color} onChange={onColorChange} />
            </div> : null}

        </div>
    )
    
}

export default ColorPicker