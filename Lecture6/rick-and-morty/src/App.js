import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, IconButton, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Home from './pages/Home';
import HeroesList from './pages/Heroes';
import CharacterDetails from './pages/CharacterDetails';
import About from './pages/About';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            My App
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/heroes">Heroes</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <IconButton onClick={toggleDarkMode} color="inherit">
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <div style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/heroes" element={<HeroesList />} />
                        <Route path="/heroes/:id" element={<CharacterDetails />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;