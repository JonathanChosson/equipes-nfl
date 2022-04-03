import React from 'react';
import Header from '../components/Header';
import ListTeam from '../components/ListTeam';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Navigation />
            <ListTeam />
        </div>
    );
};

export default Home;