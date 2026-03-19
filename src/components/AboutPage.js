import React from 'react';
import Typist from 'react-typist';
import TypistLoop from '../utils/TypistLoop';
import './AboutPage.css';

class AboutPage extends React.Component {
    render() { 
        return (
            <div className="AboutPage">
                <video autoPlay muted loop id="myVideo">
                    <source src={"/assets/video/rose-levis.mp4"} type="video/mp4"></source>
                </video>
                {/**<Typist>
                    <h1>Welcome to HaskellJacob's space</h1>
                </Typist> */}
                <TypistLoop interval={1000}>
                {[
                    'Jacob Chan develops efficent software',
                    'He likes generic and reusable code'
                ].map(text => <Typist key={text} startDelay={1000}><p>{text}</p></Typist>)}
                </TypistLoop>
            </div> 
        );
    }
}

export default AboutPage;