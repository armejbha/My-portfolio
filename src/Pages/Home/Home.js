import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;