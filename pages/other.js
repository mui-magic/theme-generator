import Head from 'next/head'
import Generator from '../components/generator.jsx';
import Test from '../components/test.jsx';

export default function Home({ pageProps }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,500,700&display=swap" />`,
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:300,400,500,700&display=swap" />`,
      </Head>

            <main>
                
                <h1>
                    <a href="https://nextjs.org">Mui Magic</a>
                </h1>

                <p>
                    Design your Material-UI theme here and <code>import Components from '@mui-magic/your-theme'</code> in your React app
        </p>

      
            </main>

            <Test variant="h1">
                Yo
            </Test>

        </div>
    )
}
