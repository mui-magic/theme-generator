const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
    const fontList = {
        Roboto: {
            name: 'Roboto',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        },
        OpenSans: {
            name: 'Open Sans',
            fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap'
        },
        Lato: {
            name: 'Lato',
            fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap'
        },
        Oswald: {
            name: 'Oswald',
            fontFamily: '"Oswald", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap'
        },
        SourceSansPro: {
            name: 'Source Sans Pro',
            fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,700&display=swap'
        },
        Raleway: {
            name: 'Raleway',
            fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap'
        },
        PTSans: {
            name: 'PT Sans',
            fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=PT+Sans:300,400,500,700&display=swap'
        },
        Lora: {
            name: 'Lora',
            fontFamily: '"Lora", serif',
            link: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:300,400,500,700&display=swap" />`,
            href: 'https://fonts.googleapis.com/css?family=Lora:300,400,500,700&display=swap'
        },
    }


    Object.values(fontList).forEach((font)=>{
        const link = document.createElement('link')
        link.href = font.href
        link.rel = 'stylesheet'
        document.head.appendChild(link)
        const fontObserver = new FontFaceObserver(font.name)
        fontObserver.load().then(() => {
            console.log(font.name + ' has loaded');
        })
    })

}

export default Fonts