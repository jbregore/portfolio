import React, { useEffect } from 'react';
import { Paper } from '@mui/material';

import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "../utils/theme";

import { useSelector, useDispatch } from "react-redux";
import { getTheme } from "../redux/actions/uiAction";

// components 
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    const ui = useSelector((state) => state.ui);
    const THEME = createTheme(theme(ui.isDarkMode));

    const dispatch = useDispatch();

    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'
        },
    }));

    useEffect(() => {
        dispatch(getTheme());
    }, [dispatch]);

    return (
        <ThemeProvider theme={THEME}>
            <Paper
                style={{ paddingBottom: 100, position: "relative" }}
            >
                <Navigation />

                <Hero />

                <About Root={Root}/>

                <Skills Root={Root}/>

                <Projects Root={Root}/>

                <Contact Root={Root}/>

            </Paper>
        </ThemeProvider>
    );
}

export default Home;
