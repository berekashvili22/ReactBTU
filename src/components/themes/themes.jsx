import { useState } from 'react';
import './themes.css';

function Themes() {

    const [themeColor, setThemeColor] = useState('#fefefe');

    // set bg color functions
    const setBgred = () => {
        setThemeColor('red')
    };
    const setBgblue = () => {
        setThemeColor('blue')
    };
    const setBgyellow = () => {
        setThemeColor('yellow')
    };
    const setBgwhite = () => {
        setThemeColor('white')
    };
    const setBgorange = () => {
        setThemeColor('orange')
    };
    const setBgpurple = () => {
        setThemeColor('purple')
    };
    const setBgwheat = () => {
        setThemeColor('wheat')
    };
    const setBggreen = () => {
        setThemeColor('green')
    };


    return (
        <div className='theme-wrapper'>
            <div className='colorBtn-wrapper'>
                <div className="colorBtn red" onClick={setBgred}></div>
                <div className="colorBtn blue" onClick={setBgblue}></div>
                <div className="colorBtn yellow" onClick={setBgyellow}></div>
                <div className="colorBtn white" onClick={setBgwhite}></div>
                <div className="colorBtn orange" onClick={setBgorange}></div>
                <div className="colorBtn purple" onClick={setBgpurple}></div>
                <div className="colorBtn wheat" onClick={setBgwheat}></div>
                <div className="colorBtn green" onClick={setBggreen}></div>
            </div>
            <div className={`theme ${themeColor}`}>
                <p>Themes</p>
            </div>
        </div>
    );
}

export default Themes;