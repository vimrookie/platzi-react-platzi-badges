import React from 'react';
import './styles/Home.css';
import astronauts from '../images/astronauts.svg'
import platziConf from '../images/platziconf-logo.svg'

function Home() {
    return (
        <div className="Home">
            <div className="col-6 Home__col">
                <img src={platziConf} alt="platzi-conf" />
                <h1>PRINT YOUR BADGES</h1>
                <h4>The easiest way to manage your
conference</h4>
            </div>
            <div className="col-6 Home__col">
                <img width="80%" src={astronauts} alt="astronauts" />
            </div>
        </div>
    )
}

export default Home;