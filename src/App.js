import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import Login from './components/Login';
import Profile from './components/Profile';

class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        );
    }
}

export default App;

