import './App.css'
import '@mantine/core/styles.css';
import {createTheme, MantineProvider, MantineThemeOverride, rem} from '@mantine/core';
import {Header} from "./components/layout/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/Home";
import ErrorPage from "./components/error/ErrorPage";
import {DashboardShell} from "./components/layout/DashboardShell";

function App() {
    const obj = {
        colors: {// Add your color
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
                h1: {fontSize: rem(36)},
            },
        },
    } as MantineThemeOverride;
    const theme = createTheme(obj);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
    ]);

    return (
        <MantineProvider
            theme={theme}
        >
            <DashboardShell>
                <RouterProvider router={router} />
            </DashboardShell>
        </MantineProvider>
    )
}

export default App
