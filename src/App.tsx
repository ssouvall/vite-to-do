import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import {createTheme, MantineProvider, MantineThemeOverride, rem} from '@mantine/core';
import {Header} from "./components/layout/Header";

function App() {
  const [count, setCount] = useState(0)
    const obj = {
        colors: {
            // Add your color
            deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            // or replace default theme color
            blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
        },

        shadows: {
            md: '1px 1px 3px rgba(0, 0, 0, .25)',
            xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        },

        headings: {
            fontFamily: 'Roboto, sans-serif',
            sizes: {
                h1: { fontSize: rem(36) },
            },
        },
    } as MantineThemeOverride;
    const theme = createTheme(obj);
  return (
    <MantineProvider
        theme={theme}
    >
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </MantineProvider>
  )
}

export default App
