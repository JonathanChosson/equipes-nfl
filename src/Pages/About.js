import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation'
import '../style/About.css'

const about = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div className='div'>
                <p className='div__p'>
                Ce site a été créée en Avril 2022 par Chosson Jonathan avec l’envie de rendre plus accessible la liste des équipes de NFL.
                </p>
                <p className='div__p'>
                Source : <a href="https://www.espn.com/apis/devcenter/io-docs.html" >ESPN API</a>
                </p>
            </div>
            <div className='div'>
                <p className='div__p--link'>
                    <a className='div__p--link__a' href="https://github.com/JonathanChosson" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github-square"></i>
                    </a>
                </p>
                <p className='div__p--link'>
                    <a className='div__p--link__a' href="https://www.linkedin.com/in/jonathan-chosson-9a47291b8/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default about;