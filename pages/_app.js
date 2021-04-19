import Head from 'next/head'
import { Provider } from 'react-redux';
import { useStore, } from '../store';

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (<>
        <Head>
            <title>MUI Magic | Material UI Theme Generator</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Itim&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,500,700&display=swap" />`,
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:300,400,500,700&display=swap" />`,
            <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <Provider store={store}>
                <Component {...pageProps} /> 
      </Provider>
    </>
        
    )
}