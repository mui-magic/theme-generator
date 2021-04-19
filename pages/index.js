import Generator from '../components/generator.jsx';
import { Typography } from '@material-ui/core';

export default function Home({pageProps}) {
  return (
    <div>
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '90vh'
      }}>
        <h1 style={{
          fontFamily: '"Itim", cursive',
          color: 'tomato',
          fontWeight: 800,
          fontSize: 94,
          margin: '0 auto'
        }}>
          MUI Magic
        </h1>
        <h2 style={{
          fontWeight: 500,
          textAlign: 'center',
          padding: 20,
          lineHeight: 3
        }}>
          Publish a custom Material-UI theme and <code style={{
              backgroundColor: 'floralwhite',
              color: 'darkslategrey',
              padding: '8px',
              borderRadius: '5px',
              fontWeight: 900,
              fontSize: 18
          }}>import Components from '@mui-magic/your-theme'</code> in your React app
        </h2>
       
<a className="github-button" href="https://github.com/mui-magic/mui-magic" data-size="large" data-show-count="true" aria-label="Star mui-magic/mui-magic on GitHub">Star</a>
      </header>
      <main>
        <Generator />
      </main>
  
    </div>
  )
}
