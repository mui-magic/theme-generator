import { fontList } from './fontBlock';

export function getThemePreview(state) {
    return {
        overrides: {
            ...state.overrides,
        },
        palette: {
            common: state.palette.common,
            type: state.palette.type,
            primary: state.palette.primary,
            secondary: state.palette.secondary,
            error: state.palette.error,
            warning: state.palette.warning,
            info: state.palette.info,
            success: state.palette.success,
        },
        props: state.props,
        typography: {
            h1: {
                fontFamily: state.typography.h1.fontFamily,
                fontWeight: state.typography.h1.fontWeight,
                fontSize: state.typography.h1.fontSize,
                lineHeight: state.typography.h1.lineHeight,
                textTransform: state.typography.h1.textTransform,
            },
            h2: {
                ...state.typography.h2,
                fontFamily: state.typography.h2.fontFamily,
                fontWeight: state.typography.h2.fontWeight,
                fontSize: state.typography.h2.fontSize,
                lineHeight: state.typography.h2.lineHeight,
                textTransform: state.typography.h2.textTransform,
            },
            h3: {
                ...state.typography.h3,
                fontFamily: state.typography.h3.fontFamily,
                fontWeight: state.typography.h3.fontWeight,
                fontSize: state.typography.h3.fontSize,
                lineHeight: state.typography.h3.lineHeight,
                textTransform: state.typography.h3.textTransform,
            },
            h4: {
                ...state.typography.h4,
                fontFamily: state.typography.h4.fontFamily,
                fontWeight: state.typography.h4.fontWeight,
                fontSize: state.typography.h4.fontSize,
                lineHeight: state.typography.h4.lineHeight,
                textTransform: state.typography.h4.textTransform,
            },
            h5: {
                ...state.typography.h5,
                fontFamily: state.typography.h5.fontFamily,
                fontWeight: state.typography.h5.fontWeight,
                fontSize: state.typography.h5.fontSize,
                lineHeight: state.typography.h5.lineHeight,
                textTransform: state.typography.h5.textTransform,
            },
            h6: {
                ...state.typography.h6,
                fontFamily: state.typography.h6.fontFamily,
                fontWeight: state.typography.h6.fontWeight,
                fontSize: state.typography.h6.fontSize,
                lineHeight: state.typography.h6.lineHeight,
                textTransform: state.typography.h6.textTransform,
            },
            subtitle1: {
                ...state.typography.subtitle1,
                fontFamily: state.typography.subtitle1.fontFamily,
                fontWeight: state.typography.subtitle1.fontWeight,
                fontSize: state.typography.subtitle1.fontSize,
                lineHeight: state.typography.subtitle1.lineHeight,
                textTransform: state.typography.subtitle1.textTransform,
            },
            subtitle2: {
                ...state.typography.subtitle2,
                fontFamily: state.typography.subtitle2.fontFamily,
                fontWeight: state.typography.subtitle2.fontWeight,
                fontSize: state.typography.subtitle2.fontSize,
                lineHeight: state.typography.subtitle2.lineHeight,
                textTransform: state.typography.subtitle2.textTransform,
            },
            body1: {
                ...state.typography.body1,
                fontFamily: state.typography.body1.fontFamily,
                fontWeight: state.typography.body1.fontWeight,
                fontSize: state.typography.body1.fontSize,
                lineHeight: state.typography.body1.lineHeight,
                textTransform: state.typography.body1.textTransform,
            },
            body2: {
                ...state.typography.body2,
                fontFamily: state.typography.body2.fontFamily,
                fontWeight: state.typography.body2.fontWeight,
                fontSize: state.typography.body2.fontSize,
                lineHeight: state.typography.body2.lineHeight,
                textTransform: state.typography.body2.textTransform,
            },
            button: {
                ...state.typography.button,
                fontFamily: state.typography.button.fontFamily,
                fontWeight: state.typography.button.fontWeight,
                fontSize: state.typography.button.fontSize,
                lineHeight: state.typography.button.lineHeight,
                textTransform: state.typography.button.textTransform,
            },
            caption: {
                ...state.typography.caption,
                fontFamily: state.typography.caption.fontFamily,
                fontWeight: state.typography.caption.fontWeight,
                fontSize: state.typography.caption.fontSize,
                lineHeight: state.typography.caption.lineHeight,
                textTransform: state.typography.caption.textTransform,
            },
            overline: {
                ...state.typography.overline,
                fontFamily: state.typography.overline.fontFamily,
                fontWeight: state.typography.overline.fontWeight,
                fontSize: state.typography.overline.fontSize,
                lineHeight: state.typography.overline.lineHeight,
                textTransform: state.typography.overline.textTransform,
            }
        },
        spacing: state.spacing,
        shape: state.shape
    }
}


export function getFontLinkList(state) {

    let selectedFonts = Object.values(Object.entries(state.typography).reduce((acc, [variant, {fontFamily}])=>{
        return {
            ...acc,
            [fontFamily]: fontFamily
        }
    }, {}))
    return Object.entries(fontList).filter(([font, { fontFamily}]) => {
        return selectedFonts.indexOf(fontFamily) > -1
    }).map(([font, {link}]) => link)

}